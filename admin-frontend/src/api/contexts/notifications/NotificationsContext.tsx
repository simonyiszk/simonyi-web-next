import { useToast } from '@chakra-ui/react'
import { NotificationView } from '@triszt4n/remark-types'
import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { useMutation } from 'react-query'
import { rconsole } from '../../../util/remark-console'
import { HasChildren } from '../../../util/types'
import { notificationModule } from '../../modules/notification.module'
import { fetchSignalrConnection } from './signalrConnectionClient'

export type NotificationsContextType = {
  notifications: NotificationView[]
  startNotificationReception: (userId: string) => Promise<void>
  stopNotificationReception: () => Promise<void>
  clearNotifications: () => void
  clearLoading: boolean
  showNotificationCircle: boolean
  setShowNotificationCircle: Dispatch<SetStateAction<boolean>>
}

export const NotificationsContext = createContext<NotificationsContextType>({
  notifications: [],
  startNotificationReception: async () => {},
  stopNotificationReception: async () => {},
  clearNotifications: () => {},
  clearLoading: false,
  showNotificationCircle: false,
  setShowNotificationCircle: () => {}
})

export const NotificationsProvider = ({ children }: HasChildren) => {
  const toast = useToast()
  const [notifications, setNotifications] = useState<NotificationView[]>([])
  const [showNotificationCircle, setShowNotificationCircle] = useState<boolean>(false)

  const signalrConnection = fetchSignalrConnection()
  const mutation = useMutation(notificationModule.clearNotifications, {
    onSuccess: ({ data: { deletedIds } }) => {
      const newNotifications = notifications.filter((notif) => !deletedIds.includes(notif.id))
      setNotifications(newNotifications)
    },
    onError: (error) => {
      const err = error as any
      rconsole.log('Error at clearNotifications', err.toJSON())
      toast({
        title: 'Error occured when clearing notifications',
        description: `${err.response.status} ${err.response.data.message || err.message} Try again later.`,
        status: 'error',
        isClosable: true
      })
    }
  })

  const notifHandler = (notification: NotificationView, userId: string) => {
    if (notification.userId === userId) {
      rconsole.log('[SIGNALR] Attach happened: ', notifications)
      setNotifications((oldArray) => [...oldArray, notification])
      setShowNotificationCircle(true)
    }
  }

  const startConnection = async (userId: string) => {
    try {
      await signalrConnection.start()
      signalrConnection.on(`newNotification`, (notif) => notifHandler(notif, userId))
      rconsole.log('SignalR Connected!', signalrConnection.connectionId)
    } catch (err) {
      rconsole.log(err)
      setTimeout(startConnection, 5000)
    }
  }

  const stopConnection = async () => {
    try {
      await signalrConnection.stop()
      setNotifications([])
      setShowNotificationCircle(false)
      rconsole.log('SignalR Disconnected!')
    } catch (err) {
      rconsole.log(err)
      setTimeout(stopConnection, 5000)
    }
  }

  const clearNotifications = () => {
    mutation.mutate(notifications.map((notif) => notif.id))
  }

  const startNotificationReception = async (userId: string) => {
    await startConnection(userId)
    if (signalrConnection.connectionId) {
      const dbNotifications = await notificationModule.fetchNotifications()
      setNotifications(dbNotifications || [])
      setShowNotificationCircle(notifications.length > 0)
    }
  }

  const stopNotificationReception = async () => {
    await stopConnection()
  }

  return (
    <NotificationsContext.Provider
      value={{
        notifications,
        startNotificationReception,
        stopNotificationReception,
        clearNotifications,
        clearLoading: mutation.isLoading,
        showNotificationCircle,
        setShowNotificationCircle
      }}
    >
      {children}
    </NotificationsContext.Provider>
  )
}

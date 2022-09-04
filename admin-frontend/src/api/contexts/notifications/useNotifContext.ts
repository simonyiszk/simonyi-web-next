import { useContext } from 'react'
import { NotificationsContext, NotificationsContextType } from './NotificationsContext'

export const useNotifContext = () => {
  return useContext<NotificationsContextType>(NotificationsContext)
}

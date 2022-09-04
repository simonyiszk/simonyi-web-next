import {
  Box,
  Button,
  createIcon,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  StackDivider,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { FaBell, FaTrashAlt } from 'react-icons/fa'
import { useAuthContext } from '../../../api/contexts/auth/useAuthContext'
import { useNotifContext } from '../../../api/contexts/notifications/useNotifContext'
import { NotificationItem } from './NotificationItem'

const CircleIcon = createIcon({
  displayName: 'CircleIcon',
  viewBox: '0 0 200 200',
  path: <path fill="currentColor" d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" />
})

export const NotifPopover = () => {
  const { isLoggedIn, loggedInUser } = useAuthContext()
  const {
    startNotificationReception,
    stopNotificationReception,
    notifications,
    clearNotifications,
    clearLoading,
    showNotificationCircle,
    setShowNotificationCircle
  } = useNotifContext()

  const dividerColor = useColorModeValue('gray.200', 'gray.600')
  const onOpenPopover = () => {
    setShowNotificationCircle(false)
  }
  const onClearPressed = () => {
    clearNotifications()
  }

  useEffect(() => {
    if (loggedInUser) {
      startNotificationReception(loggedInUser.id)
    } else {
      stopNotificationReception()
    }
  }, [loggedInUser])

  return (
    <Box>
      <Popover placement="bottom-end" closeOnBlur={true} onOpen={onOpenPopover}>
        <PopoverTrigger>
          <Box position="relative">
            <IconButton size="md" fontSize={{ base: 'xl', md: '2xl' }} variant="ghost" icon={<FaBell />} aria-label="Notifications popup" />
            {showNotificationCircle && <CircleIcon position="absolute" right={0.5} top={0.5} color="theme.400" />}
          </Box>
        </PopoverTrigger>
        <PopoverContent maxHeight="80vh">
          <PopoverHeader fontWeight={700}>Notifications</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          {isLoggedIn ? (
            <>
              <PopoverBody overflowY="auto" py={3}>
                {notifications.length > 0 ? (
                  <Box>
                    <VStack alignItems="stretch" spacing={3} divider={<StackDivider borderColor={dividerColor} />}>
                      {notifications
                        .sort((a, b) => b.createdAt - a.createdAt) // desc
                        .map((notif) => (
                          <NotificationItem key={notif.id} notif={notif} />
                        ))}
                    </VStack>
                  </Box>
                ) : (
                  <Box fontStyle="italic" p={2}>
                    Your inbox is empty...
                  </Box>
                )}
              </PopoverBody>
              <PopoverFooter display="flex" justifyContent="end">
                <Button
                  colorScheme="themeHelper"
                  variant="outline"
                  leftIcon={<FaTrashAlt />}
                  isLoading={clearLoading}
                  disabled={notifications.length === 0}
                  onClick={onClearPressed}
                >
                  Clear all
                </Button>
              </PopoverFooter>
            </>
          ) : (
            <PopoverBody py={3}>You are not logged in yet</PopoverBody>
          )}
        </PopoverContent>
      </Popover>
    </Box>
  )
}

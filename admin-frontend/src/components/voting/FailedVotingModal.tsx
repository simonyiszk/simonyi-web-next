import { Alert, AlertIcon, Box, Button, IconButton } from '@chakra-ui/react'
import { FaTimes } from 'react-icons/fa'

type Props = {
  message: string
  actionButton?: {
    text: string
    onClick: () => void
  }
  onClose: () => void
}

export const FailedVotingModal = ({ message, actionButton, onClose }: Props) => {
  return (
    <Alert colorScheme="theme" borderRadius="lg" justifyContent="space-between">
      <AlertIcon />
      <Box my={1}>{message}</Box>
      {actionButton && (
        <Button colorScheme="theme" variant="ghost" mx={2} size="sm" onClick={actionButton.onClick}>
          {actionButton.text}
        </Button>
      )}
      <IconButton
        size="xs"
        variant="ghost"
        colorScheme="theme"
        justifySelf="flex-start"
        aria-label="Close toast"
        icon={<FaTimes />}
        onClick={onClose}
      />
    </Alert>
  )
}

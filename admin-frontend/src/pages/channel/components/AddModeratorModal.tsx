import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  useToast
} from '@chakra-ui/react'
import { ChannelView } from '@triszt4n/remark-types'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FaCheck } from 'react-icons/fa'
import { useMutation } from 'react-query'
import { useAuthContext } from '../../../api/contexts/auth/useAuthContext'
import { channelModule } from '../../../api/modules/channel.module'
import { queryClient } from '../../../util/query-client'
import { rconsole } from '../../../util/remark-console'

type Props = {
  channel: ChannelView
  isOpen: boolean
  onClose: () => void
}

export const AddModeratorModal = ({ channel, isOpen, onClose }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    setError,
    watch
  } = useForm<{ moderatorUsername: string }>({ mode: 'all' })
  const toast = useToast()
  const { loggedInUser } = useAuthContext()

  const mutation = useMutation(channelModule.addModeratorToChannel, {
    onSuccess: () => {
      queryClient.invalidateQueries(['channelModerators', channel.id])
      onClose()
      toast({
        status: 'success',
        title: 'Successfully added moderator',
        description: `Moderator ${watch('moderatorUsername')} added to the channel ${channel.uriName}`
      })
    },
    onError: (error) => {
      const err = error as any
      rconsole.log('Error at addModeratorToChannel', err.toJSON())
      setError('moderatorUsername', { type: 'custom', message: err.response.data.message })
    }
  })

  const onSubmit: SubmitHandler<{ moderatorUsername: string }> = (values) => {
    mutation.mutate({ id: channel.id, moderatorUsername: values.moderatorUsername })
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Adding moderator to your channel</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired isInvalid={!!errors.moderatorUsername}>
              <FormLabel htmlFor="newUsername">New moderator's username</FormLabel>
              <Input
                id="newUsername"
                type="username"
                {...register('moderatorUsername', {
                  required: 'Required field',
                  validate: {
                    notSameAsLoggedInUser: (v) => v !== loggedInUser?.username || 'You do not need to add yourself'
                  },
                  setValueAs: (value) => value?.toLowerCase()
                })}
              />
              {errors?.moderatorUsername ? (
                <FormErrorMessage>{errors.moderatorUsername.message}</FormErrorMessage>
              ) : (
                <FormHelperText>
                  Make sure that the newly added moderator is joined to the channel and their username is correct!
                </FormHelperText>
              )}
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" colorScheme="theme" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Spacer />
            <Button rightIcon={<FaCheck />} colorScheme="theme" disabled={!isValid} isLoading={mutation.isLoading} type="submit">
              Confirm
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}

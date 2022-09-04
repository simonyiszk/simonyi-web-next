import {
  Button,
  Code,
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
  Spacer
} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaCheck } from 'react-icons/fa'
import { useMutation } from 'react-query'
import { useAuthContext } from '../../../api/contexts/auth/useAuthContext'
import { userModule } from '../../../api/modules/user.module'
import { queryClient } from '../../../util/query-client'
import { rconsole } from '../../../util/remark-console'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const EditUsernameModal = ({ isOpen, onClose }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    watch,
    setError
  } = useForm<{ newUsername: string }>({ mode: 'all' })
  const { loggedInUser } = useAuthContext()

  const mutation = useMutation(userModule.updateUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('currentUser')
      onClose()
    },
    onError: (error) => {
      const err = error as any
      rconsole.log('Error at updateUser', err.toJSON())
      setError('newUsername', { type: 'custom', message: err.response.data.message })
    }
  })

  const onSubmit: SubmitHandler<{ newUsername: string }> = (values) => {
    mutation.mutate({ username: values.newUsername })
  }

  if (!loggedInUser) {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>You are not logged in!</ModalHeader>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    )
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Change your username</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired isInvalid={!!errors.newUsername}>
              <FormLabel htmlFor="newUsername">New username</FormLabel>
              <Input
                id="newUsername"
                type="username"
                {...register('newUsername', {
                  required: 'Required field',
                  maxLength: { value: 32, message: 'Too long, maximum length is 32 characters' },
                  minLength: { value: 3, message: 'Too short, minimum length is 3 characters' },
                  pattern: { value: /^[a-z0-9_]+$/i, message: 'Field can contain only alphanumeric and underscore characters' },
                  validate: {
                    notSameAsOld: (v) => v !== loggedInUser.username || 'New username cannot be the current one'
                  },
                  setValueAs: (value) => value?.toLowerCase()
                })}
              />
              {errors?.newUsername ? (
                <FormErrorMessage>{errors.newUsername.message}</FormErrorMessage>
              ) : (
                <FormHelperText>
                  Your profile will be available at{' '}
                  <Code>
                    {window.location.hostname}/u/{watch('newUsername') || `<username>`}
                  </Code>
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
              Save
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}

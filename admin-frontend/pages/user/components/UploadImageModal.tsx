import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer } from '@chakra-ui/react'
import { AxiosError } from 'axios'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { FaUpload } from 'react-icons/fa'
import { useMutation } from 'react-query'
import { useAuthContext } from '../../../api/contexts/auth/useAuthContext'
import { userModule } from '../../../api/modules/user.module'
import { FileUpload } from '../../../components/form-elements/FileUpload'
import { queryClient } from '../../../util/query-client'
import { rconsole } from '../../../util/remark-console'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const UploadImageModal = ({ isOpen, onClose }: Props) => {
  const methods = useForm<{ files: FileList | undefined }>({ mode: 'all' })
  const {
    handleSubmit,
    formState: { isValid },
    setError,
    setValue
  } = methods
  const { loggedInUser } = useAuthContext()
  const mutation = useMutation(userModule.uploadProfileImage, {
    onSuccess: () => {
      queryClient.invalidateQueries('currentUser')
      onCancelPressed()
    },
    onError: (error) => {
      const err = error as AxiosError<{ message: string }>
      rconsole.log('Error at uploadProfileImage', JSON.stringify(err))
      setError('files', { type: 'custom', message: err.response?.data.message || err.message })
      setValue('files', undefined)
    }
  })

  const onSubmitFile: SubmitHandler<{ files: FileList | undefined }> = (values) => {
    if (values.files) mutation.mutate({ imageFile: values.files[0] })
  }

  const onCancelPressed = () => {
    onClose()
    setValue('files', undefined)
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
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmitFile)}>
            <ModalHeader>Change user profile image</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FileUpload required fieldName="files" helper={<>Choose a file to upload as image</>} />
            </ModalBody>
            <ModalFooter>
              <Button variant="outline" colorScheme="theme" mr={3} onClick={onCancelPressed} type="button">
                Cancel
              </Button>
              <Spacer />
              <Button rightIcon={<FaUpload />} colorScheme="theme" disabled={!isValid} isLoading={mutation.isLoading} type="submit">
                Upload
              </Button>
            </ModalFooter>
          </form>
        </FormProvider>
      </ModalContent>
    </Modal>
  )
}

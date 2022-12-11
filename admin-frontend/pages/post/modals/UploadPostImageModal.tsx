import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer } from '@chakra-ui/react'
import { AxiosError } from 'axios'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { FaUpload } from 'react-icons/fa'
import { useMutation } from 'react-query'
import { postModule } from '../../../api/modules/post.module'
import { FileUpload } from '../../../components/form-elements/FileUpload'
import { queryClient } from '../../../util/query-client'
import { rconsole } from '../../../util/remark-console'

type Props = {
  postId: string
  isOpen: boolean
  onClose: () => void
}

export const UploadPostImageModal = ({ postId, isOpen, onClose }: Props) => {
  const methods = useForm<{ files: FileList | undefined }>({ mode: 'all' })
  const {
    handleSubmit,
    formState: { isValid },
    setError,
    setValue
  } = methods

  const mutation = useMutation(postModule.uploadPostImage, {
    onSuccess: () => {
      queryClient.invalidateQueries(['post', postId])
      onCancelPressed()
    },
    onError: (error) => {
      const err = error as AxiosError<{ message: string }>
      rconsole.log('Error at uploadPostImage', JSON.stringify(err))
      setError('files', { type: 'custom', message: err.response?.data.message || err.message })
      setValue('files', undefined)
    }
  })

  const onSubmitFile: SubmitHandler<{ files: FileList | undefined }> = (values) => {
    if (values.files) mutation.mutate({ id: postId, postData: { imageFile: values.files[0] } })
  }

  const onCancelPressed = () => {
    onClose()
    setValue('files', undefined)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmitFile)}>
            <ModalHeader>Upload new featured image</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FileUpload required fieldName="files" helper={<>Choose a file to upload as the featured image on your post</>} />
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

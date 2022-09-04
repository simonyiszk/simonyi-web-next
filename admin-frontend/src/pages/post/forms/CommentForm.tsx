import { Button, Flex, VStack } from '@chakra-ui/react'
import { CommentView, UpdateCommentView } from '@triszt4n/remark-types'
import { useEffect } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { FaCheck, FaChevronLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { RemarkEditor } from '../../../components/editor/RemarkEditor'

type Props = {
  buttonProps: {
    sendButtonIcon?: JSX.Element
    sendButtonText: string
    hideBackButton?: boolean
  }
  onSend: (creatable: UpdateCommentView) => void
  defaultValues?: CommentView
  canEraseContent?: boolean
  isSendLoading: boolean
}

export const CommentForm = ({
  buttonProps: { sendButtonText, hideBackButton = false, sendButtonIcon = <FaCheck /> },
  onSend,
  defaultValues,
  canEraseContent,
  isSendLoading
}: Props) => {
  const navigate = useNavigate()
  const methods = useForm<UpdateCommentView>({ mode: 'all' })
  const {
    handleSubmit,
    setValue,
    formState: { isValid }
  } = methods

  useEffect(() => {
    if (canEraseContent) setValue('rawMarkdown', '')
  }, [canEraseContent])

  const onSubmit: SubmitHandler<UpdateCommentView> = (values) => {
    onSend(values)
  }

  return (
    <FormProvider {...methods}>
      <VStack align="stretch" as="form" onSubmit={handleSubmit(onSubmit)}>
        <RemarkEditor
          formDetails={{
            id: 'rawMarkdown',
            promptText: 'Share your thoughts in a markdown formatted comment!',
            minChar: 1,
            maxChar: 500
          }}
          defaultValue={defaultValues?.rawMarkdown}
          textAreaHeight="8rem"
          previewHeight="12rem"
        />
        <Flex justifyContent="space-between" px={4}>
          {!hideBackButton && (
            <Button variant="outline" leftIcon={<FaChevronLeft />} colorScheme="theme" onClick={() => navigate(-1)} type="button">
              Back
            </Button>
          )}
          <Flex flex={1} justifyContent="end">
            <Button disabled={!isValid} rightIcon={sendButtonIcon} colorScheme="theme" isLoading={isSendLoading} type="submit">
              {sendButtonText}
            </Button>
          </Flex>
        </Flex>
      </VStack>
    </FormProvider>
  )
}

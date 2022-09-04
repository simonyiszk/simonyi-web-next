import { Box, HStack, Icon, VStack } from '@chakra-ui/react'
import { NotificationView } from '@triszt4n/remark-types'
import { FaRegPaperPlane } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import { RemarkUIRenderer } from '../../../assets/remark-ui-renderer'
import { toRelativeDateString } from '../../../util/core-util-functions'

type Props = {
  notif: NotificationView
}

export const NotificationItem = ({ notif: { messageTitle, messageBody, createdAt } }: Props) => {
  return (
    <VStack alignItems="stretch">
      <HStack flexWrap="wrap" justifyContent="space-between">
        <Box fontWeight={700}>{messageTitle}</Box>
        <Box flex={1}>
          <HStack fontSize="xs" justifyContent="end">
            <Box whiteSpace="nowrap">{toRelativeDateString(createdAt)}</Box>
            <Icon as={FaRegPaperPlane} />
          </HStack>
        </Box>
      </HStack>
      <Box fontSize="sm">
        <ReactMarkdown components={RemarkUIRenderer()} children={messageBody} skipHtml />
      </Box>
    </VStack>
  )
}

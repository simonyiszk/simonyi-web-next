import {
  Box,
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Skeleton,
  SkeletonCircle,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
  useToast,
  VStack
} from '@chakra-ui/react'
import { ChannelView } from '@triszt4n/remark-types'
import { FaChevronDown, FaEdit, FaTrashAlt, FaUserPlus } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { channelModule } from '../../../api/modules/channel.module'
import { RemarkUIRenderer } from '../../../assets/remark-ui-renderer'
import { toDateString, toReadableNumber } from '../../../util/core-util-functions'
import { queryClient } from '../../../util/query-client'
import { rconsole } from '../../../util/remark-console'
import { AddModeratorModal } from './AddModeratorModal'
import { ModeratorsSection } from './moderator/ModeratorsSection'

type Props = {
  channelId: string
  isLoading: boolean
  channel: ChannelView | undefined
}

export const AboutTab = ({ channelId, isLoading, channel }: Props) => {
  const navigate = useNavigate()
  const toast = useToast()
  const dangerColor = useColorModeValue('red.600', 'red.400')
  const circleSize = useBreakpointValue({ base: '10', md: '14' })
  const { isOpen, onOpen: onModeratorAddPressed, onClose } = useDisclosure()

  const mutation = useMutation(channelModule.deleteChannel, {
    onMutate: () => {
      toast({
        title: 'Action started',
        description: `Deleting channel is in progress, please wait.`,
        status: 'info',
        isClosable: true,
        duration: 10000
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries('channels', { refetchInactive: true })
      setTimeout(() => {
        toast({
          title: 'Action successfully done',
          description: `Deleting channel was successful! Redirecting to home page.`,
          status: 'success',
          isClosable: true,
          duration: 3000
        })
        navigate('/')
      }, 2000)
    },
    onError: (error) => {
      const err = error as any
      rconsole.log('Error at deleteChannel', err.toJSON())
      toast({
        title: 'Error occured when deleting channel',
        description: `${err.response.status} ${err.response.data.message} Try again later.`,
        status: 'error',
        isClosable: true
      })
    }
  })

  const onEditPressed = () => {
    navigate('edit', { state: { channel } })
  }
  const onDeletePressed = () => {
    if (confirm('Are you sure, you want to delete this channel?')) mutation.mutate(channelId)
  }

  if (isLoading) {
    return (
      <VStack spacing={14} align="stretch">
        <Stat>
          <StatLabel>Channel</StatLabel>
          <Skeleton height="2rem" width="80%" />
          <Skeleton height="1rem" width="70%" mt={2} />
        </Stat>
        <Stat>
          <StatLabel>Statistics</StatLabel>
          <Skeleton height="2rem" width="80%" />
          <Skeleton height="1rem" width="70%" mt={2} />
        </Stat>
        <Box>
          <Text fontSize="sm">Description</Text>
          <Skeleton height="2rem" width="60%" mt={4} />
          <Skeleton height="1rem" width="100%" mt={2} />
          <Skeleton height="1rem" width="70%" mt={2} />
          <Skeleton height="1rem" width="100%" mt={4} />
          <Skeleton height="1rem" width="30%" mt={2} />
        </Box>
        <Box>
          <Text fontSize="sm" mb={2}>
            Moderators
          </Text>
          <HStack spacing={4} p={2}>
            <SkeletonCircle size={circleSize} />
            <Skeleton height="2rem" width="60%" mt={4} />
          </HStack>
          <HStack spacing={4} p={2}>
            <SkeletonCircle size={circleSize} />
            <Skeleton height="2rem" width="60%" mt={4} />
          </HStack>
        </Box>
      </VStack>
    )
  }

  return (
    <VStack spacing={14} align="stretch">
      <Flex flexDir={{ base: 'column-reverse', sm: 'row' }}>
        <Stat flex={1}>
          <StatLabel>Channel</StatLabel>
          <StatNumber>{channel?.title}</StatNumber>
          <StatHelpText>channel founded {toDateString(channel?.createdAt || 0)}</StatHelpText>
        </Stat>
        <Flex justifyContent="end" ml={2}>
          {channel?.amIOwner && (
            <Menu>
              <MenuButton as={Button} rightIcon={<FaChevronDown />} colorScheme="theme">
                Actions
              </MenuButton>
              <MenuList>
                <MenuItem icon={<FaEdit />} onClick={onEditPressed}>
                  Edit channel
                </MenuItem>
                <MenuItem icon={<FaUserPlus />} onClick={onModeratorAddPressed}>
                  Add moderator
                </MenuItem>
                <MenuDivider />
                <MenuItem color={dangerColor} icon={<FaTrashAlt />} onClick={onDeletePressed}>
                  Delete channel
                </MenuItem>
              </MenuList>
            </Menu>
          )}
        </Flex>
      </Flex>
      <Stat mt={{ base: 2, md: 0 }} ml={{ base: 0, md: 2 }}>
        <StatLabel>Statistics</StatLabel>
        <StatNumber>{toReadableNumber(channel?.postsCount || 0)} posts in channel</StatNumber>
        <StatHelpText>{toReadableNumber(channel?.joinCount || 0)} users joined</StatHelpText>
      </Stat>
      <Box>
        <Text fontSize="sm">Description</Text>
        <ReactMarkdown components={RemarkUIRenderer()} children={channel?.descRawMarkdown || ''} skipHtml />
      </Box>
      <Box>
        <ModeratorsSection channelId={channelId} amIOwner={channel?.amIOwner} />
      </Box>
      <AddModeratorModal channel={channel!!} isOpen={isOpen} onClose={onClose} />
    </VStack>
  )
}

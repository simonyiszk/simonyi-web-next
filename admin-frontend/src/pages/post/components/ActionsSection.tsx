import {
  Box,
  Button,
  Flex,
  HStack,
  Link as ChakraLink,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorModeValue,
  useToast
} from '@chakra-ui/react'
import { PostView } from '@triszt4n/remark-types'
import { FaChevronDown, FaComments, FaEdit, FaRegFileImage, FaTrashAlt } from 'react-icons/fa'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { postModule } from '../../../api/modules/post.module'
import { queryClient } from '../../../util/query-client'
import { rconsole } from '../../../util/remark-console'

type Props = {
  post: PostView
  onUploadImagePressed: () => void
}

export const ActionsSection = ({ post, onUploadImagePressed }: Props) => {
  const navigate = useNavigate()
  const toast = useToast()
  const dangerColor = useColorModeValue('red.600', 'red.400')
  const onEditPressed = () => {
    navigate('./edit', { state: { post } })
  }

  const mutation = useMutation(postModule.deletePost, {
    onMutate: () => {
      toast({
        title: 'Action started',
        description: `Deleting post is in progress, please wait.`,
        status: 'info',
        isClosable: true,
        duration: 10000
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['channelPosts', post.channel.id], { refetchInactive: true })
      setTimeout(() => {
        toast({
          title: 'Action successfully done',
          description: `Deleting post was successful! Redirecting to channel page.`,
          status: 'success',
          isClosable: true,
          duration: 3000
        })
        navigate(`/channels/${post.channel.id}`)
      }, 2000)
    },
    onError: (error) => {
      const err = error as any
      rconsole.log('Error at deletePost', err.toJSON())
      toast({
        title: 'Error occured when deleting post',
        description: `${err.response.status} ${err.response.data.message} Try again later.`,
        status: 'error',
        isClosable: true
      })
    }
  })

  const onDeletePressed = () => {
    if (confirm('Are you sure, you want to delete this post?')) mutation.mutate(post.id)
  }

  return (
    <HStack>
      <ChakraLink href="#comments" _hover={{ textDecoration: 'none' }}>
        <Button leftIcon={<FaComments />} variant="ghost" colorScheme="theme">
          Comments
        </Button>
      </ChakraLink>
      <Flex flex={1} borderTopWidth="2px" />
      <Box>
        {(post.amIPublisher || post.channel.amIModerator || post.channel.amIOwner) && (
          <Menu>
            <MenuButton as={Button} rightIcon={<FaChevronDown />} variant="ghost" colorScheme="theme">
              Actions
            </MenuButton>
            <MenuList>
              <MenuItem icon={<FaEdit />} onClick={onEditPressed}>
                Edit post
              </MenuItem>
              <MenuItem icon={<FaRegFileImage />} onClick={onUploadImagePressed}>
                Upload featured image
              </MenuItem>
              <MenuDivider />
              <MenuItem color={dangerColor} icon={<FaTrashAlt />} onClick={onDeletePressed}>
                Delete post
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </Box>
    </HStack>
  )
}

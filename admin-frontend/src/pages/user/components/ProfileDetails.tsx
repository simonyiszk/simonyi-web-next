import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Tooltip,
  useBreakpointValue,
  useColorModeValue
} from '@chakra-ui/react'
import { UserView } from '@triszt4n/remark-types'
import { FaAddressCard, FaAt, FaChevronDown, FaEdit, FaRegFileImage, FaSignOutAlt } from 'react-icons/fa'
import { useQuery } from 'react-query'
import { channelModule } from '../../../api/modules/channel.module'
import { postModule } from '../../../api/modules/post.module'
import { JoinedChannelsSection } from './channel/JoinedChannelsSection'
import { CreatedPostsSection } from './post/CreatedPostsSection'

type Props = {
  user: UserView
  profileOptions?: {
    onChangeProfileImagePressed: () => void
    onLogoutPressed: () => void
    onUsernameEditPressed: () => void
  }
}

export const ProfileDetails = ({ user, profileOptions }: Props) => {
  const dangerColor = useColorModeValue('red.600', 'red.400')
  const { onLogoutPressed, onUsernameEditPressed, onChangeProfileImagePressed } = profileOptions || {}
  const {
    isLoading: isLoadingChannels,
    data: channels,
    error: errorInChannels
  } = useQuery(['userChannels', user.id], () => channelModule.fetchJoinedChannelsOfUser(user.id))

  const {
    isLoading: isLoadingPosts,
    data: posts,
    error: errorInPosts
  } = useQuery(['userPosts', user.id], () => postModule.fetchCreatedPostsOfUser(user.id))

  return (
    <Box w="100%">
      <HStack flexWrap="wrap" justifyContent="space-between" alignItems="center" mb={5}>
        <HStack flexWrap="wrap" spacing={4}>
          <Avatar size={useBreakpointValue({ base: 'lg', md: 'xl' })} name={`${user.firstName} ${user.lastName}`} src={user.imageUrl} />
          <HStack>
            <Box fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={700} wordBreak="break-all">
              u/{user.username}
            </Box>
            {profileOptions && (
              <Tooltip label="Change username">
                <IconButton
                  size="xs"
                  alignSelf="flex-start"
                  aria-label="Change username"
                  onClick={onUsernameEditPressed}
                  icon={<FaEdit />}
                  colorScheme="themeHelper"
                />
              </Tooltip>
            )}
          </HStack>
        </HStack>
        {profileOptions && (
          <Flex flex={1} justifyContent="end">
            <Menu>
              <MenuButton as={Button} colorScheme="themeHelper" rightIcon={<FaChevronDown />}>
                Actions
              </MenuButton>
              <MenuList>
                <MenuItem icon={<FaRegFileImage />} onClick={onChangeProfileImagePressed}>
                  Change profile image
                </MenuItem>
                <MenuItem icon={<FaEdit />} onClick={onUsernameEditPressed}>
                  Change username
                </MenuItem>
                <MenuDivider />
                <MenuItem color={dangerColor} icon={<FaSignOutAlt />} onClick={onLogoutPressed}>
                  Log out
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        )}
      </HStack>
      <Box>
        <HStack>
          <FaAddressCard />
          <Box>
            {user.firstName} {user.lastName}
          </Box>
        </HStack>
        <HStack>
          <FaAt />
          <Box>{user.email}</Box>
        </HStack>
      </Box>
      <JoinedChannelsSection channels={channels} isLoading={isLoadingChannels} error={errorInChannels} userId={user.id} />
      <CreatedPostsSection posts={posts} isLoading={isLoadingPosts} error={errorInPosts} />
    </Box>
  )
}

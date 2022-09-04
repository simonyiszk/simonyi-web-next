import {
  ChannelJoinModel,
  ChannelModel,
  ChannelPartialView,
  ChannelView,
  CreateChannelView,
  PostView,
  UpdateChannelView,
  UserView
} from '@triszt4n/remark-types'
import axios from 'axios'
import { CHANNEL_PATH_PREFIX, POST_PATH_PREFIX } from './_common'

type ModeratorInfo = { owner: UserView; moderators: UserView[] }
type JoinInfo = { channel: ChannelModel & { id: string }; join: ChannelJoinModel & { id: string } }

class ChannelModule {
  async fetchChannels(): Promise<ChannelView[]> {
    const response = await axios.get<ChannelView[]>(`${CHANNEL_PATH_PREFIX}/channels`)
    return response.data
  }

  async fetchModeratorInfoOfChannel(id: string): Promise<ModeratorInfo> {
    const response = await axios.get<ModeratorInfo>(`${CHANNEL_PATH_PREFIX}/channels/${id}/modinfo`)
    return response.data
  }

  async fetchPostsOfChannel(id: string): Promise<PostView[]> {
    const response = await axios.get<PostView[]>(`${POST_PATH_PREFIX}/posts/channel/${id}`)
    return response.data
  }

  async fetchChannelIdByUriName(uriName: string): Promise<{ id: string }> {
    const response = await axios.get<{ id: string }>(`${CHANNEL_PATH_PREFIX}/channels/uriName/${uriName}`)
    return response.data
  }

  async fetchJoinedChannelsOfUser(id: string): Promise<ChannelPartialView[]> {
    const response = await axios.get<ChannelPartialView[]>(`${CHANNEL_PATH_PREFIX}/channels/user/${id}/joins`)
    return response.data
  }

  async fetchChannel(id: string): Promise<ChannelView> {
    const response = await axios.get<ChannelView>(`${CHANNEL_PATH_PREFIX}/channels/${id}`)
    return response.data
  }

  async createChannel(channelData: CreateChannelView) {
    return axios.post<ChannelModel & { id: string }>(`${CHANNEL_PATH_PREFIX}/channels`, channelData)
  }

  async updateChannel({ id, channelData }: { id: string; channelData: UpdateChannelView }) {
    return axios.patch<ChannelModel & { id: string }>(`${CHANNEL_PATH_PREFIX}/channels/${id}`, channelData)
  }

  async deleteChannel(id: string) {
    return axios.delete<ChannelModel & { id: string }>(`${CHANNEL_PATH_PREFIX}/channels/${id}`)
  }

  async joinOrLeaveChannel({ id, intent }: { id: string; intent: 'join' | 'leave' }) {
    return axios.post<JoinInfo>(`${CHANNEL_PATH_PREFIX}/channels/${id}/join`, { intent })
  }

  async addModeratorToChannel({ id, moderatorUsername }: { id: string; moderatorUsername: string }) {
    return axios.post<ChannelModel & { id: string }>(`${CHANNEL_PATH_PREFIX}/channels/${id}/moderator`, {
      moderatorUsername
    })
  }

  async removeModeratorFromChannel({ id, moderatorId }: { id: string; moderatorId: string }) {
    return axios.delete<ChannelModel & { id: string }>(`${CHANNEL_PATH_PREFIX}/channels/${id}/moderator/${moderatorId}`)
  }
}

export const channelModule = new ChannelModule()

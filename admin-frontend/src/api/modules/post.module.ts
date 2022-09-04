import {
  CommentView,
  CreatePostView,
  MyVoteType,
  PostModel,
  PostPartialView,
  PostView,
  PostVoteModel,
  UpdatePostImageView,
  UpdatePostView
} from '@triszt4n/remark-types'
import axios from 'axios'
import { POST_PATH_PREFIX } from './_common'

class PostModule {
  async fetchPost(id: string): Promise<PostView> {
    const response = await axios.get<PostView>(`${POST_PATH_PREFIX}/posts/${id}`)
    return response.data
  }

  async fetchCommentsOfPost(id: string): Promise<CommentView[]> {
    const response = await axios.get<CommentView[]>(`${POST_PATH_PREFIX}/posts/${id}/comments`)
    return response.data
  }

  async fetchCreatedPostsOfUser(id: string): Promise<PostPartialView[]> {
    const response = await axios.get<PostPartialView[]>(`${POST_PATH_PREFIX}/posts/user/${id}`)
    return response.data
  }

  async createPost(postData: CreatePostView) {
    return axios.post<PostModel & { id: string }>(`${POST_PATH_PREFIX}/posts`, postData)
  }

  async updatePost({ id, postData }: { id: string; postData: UpdatePostView }) {
    return axios.patch<PostModel & { id: string }>(`${POST_PATH_PREFIX}/posts/${id}`, postData)
  }

  async uploadPostImage({ id, postData: { imageFile } }: { id: string; postData: UpdatePostImageView }) {
    const formData = new FormData()
    formData.append('file', imageFile)
    return axios.post<PostModel & { id: string }>(`${POST_PATH_PREFIX}/posts/${id}/image?filename=${imageFile.name}`, formData)
  }

  async deletePost(id: string) {
    return axios.delete<PostModel & { id: string }>(`${POST_PATH_PREFIX}/posts/${id}`)
  }

  async votePost({ id, voteType }: { id: string; voteType: MyVoteType }) {
    return axios.post<PostVoteModel & { id: string }>(`${POST_PATH_PREFIX}/posts/${id}/vote`, { intent: voteType })
  }
}

export const postModule = new PostModule()

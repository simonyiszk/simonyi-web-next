import { CommentModel, CommentView, CommentVoteModel, CreateCommentView, MyVoteType, UpdateCommentView } from '@triszt4n/remark-types'
import axios from 'axios'
import { COMMENT_PATH_PREFIX } from './_common'

class CommentModule {
  async fetchComment(id: string) {
    const response = await axios.get<CommentView>(`${COMMENT_PATH_PREFIX}/comments/${id}`)
    return response.data
  }

  async createComment(commentData: CreateCommentView) {
    return axios.post<CommentModel & { id: string }>(`${COMMENT_PATH_PREFIX}/comments`, commentData)
  }

  async updateComment({ id, commentData }: { id: string; commentData: UpdateCommentView }) {
    return axios.patch<CommentModel & { id: string }>(`${COMMENT_PATH_PREFIX}/comments/${id}`, commentData)
  }

  async deleteComment(id: string) {
    return axios.delete<CommentModel & { id: string }>(`${COMMENT_PATH_PREFIX}/comments/${id}`)
  }

  async voteComment({ id, voteType }: { id: string; voteType: MyVoteType }) {
    return axios.post<CommentVoteModel & { id: string }>(`${COMMENT_PATH_PREFIX}/comments/${id}/vote`, { intent: voteType })
  }
}

export const commentModule = new CommentModule()

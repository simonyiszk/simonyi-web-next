import { UpdateUserImageView, UpdateUserView, UserView } from '@triszt4n/remark-types'
import axios from 'axios'
import { USER_PATH_PREFIX } from './_common'

class UserModule {
  async fetchCurrentUser() {
    const response = await axios.get<UserView>(`${USER_PATH_PREFIX}/profile`)
    return response.data
  }

  async fetchUserByUsername(username: string) {
    const response = await axios.get<UserView>(`${USER_PATH_PREFIX}/users/username/${username}`)
    return response.data
  }

  async updateUser(userData: UpdateUserView) {
    return axios.patch<UserView>(`${USER_PATH_PREFIX}/profile`, userData)
  }

  async uploadProfileImage(userData: UpdateUserImageView) {
    const { imageFile } = userData
    const formData = new FormData()
    formData.append('file', imageFile)
    return axios.post<UserView>(`${USER_PATH_PREFIX}/profile/image?filename=${imageFile.name}`, formData)
  }

  async loginUser(accessToken: string) {
    return axios.post<{ user: UserView; jwt: string }>(`${USER_PATH_PREFIX}/login`, { accessToken })
  }
}

export const userModule = new UserModule()

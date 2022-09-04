import { NotificationView } from '@triszt4n/remark-types'
import axios from 'axios'
import Cookies from 'js-cookie'
import { CookieKeys } from '../contexts/CookieKeys'
import { NOTIFICATION_PATH_PREFIX } from './_common'

class NotificationModule {
  async fetchNotifications(): Promise<NotificationView[]> {
    const response = await axios.get<NotificationView[]>(`${NOTIFICATION_PATH_PREFIX}/notifications`)
    return response.data
  }

  async clearNotifications(notificationIds: string[]) {
    return axios.delete<{ deletedIds: string[] }>(`${NOTIFICATION_PATH_PREFIX}/notifications`, {
      data: { notificationIds },
      headers: { Authorization: `Bearer ${Cookies.get(CookieKeys.REMARK_JWT_TOKEN)}` }
    })
  }
}

export const notificationModule = new NotificationModule()

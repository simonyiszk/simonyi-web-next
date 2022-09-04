import { MY_NODE_ENV } from '../../util/environment'

export const CHANNEL_PATH_PREFIX = MY_NODE_ENV === 'production' ? '/channels' : ''
export const POST_PATH_PREFIX = MY_NODE_ENV === 'production' ? '/posts' : ''
export const NOTIFICATION_PATH_PREFIX = MY_NODE_ENV === 'production' ? '/notifications' : ''
export const COMMENT_PATH_PREFIX = MY_NODE_ENV === 'production' ? '/comments' : ''
export const USER_PATH_PREFIX = MY_NODE_ENV === 'production' ? '/users' : ''

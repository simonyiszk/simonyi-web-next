import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
import { API_HOST } from '../../../util/environment'
import { NOTIFICATION_PATH_PREFIX } from '../../modules/_common'

export const fetchSignalrConnection = (): HubConnection => {
  return new HubConnectionBuilder()
    .withUrl(`${API_HOST}${NOTIFICATION_PATH_PREFIX}`)
    .withAutomaticReconnect()
    .configureLogging(process.env.NODE_ENV == 'production' ? LogLevel.Information : LogLevel.Debug)
    .build()
}

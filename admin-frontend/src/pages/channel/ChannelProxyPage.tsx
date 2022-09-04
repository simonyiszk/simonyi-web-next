import { useQuery } from 'react-query'
import { Navigate, useParams } from 'react-router-dom'
import { channelModule } from '../../api/modules/channel.module'
import { PuzzleAnimated } from '../../components/commons/PuzzleAnimated'

export const ChannelProxyPage = () => {
  const { uriName } = useParams()
  const { isLoading, data: channel, error } = useQuery(['channel', uriName], () => channelModule.fetchChannelIdByUriName(uriName!!))

  if (isLoading) {
    return <PuzzleAnimated text="Loading" />
  }

  if (error) {
    console.error('[DEBUG] Error at ChannelProxyPage', error)
    return (
      <Navigate replace to="/error" state={{ title: 'Error occured loading channel', messages: [(error as any)?.response.data.message] }} />
    )
  }

  return <Navigate replace to={`/channels/${channel?.id}`} />
}

import { Route, Routes } from 'react-router-dom'
import { RLayout } from './components/commons/RLayout'
import { ChannelPage } from './pages/channel/ChannelPage'
import { ChannelProxyPage } from './pages/channel/ChannelProxyPage'
import { CreateChannelPage } from './pages/channel/forms/CreateChannelPage'
import { EditChannelPage } from './pages/channel/forms/EditChannelPage'
import { ErrorPage } from './pages/error/ErrorPage'
import { ExplorePage } from './pages/explore/ExplorePage'
import { IndexPage } from './pages/index/IndexPage'
import { LoginPage } from './pages/login/LoginPage'
import { LogoutPage } from './pages/logout/LogoutPage'
import { CreatePostPage } from './pages/post/forms/CreatePostPage'
import { EditCommentPage } from './pages/post/forms/EditCommentPage'
import { EditPostPage } from './pages/post/forms/EditPostPage'
import { PostPage } from './pages/post/PostPage'
import { ProfilePage } from './pages/user/ProfilePage'
import { UserPage } from './pages/user/UserPage'
import { UserProxyPage } from './pages/user/UserProxyPage'

export const App = () => {
  return (
    <RLayout>
      <Routes>
        <Route path="/">
          <Route index element={<IndexPage />} />
          <Route path="explore" element={<ExplorePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="logout" element={<LogoutPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="u">
            <Route path=":username" element={<UserProxyPage />} />
          </Route>
          <Route path="users">
            <Route path=":userId" element={<UserPage />} />
          </Route>
          <Route path="ch">
            <Route path=":uriName" element={<ChannelProxyPage />} />
          </Route>
          <Route path="channels">
            <Route path="new" element={<CreateChannelPage />} />
            <Route path=":channelId">
              <Route index element={<ChannelPage />} />
              <Route path="edit" element={<EditChannelPage />} />
            </Route>
          </Route>
          <Route path="posts">
            <Route path="new/:channelId" element={<CreatePostPage />} />
            <Route path=":postId">
              <Route index element={<PostPage />} />
              <Route path="edit" element={<EditPostPage />} />
            </Route>
          </Route>
          <Route path="comments">
            <Route path=":commentId">
              <Route path="edit/:postId" element={<EditCommentPage />} />
            </Route>
          </Route>
          <Route path="error" element={<ErrorPage />} />
          <Route
            path="*"
            element={
              <ErrorPage title="Page not found" messages={['Oops, it looks like you want to visit a page that is not found anymore!']} />
            }
          />
        </Route>
      </Routes>
    </RLayout>
  )
}

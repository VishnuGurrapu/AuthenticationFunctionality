import Cookies from 'js-cookie'
import Header from '../Header'
import Logout from '../LogoutButton'
import './index.css'

const Home = () => {
  const onClickLogout = props => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <>
      <Header />
      <div>
        <h1>Home Route</h1>
        <Logout onClickLogout={onClickLogout} />
      </div>
    </>
  )
}
export default Home

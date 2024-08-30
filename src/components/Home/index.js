import Header from '../Header'
import './index.css'

const Home = () => {
  const onClickLogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <>
      <Header />
      <div>
        <h1>Home Route</h1>
        <button onClick={onClickLogout}>Logout</button>
      </div>
    </>
  )
}
export default Home

import Header from '../Header'
import './index.css'

const About = () => {
  const onClickLogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <>
      <Header />
      <div>
        <h1>About Route</h1>
        <button onClick={onClickLogout}>Logout</button>
      </div>
    </>
  )
}
export default About

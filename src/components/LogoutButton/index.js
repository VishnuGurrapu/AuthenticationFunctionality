// Write your JS code here
const Logout = props => {
  const {onClickLogout} = props
  const onClickbtn = () => {
    onClickLogout()
  }
  return (
    <button type="button" onClick={onClickbtn}>
      logout
    </button>
  )
}
export default Logout

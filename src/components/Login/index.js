import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  submitForm = async () => {
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    }
  }

  render() {
    return (
      <div>
        <h1>PLease Login</h1>
        <button onClick={this.submitForm}>Login with Sample Creds</button>
      </div>
    )
  }
}

export default Login

import React from 'react'
import './Login.css'
import logo from './img/discord-logo.png'
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(err => alert(err.message))
  }
  return (
    <div className='login'>
      <div className="login__logo">
        <img src={logo} alt="discord-logo" />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login

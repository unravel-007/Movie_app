// Login.jsx
import React from 'react'
import { TextField, Button } from '@mui/material'

const Login = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '5%' }}>
      <h1>Login Page</h1>
      <TextField variant="outlined" label="Username" />
      <br /><br />
      <TextField variant="outlined" label="Password" type="password" />
      <br /><br />
      <Button variant="contained">Log In</Button>
    </div>
  )
}

export default Login

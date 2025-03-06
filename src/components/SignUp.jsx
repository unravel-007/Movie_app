// SignUp.jsx
import React from 'react'
import { TextField, Button } from '@mui/material'
import Grid from '@mui/material/Grid'

const SignUp = () => {
  return (
    <div style={{ marginTop: '10%', textAlign: 'center' }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={4}>
          <TextField variant="outlined" label="Username" fullWidth />
          <br /><br />
          <TextField variant="outlined" label="Password" fullWidth type="password" />
          <br /><br />
          <TextField variant="outlined" label="Email" fullWidth type="email" />
          <br /><br />
          <Button variant="contained" color="success" fullWidth>Sign Up</Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default SignUp

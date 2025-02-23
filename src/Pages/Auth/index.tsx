// import { Box } from '@mui/material'
import AuthLayout from '../../layouts/AuthLayout'
import { Outlet } from 'react-router-dom'

const Auth = () => {
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  )
}

export default Auth

import { Box } from '@mui/material'
import React from 'react'
interface Layout {
  children: React.ReactNode
}
const AuthLayout: React.FC<Layout> = ({ children }) => {
  return (
    <Box className='w-screen h-screen bg-blue-900 flex justify-center items-center'>
      {children}
    </Box>
  )
}

export default AuthLayout

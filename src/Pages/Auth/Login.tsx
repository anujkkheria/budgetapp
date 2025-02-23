import { Box, Button } from '@mui/material'
import Checkbox from '../../Components/Checkbox'
import Input from '../../Components/Input/Input'
const Login = () => {
  return (
    <Box className='size-3/4 bg-slate-100 rounded-md shadow-xl flex justify-center items-center flex-col p-3 border-[5px] border-black'>
      <h2 className='text-center font-bold'>Login</h2>
      <form action='' className='size-full flex flex-col gap-4 p-2'>
        <Input />
        <Input />
        <Box className='flex'>
          <Checkbox />
          <div>Forgot password</div>
        </Box>
        <Button>Submit</Button>
      </form>
    </Box>
  )
}

export default Login

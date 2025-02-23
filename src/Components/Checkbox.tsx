import { Checkbox as MuiCheckBox, FormControlLabel } from '@mui/material'

const Checkbox = () => {
  return (
    <FormControlLabel
      control={<MuiCheckBox size='small' />}
      label='remember me'
    />
  )
}
export default Checkbox

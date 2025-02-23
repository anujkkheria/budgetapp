import { useRoutes } from 'react-router-dom'
import AllRoutes from './router'

const Router = () => {
  return useRoutes(AllRoutes)
}

export default Router

import Auth from '../../Pages/Auth/index'
import Login from '../../Pages/Auth/Login'
const AllRoutes = [
  {
    path: '/',
    element: <Auth />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
    ],
  },
]

export default AllRoutes

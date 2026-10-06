import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Provider} from 'react-redux'
import App from './App.jsx'
import store from './store/store.js'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import {AuthLayout} from './components/index.js'
import{AddPost,AllPost,EditPost,Home,Login,Signup,Post} from './pages/index.js'

const router = createBrowserRouter([
  {
    path : '/',
    element:<App/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },

      {
        path:"/login",
        element :(
          <AuthLayout authenticated={false}>
            <Login/>
          </AuthLayout>
        )
      },

      {
        path:"/signup",
        element :(
          <AuthLayout authenticated={false}>
            <Signup/>
          </AuthLayout>
        )
      },

      {
        path:"/all-post",
        element:(
          <AuthLayout authenticated>
            <AllPost/>
          </AuthLayout>
        )
      },

      {
        path:"/add-post",
        element:(
          <AuthLayout authenticated>
            <AddPost/>
          </AuthLayout>
        )
      },

      {
        path:"edit-post/:slug",
        element:(
          <AuthLayout authenticated>
            <EditPost/>
          </AuthLayout>
        )
      },

      {
        path:"/post/:slug",
        element:<Post/>
      }


    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)

import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom' 
import {Container,Logo,LogoutBtn} from '../index'

function Header() {
  const dispatch = useDispatch()
  const authStatus = useSelector((state)=>state.auth.status)

  const navigate = useNavigate()

  const navItems = [

    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus
    },
    {
      name: 'signup',
      slug: '/signup',
      active: !authStatus
    },
    {
      name: 'All posts',
      slug: '/all-post',
      active: authStatus
    },
    {
      name: 'Add post',
      slug: '/add-post',
      active: authStatus
    }
    

  ]



  return (
    <header className="w-full bg-white border-b">
  <Container>
    <nav className="flex items-center justify-between h-20">

      {/* Logo */}
      <Link to="/">
        <Logo/>
      </Link>

      {/* Navigation */}
      <ul className="flex items-center gap-8">
        <li>
          <Link
            to="/"
            className="text-lg font-medium hover:text-blue-600 transition"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/all-post"
            className="text-lg font-medium hover:text-blue-600 transition"
          >
            All posts
          </Link>
        </li>

        <li>
          <Link
            to="/add-post"
            className="text-lg font-medium hover:text-blue-600 transition"
          >
            Add post
          </Link>
        </li>

        <li>
          <LogoutBtn/>
        </li>
      </ul>

    </nav>
  </Container>
</header>
  )
}

export default Header

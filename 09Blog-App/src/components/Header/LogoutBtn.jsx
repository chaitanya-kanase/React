import React from 'react'
import {useDispatch} from 'react-redux'
import auth from '../../appWrite/auth'
import {logout} from '../../store/authSlice'
function LogoutBtn() {
  const dispatch = useDispatch()

  const handleLogout = () => {
    auth.logout().then(()=>{
      dispatch(logout())
    })
  }
  return (
    <button className='`px-4 py-2 rounded-lg bg-red-300 p-2' onClick={handleLogout} >Logout</button>
  )
}

export default LogoutBtn

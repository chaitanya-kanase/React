import React,{useContext} from 'react'
import userContext from '../context/UserContext';

function Profile() {
  const {user} = useContext(userContext);
  return (
    <div>
        <h2>Profile</h2>
        <h3>Username: {user?.username}</h3>
        <h3>Password: {user?.password}</h3>
    </div>
  )
}

export default Profile

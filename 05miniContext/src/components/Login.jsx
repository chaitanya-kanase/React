import React ,{useContext} from 'react'
import userContext from '../context/UserContext';

function Login() {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const {setUser} = useContext(userContext);
    const handelSubmit = (e)=>{
        e.preventDefault();
        setUser({username,password})
    }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
      <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

      <button onClick={handelSubmit}>Submit</button>
    </div>
  )
}

export default Login

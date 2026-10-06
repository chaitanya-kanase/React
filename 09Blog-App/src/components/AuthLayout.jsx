import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

const AuthLayout = ({children,authenticated = true}) => {
    const navigate = useNavigate();
    const authStatus = useSelector((state) => state.auth.status);
    const [loader,setLoader] = useState(true);

    useEffect(()=>{
        if(authenticated && authStatus !== authenticated){
            navigate('/login');
        }else if(!authenticated && authStatus !== authenticated){
            navigate('/');
        }
        setLoader(false);      
    },[authStatus,authenticated,navigate])

    return loader ? <h2>Loading...</h2> : <>{children}</>;
}

export default AuthLayout
import React  ,{useState} from "react";
import { replace, useNavigate } from "react-router-dom";
function Login() {
    let [username,setUsername]=useState('');
    const navigate=useNavigate();
    const handleLogin=(e)=>{
        e.preventDefault();
        localStorage.setItem("isLoggedIn","true");
        navigate('/dashboard',{replace:true});
    };
    return(
        <div className="max-w-md p-6 mx-auto bg-white rounded shadow-md">
        <h2 className="mb-4 text-xl font-bold">Login</h2>
        <form onSubmit={handleLogin}>    
            <input type="text" placeholder="Username" value={username}  onChange={(e)=> setUsername(e.target.value)} className="w-full p-2 mb-4 border" required />
            <button type="submit" className="p-2 text-white bg-blue-600 rounded">Login</button>
        </form> 
        </div>
    )
}
export default Login;
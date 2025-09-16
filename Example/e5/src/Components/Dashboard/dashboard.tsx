import React, { useEffect } from "react";
import { replace, useNavigate } from "react-router-dom";
function Dashboard() {
    const navigate = useNavigate();
    const isloggedIn:string|null =JSON.parse(localStorage.getItem("isLoggedIn"));
    useEffect(() => {
        if (!isloggedIn) {
            navigate('/login', { replace: true });
        }
    }, [isloggedIn, navigate])
    if (!isloggedIn) {
        return null;
    }
    return(
        <div className="max-w-md p-6 mx-auto bg-white rounded shadow-md">
            <h2 className="mb-4 text-xl font-bold">Welcome Back</h2>
            <p>This Is Your Dashboard</p>
            <button className="p-2 mt-4 text-white bg-red-600 rounded" onClick={()=>{localStorage.removeItem("isLoggedIn")
                navigate('/',{replace:true})
            }}>Logout</button>
        </div>
    )
}
export default Dashboard;
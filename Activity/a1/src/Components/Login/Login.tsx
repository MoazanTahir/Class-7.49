import React, { useEffect, useRef, useState } from "react";
import InputLogin from "../Common/inputlogin";
import profile from "../../assets/profile.svg";
import letter from "../../assets/letter.svg"
import lock1 from "../../assets/lock1.svg"
import lock from "../../assets/lock.svg"
import google from "../../assets/google.svg"
import apple from "../../assets/apple.svg"
import Icon from "../Common/icon";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Login() {
    const navigate = useNavigate();
    let passwordRef =useRef('')
    let EmailRef=useRef('')
    const handleLogin = (e:React.MouseEvent) => {
        e.preventDefault();
        if (localStorage.getItem("Email") && localStorage.getItem("Password") &&  EmailRef.current && passwordRef.current) {
            let email: string | null = localStorage.getItem("Email");
            let password: string | null = localStorage.getItem("Password");
            if (email==EmailRef.current.value && password==passwordRef.current.value) {
                localStorage.setItem("isLoggedIn", "true");
                navigate('/MainPage', { replace: true });
            }
        }
    };
    useEffect(() => {
        if (localStorage.getItem("isLoggedIn")) {
            navigate('/MainPage', { replace: true });
        }
    })
    function toSign() {
            navigate('/', { replace: true });
    }
    return (
    
        
            <div className="justify-items-center space-y-6">
            <div className="space-y-2 text-center">
                <div className="text-red-600 text-3xl font-bold">Login</div>
                <div className="font-semibold text-[20px]">Login To Continue</div>
            </div>
            <form className="space-y-8">
                <div className="space-y-4">
                    <InputLogin ref={EmailRef}  type="email" img={letter} label="Email" placeholder="Enter Your Email" />
                    <InputLogin ref={passwordRef} type="text" img1={lock1} img={lock} label="Password" placeholder="Enter Password" />
                </div>
                <button onClick={handleLogin} className="text-white hover:scale-110 transition ease-linear   cursor-pointer rounded-lg w-full pt-3 pb-3 text-[20px] bg-red-600 text-center content-center ">Login</button>
            </form>
            <div className="grid text-[#b8b8b8] w-[28rem] gap-2 items-center grid-cols-[30%_37%_33%] sm:grid-cols-[35%_26%_35%]">
                <hr className=" " />
                <p>or continue with</p>
                <hr />
            </div>
            <div className=" gap-2 w-[28rem] grid grid-cols-2">
                <Icon img={google} text="Google" />
                <Icon img={apple} text="Apple" />
            </div>
            <p className="font-semibold text-center">Create New Account <span onClick={toSign} className="text-[#5e51d9]">Sign Up</span></p>
        </div>
    

        
        
    )
}
export default Login;
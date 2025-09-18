import React, { useEffect, useState } from "react";
import Input from "../Common/input";
import profile from "../../assets/profile.svg";
import letter from "../../assets/letter.svg"
import lock1 from "../../assets/lock1.svg"
import lock from "../../assets/lock.svg"
import google from "../../assets/google.svg"
import apple from "../../assets/apple.svg"
import Icon from "../Common/icon";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function SignUp() {
    const navigate = useNavigate();
    const handleLogin = (e:React.MouseEvent) => {
        e.preventDefault();
        if (localStorage.getItem("Email") && localStorage.getItem("Password") ) {
            let email: string|null = localStorage.getItem("Email");
            let password: string | null = localStorage.getItem("Password");
            if (email.length >= 1 && password.length >= 8) {
                localStorage.setItem("isSignedUp", "true");
                navigate('/Login', { replace: true });
            }
        }
    };
    useEffect(() => {
        if (localStorage.getItem("isSignedUp")) {
            navigate('/Login', { replace: true });
        }
    })
    function toLogin() {
            navigate('/Login', { replace: true });
    }
    return (


        <div className="justify-items-center space-y-6">
            <div className="space-y-2 text-center">
                <div className="text-red-600 text-3xl font-bold">Sign Up</div>
                <div className="font-semibold text-[20px]">Sign Up To Continue</div>
            </div>
            <form className="space-y-8">
                <div className="space-y-4">
                    <Input type="email" img={letter} label="Email" img1={null} placeholder="Enter Your Email" />
                    <Input type="text" img1={lock1} img={lock} label="Password" placeholder="Make Password" />
                </div>
                <button onClick={handleLogin} className="text-white hover:scale-110 transition ease-linear   cursor-pointer rounded-lg w-full pt-3 pb-3 text-[20px] bg-red-600 text-center content-center ">Sign Up</button>
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
            <p className="font-semibold text-center">Already Have An Account ? <span onClick={toLogin} className="text-[#5e51d9]">Login</span></p>

        </div>




    )
}
export default SignUp;
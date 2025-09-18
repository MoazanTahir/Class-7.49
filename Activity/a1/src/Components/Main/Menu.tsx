import React, { useEffect, useReducer, useState } from "react";
import menu from "../../assets/menu.svg";
import apps from "../../assets/apps.svg";
import plus from "../../assets/plus.svg";
import calendar from "../../assets/calendar.svg";
import gallery from "../../assets/gallery.svg";
import follow from "../../assets/follow.svg";
import ring from "../../assets/ring.svg";
import video from "../../assets/video.svg";
import settings from "../../assets/settings.svg";
import image from "../../assets/image.jpg";
import exit from "../../assets/exit.svg";
import Blocks from "../../assets/blocks.png";
import { replace, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
function Menu() {
    const navigate = useNavigate();
    let style = `w-[1.5rem] duration-50  hover:scale-120 transition ease-linear`
    let imgObject = [
        { img: menu },
        { img: apps },
        { img: plus },
        { img: calendar },
        { img: gallery },
        { img: follow },
        { img: ring },
        { img: video },
        { img: settings },
        { img: image, check: true },
        { img: exit },
    ]
    useEffect(() => {
        if (!(localStorage.getItem("isSignedUp") && localStorage.getItem("isLoggedIn"))) {
            navigate('/', { replace: true });
        }
    }, [])
    function menuHandler() {
        navigate("/MainPage/Menu")
    }
    function exitHandler() {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("isSignedUp");
        navigate("/",{replace:true})
    }
    return (
        <div className=" grid grid-cols-[6.24%_94.76%] overflow-hidden h-screen w-screen ">
            <div className="space-x-10 flex p-4 bg-white">
                <div className="w-[3.9rem]">
                    <div className="bg-[#201f2e] rounded-full p-2 inline-block">
                        <img src={Blocks} width={45} alt="" />
                    </div>
                    <div className="bg-[#201f2e] justify-items-center  pb-3  p-1 pt-3 space-y-[2.36rem] rounded-full">
                        {
                            imgObject.map(im => (
                                im.check ? <img src={im.img} className="w-[2rem] hover:scale-120 transition ease-linear rounded-full object-cover aspect-square" alt="" /> : <img onClick={()=>{
                                    im.img==menu?menuHandler():
                                    im.img==exit?exitHandler():null
                                }} src={im.img} className={style} alt="" />
                            ))
                        }
                    </div>
                </div>
            </div>
                <Outlet/>
        </div>
    )
}
export default Menu;
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
import Notification from "../../assets/notification.svg"
import Food from "../../assets/food.svg"
import dumbel from "../../assets/dumbel.svg"
import Chemical from "../../assets/chemical.svg"
import Medicine from "../../assets/medicine.svg"
import bp from "../../assets/pb.svg"
import diobetic from "../../assets/diobetic.svg"
import Filter from "../../assets/filter.svg";
import Calendar from "../../assets/calendar1.svg"
import Reducer from "../Reducer/bgColor";
import { useNavigate } from "react-router-dom";
import Products from "../Buttons/Product.json"
import type { bgColorType } from "../Common/bgColortype";
function Main1() {
    const navigate = useNavigate();
    type ProductType = {
        img: string;
        head: string;
        main: string;
        work: string;
    }
    let [gettingValue, setGettingValue] = useState<ProductType[]>(Products)
    let bgColor: bgColorType = {
        all: "bg-[#fdbac5] scale-120 transition ease-linear border-[#fdbac5]",
        unread: "",
        read: "",
        threads: ""
    }
    let [bg, useBg] = useReducer(Reducer, bgColor);
    let object = [
        [{ w: 75, img: Notification, text: "Water Intake" }, { w: 60, img: Food, text: "Food Intake" }],
        [{ w: 80, img: dumbel, text: "Exercise" }, { w: 50, img: Chemical, text: "Reports" }],
        [{ w: 50, img: Medicine, text: "Medicine" }, { w: 50, img: Calendar, text: "Appointments" }],
        [{ w: 50, img: bp, text: "Blood Pressure" }, { w: 45, img: diobetic, text: "Diabetic" }],
    ]
    let button = [
        { value: "All", b: bg.all },
        { value: "Read", b: bg.read },
        { value: "Unread", b: bg.unread },
        { value: "Threads", b: bg.threads },
    ]
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
    function AllHandler() {
        setGettingValue(Products)
    }
    function ReadHandler() {
        let get;
        const filteredData = Products.filter(use => {
            get = use.work == "Read";
            console.log(get);

            return get;
        })
        setGettingValue(filteredData)
    }
    function UnreadHandler() {
        let get;
        const filteredData = Products.filter(use => {
            get = use.work == "Unread";
            console.log(get);

            return get;
        })
        setGettingValue(filteredData)
    }
    function ThreadHandler() {
        let get;
        const filteredData = Products.filter(use => {
            get = use.work == "Threads";
            console.log(get);

            return get;
        })
        setGettingValue(filteredData)
    }
    return (
        <div className="bg-red-600 grid grid-cols-[31.24%_68.75%]  h-screen w-screen ">
            <div className="space-x-10 flex p-4 bg-white">
                <div className="w-[3.9rem]">
                    <div className="bg-[#201f2e] rounded-full p-2 inline-block">
                        <img src={Blocks} width={45} alt="" />
                    </div>
                    <div className="bg-[#201f2e] pl-3 pb-3  p-1 pt-3 space-y-[2.46rem] rounded-full">
                        {
                            imgObject.map(im => (
                                im.check ? <img src={im.img} className="w-[2rem] hover:scale-120 transition ease-linear rounded-full object-cover aspect-square" alt="" /> : <img src={im.img} className={style} alt="" />
                            ))
                        }
                    </div>
                </div>
                <div className="pt-7 p-6 space-y-2">
                    <div className="font-bold text-[23px]">
                        <p>Notifications</p>
                        <p className="  text-[#d2d2d2] text-[15.8px] font-semibold">Select The Activities You Want To Get The Notfication For.</p>
                    </div>
                    <div className="flex flex-row-reverse">
                        <img src={Filter} width={30} alt="" />
                    </div>
                    <div className="bg-[#f6f6f4] p-5 grid grid-rows-4 gap-4 grid-cols-1 h-[35rem] rounded-2xl">
                        {
                            object.map(list => (
                                <div className="grid gap-4 grid-cols-2">
                                    {
                                        list.map(listChild => (
                                            <div className="bg-white hover:border-black border-2 border-transparent items-center grid grid-rows-[75%_25%] justify-items-center rounded-2xl">
                                                <img src={listChild.img} width={listChild.w} alt="" />
                                                <div className="text-[13px] font-semibold">{listChild.text}</div>
                                            </div>
                                        ))
                                    }
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="bg-[#f6f6f4]     ">
                <div className="pt-13 space-x-6  font-semibold pl-10 pb-8 border-b-2 border-[#dbdbdb]">
                    {

                        button.map(bu => (
                            <div onClick={() => {
                                useBg({
                                    type: bu.value == "All" ? "All" :
                                        bu.value == "Read" ? "Read" :
                                            bu.value == "Unread" ? "Unread" :
                                                bu.value == "Threads" ? "Threads" : "Read"
                                })
                                console.log(bu.value);

                                bu.value == "All" ? AllHandler() : bu.value == "Read" ? ReadHandler() : bu.value == "Unread" ? UnreadHandler(): bu.value == "Threads" ?ThreadHandler(): null

                            }} className={`p-2 pl-9 pr-9  rounded-xl border-2 transition ease-linear border-[#f5f5f3] shadow-md inline-block ${bu.b}`}>{bu.value}</div>
                        ))
                    }
                </div>
                <div>
                    {
                        gettingValue.map(product => (
                            <div className="group p-2 pl-20 border-b-2 flex gap-7 border-[#dbdbdb]">
                                <img src={product.img} className="w-[3.2rem] group-hover:scale-120 transition ease-linear rounded-full object-cover aspect-square" alt="" />
                                <div className="flex flex-col font-bold">
                                    <p className=" group-hover:scale-104 transition ease-linear">{product.head}</p>
                                    <p className="text-[#979795] font-semibold  group-hover:scale-104 transition ease-linear">{product.main}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Main1;
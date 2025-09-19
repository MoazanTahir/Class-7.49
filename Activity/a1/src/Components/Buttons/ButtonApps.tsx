import React, { useReducer } from "react";
import Notification from "../../assets/notification.svg"
import Food from "../../assets/food.svg"
import dumbel from "../../assets/dumbel.svg"
import Chemical from "../../assets/chemical.svg"
import Medicine from "../../assets/medicine.svg"
import bp from "../../assets/pb.svg"
import diobetic from "../../assets/diobetic.svg"
import Calendar from "../../assets/calendar1.svg"
import Filter from "../../assets/filter.svg";
import Reducer from "../Reducer/click";
import { Outlet, useNavigate } from "react-router-dom";

function ButtonApps() {
    let navigate=useNavigate();
    let color="border-transparent";
    let click={
        a:color,
        b:color,
        c:color,
        d:color,
        e:color,
        f:color,
        g:color,
        h:color,
    }
    let [cl,setCl]=useReducer(Reducer,click);
    let object = [
        [{ w: 80, img: dumbel, text: "Exercise",work:cl.c }, { w: 50, img: Chemical, text: "Reports",work:cl.d }],
        [{ w: 75, img: Notification, text: "Water Intake",work:cl.a }, { w: 60, img: Food, text: "Food Intake",work:cl.b }],
        [{ w: 50, img: bp, text: "Blood Pressure" ,work:cl.g}, { w: 45, img: diobetic, text: "Diabetic",work:cl.h }],
        [{ w: 50, img: Medicine, text: "Medicine" ,work:cl.e}, { w: 50, img: Calendar, text: "Appointments",work:cl.f }],
    ]
    function waterIntake() {
        navigate("Water")
    }
    function FoodIntake() {
        navigate("Food")
    }
    function Dumbel() {
        navigate("Dumbel")
    }
    function chemical() {
        navigate("Chemical")
    }
    function medicine() {
        navigate("Medicine")
    }
    function calendar() {
        navigate("Calendar")
    }
    function bp1() {
        navigate("BP")
    }
    function diobetic1() {
        navigate("Diobetic")
    }
    return (
        <div className="flex">
            <div className="p-5">
                <div className="pt-7 p-6 space-y-2">
                    <div className="font-bold text-[23px]">
                        <p>Notifications</p>
                        <p className="  text-[#d2d2d2] text-[15.8px] font-semibold">Select The Activities You Want To Get The Notfication For.</p>
                    </div>
                    <div className="flex flex-row-reverse">
                        <img src={Filter} width={30} alt="" />
                    </div>

                </div>
                <div className="bg-[#f6f6f4] p-5 grid grid-rows-4 gap-4 grid-cols-1 h-[35rem] rounded-2xl">
                    {
                        object.map(list => (
                            <div className="grid gap-4 grid-cols-2">
                                {
                                    list.map(listChild => (
                                        <div onClick={()=>{
                                               setCl({type:listChild.img==Notification?"a":
                                                listChild.img==Food?"b":
                                                listChild.img==dumbel?"c":
                                                listChild.img==Chemical?"d":
                                                listChild.img==Medicine?"e":
                                                listChild.img==Calendar?"f":
                                                listChild.img==bp?"g":
                                                listChild.img==diobetic?"h":"a"
                                               })
                                               listChild.img==Notification?waterIntake():
                                               listChild.img==Food?FoodIntake():
                                               listChild.img==dumbel?Dumbel():
                                                listChild.img==Chemical?chemical():
                                                listChild.img==Medicine?medicine():
                                                listChild.img==Calendar?calendar():
                                                listChild.img==bp?bp1():
                                                listChild.img==diobetic?diobetic1():null
                                        }} className={`bg-white  border-2  items-center grid grid-rows-[75%_25%] justify-items-center rounded-2xl ${listChild.work}`}>
                                            <img src={listChild.img}  width={listChild.w} alt="" />
                                            <div className="text-[13px] font-semibold">{listChild.text}</div>
                                        </div>
                                    ))
                                }
                            </div>

                        ))
                    }
                </div>
            </div>
            <Outlet/>
        </div>

    )
}
export default ButtonApps;
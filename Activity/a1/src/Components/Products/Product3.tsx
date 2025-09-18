import React,{useReducer,useState} from "react";
import type { bgColorType } from "../Common/bgColortype";
import Reducer from "../Reducer/bgColor";
import Products from "../Buttons/Product.json"
import image3 from "../../assets/image3.jpg"
function Product3() {
     function AllHandler() {
        setGettingValue(Products)
    }
    let bgColor: bgColorType = {
        all: "bg-[#fdbac5] scale-120 transition ease-linear border-[#fdbac5]",
        unread: "",
        read: "",
        threads: ""
    }
    let [bg, useBg] = useReducer(Reducer, bgColor);
    let button = [
        { value: "All", b: bg.all },
        { value: "Read", b: bg.read },
        { value: "Unread", b: bg.unread },
        { value: "Threads", b: bg.threads },
    ]
    type ProductType = {
        img: string;
        head: string;
        main: string;
        work: string;
    }
    let [gettingValue, setGettingValue] = useState<ProductType[]>(Products)
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
    return(
         <div className="bg-[#f6f6f4]  w-[61rem] h-[47.3rem]  ">
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

                                bu.value == "All" ? AllHandler() : bu.value == "Read" ? ReadHandler() : bu.value == "Unread" ? UnreadHandler() : bu.value == "Threads" ? ThreadHandler() : null

                            }} className={`p-2 pl-9 pr-9  rounded-xl border-2 transition ease-linear border-[#f5f5f3] shadow-md inline-block ${bu.b}`}>{bu.value}</div>
                        ))
                    }
                </div>
                <div>
                    {
                        gettingValue.map(product => (
                            <div className="group p-2 pl-20 border-b-2 flex gap-7 border-[#dbdbdb]">
                                <img src={image3} className="w-[3.2rem] group-hover:scale-120 transition ease-linear rounded-full object-cover aspect-square" alt="" />
                                <div className="flex flex-col font-bold">
                                    <p className=" group-hover:scale-104 transition ease-linear">{product.head}</p>
                                    <p className="text-[#979795] font-semibold  group-hover:scale-104 transition ease-linear">{product.main}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
    )
}
export default Product3;
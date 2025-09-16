import React, { useState, type JSX } from "react";
interface types {
    img: string;
    placeholder: string;
    label: string;
    star: string;
    type: string;
    img1:string;
}

const Input: React.FC<types> = ({  img, placeholder, label,img1, type}) => {
    let [border,setBorder]=useState<string>("");
    let style: string = ` text-[#b8b8b8]  placeholder:text-[#b8b8b8]   h-[3rem] outline-none p-3`;
    let style1: string = `grid  bg-[#f9f9f9] hover:scale-110 ease-linear transition duration-200 w-[27rem] border-white shadow-md items-center pl-3 grid-cols-[6%_94%] border-2 ${border}  rounded-lg`;
    let [value,setValue]=useState("");
    let [image,setImage]=useState(`${img}`);
    return (
        <div className="flex space-y-2 flex-col">
            <label htmlFor={label} className="text-[#1f1e47] inline w-[0rem] font-bold">{label} </label>
            <div className={style1}>
                <label htmlFor={label}>
                    <img width={30} src={image} alt="" />
                </label>
                {
                    label=="Password"?<input type={type} onChange={(e)=>{
                        if (e.target.value.length>=8) {
                          localStorage.setItem(`${label}`,e.target.value)
                        }
                        else{
                          if (localStorage.getItem(`${label}`)) {
                            localStorage.removeItem(`${label}`)
                          }
                        }
                        if (e.target.value.length>=8) {
                            setValue("");
                            setBorder("")
                            setImage(`${img}`)
                        }
                        else if (e.target.value.length==0) {
                           setValue("") 
                           setBorder("")
                            setImage(`${img}`)
                        }
                        else{
                            setValue("Must Be At Least 8 Characters")
                            setBorder("border-red-600")
                            setImage(`${img1}`)
                        }
                    }} id={label} pattern=".{8,}" className={style} required  placeholder={placeholder} />:<input onChange={(e)=>{
                         if (e.target.value.length>=8) {
                          localStorage.setItem(`${label}`,e.target.value)
                        }
                        else{
                          if (localStorage.getItem(`${label}`)) {
                            localStorage.removeItem(`${label}`)
                          }
                        }
                        
                    }} type={type} id={label} className={style} required  placeholder={placeholder} />
                }
            </div>
            {label=="Password"&&(
                <div className="h-10 text-red-600 font-semibold">{value}</div>
            )
            }
        </div>
    )
}
export default Input;   
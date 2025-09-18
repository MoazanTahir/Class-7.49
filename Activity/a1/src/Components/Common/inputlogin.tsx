import React from "react";
interface types {
    placeholder: string;
    label: string;
    type: string;
    ref:HTMLInputElement;
}

const InputLogin: React.FC<types> = ({placeholder, label, type,ref}) => {
    let style: string = ` text-[#b8b8b8]  placeholder:text-[#b8b8b8] w-[25rem]  h-[3rem] outline-none p-3`;
    let style1: string = `grid  bg-[#f9f9f9] hover:scale-110 ease-linear transition duration-200 w-[27rem] border-white shadow-md items-center pl-3 grid-cols-[6%_94%] border-2  rounded-lg`;
    return (
        <div className="flex space-y-2 flex-col">
            <label htmlFor={label} className="text-[#1f1e47] inline w-[0rem] font-bold">{label} </label>
            <div className={style1}>
                {
                <input ref={ref} type={type} id={label}  className={style} required  placeholder={placeholder} />
                }
            </div>
        </div>
    )
}
export default InputLogin;   
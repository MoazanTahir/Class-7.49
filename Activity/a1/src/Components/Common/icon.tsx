import React from "react";
interface types {
  img: string;
  text: string;
}
const Icon: React.FC<types> = ({ img, text }) => {
  let style: string = ` border-2 transition ease-linear  shadow-md border-white hover:scale-105  font-semibold text-[20px] gap-2 flex rounded-lg p-2 justify-center`;
  return (
    <div className={style}>
      <img src={img} width={30} alt="" />
      <p>{text}</p>
    </div>
  )
}
export default Icon;   
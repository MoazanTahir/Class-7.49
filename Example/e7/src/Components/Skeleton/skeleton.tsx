import React from "react";
type Types={
    dataCount:number
}
function Skeleton({dataCount}:Types) {
    const SkeletonArray=Array(dataCount).fill(0);
    return(
        <>
        {
            SkeletonArray.map((_,index)=>{
                <div key={index} className="overflow-hidden bg-gray-300 rounded-lg shadow-md animate-pulse">
                    <div className="w-full h-48 bg-gray-400"></div>
                    <div className="p-4">
                        <div className="w-3/4 h-4  bg-gray-400 rounded">

                        </div>
                    </div>
                </div>
            })
        }
        </>
    )
}
export default Skeleton;
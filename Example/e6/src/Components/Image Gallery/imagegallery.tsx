import React, { useEffect, useState, type JSX } from "react";
import { useLoaderData } from "react-router-dom";
import Skeleton from "../Skeleton/skeleton";
function Imagegallery() {
    type types={
        id:string,
        download_url:string,
        author:string,
    }
    const data = useLoaderData();
    const [isLoading, setisLoading] = useState(true);
    useEffect(() => {
        if (data) {
            const loadingTimeout = setTimeout(() => {
                setisLoading(false)
            }, 1000)
            return () => clearTimeout(loadingTimeout)
        }
    }, [data])
    return (
        <div className="container px-4 py-8 mx-auto">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    isLoading?<Skeleton dataCount={20}/>:data.map((image:types)=>(
                        <div key={image.id} className="bg-white rounded0-lg shadow-md">
                            <img src={image.download_url} alt={image.author} className="object-cover w-full h-48" />
                            <div className="p-4">
                                <p className="text-sm text-gray-700">Photo By : {image.author}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}
export default Imagegallery;
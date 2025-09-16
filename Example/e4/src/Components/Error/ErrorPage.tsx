import React from "react";
import { Link } from "react-router-dom";
function ErrorPage() {
    return(
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
            <div className="max-w-md  p-8 text-center  bg-white  rounded-lg shadow-lg">
                <h2 className="mb-4 text-2xl  font-bold  text-red-600 ">SomeThing Went Wrong!</h2>
                <p className="mb-6 text-lg  text-gray-700">Please Try Again Later Or Contact Support If the Issue Presists .</p>
             <Link to="/" className="px-4 py-2 text-white  bg-red-500 rounded hover-bg-red-600">Go Back</Link>   
            </div>
        </div>
    )
}
export default ErrorPage;
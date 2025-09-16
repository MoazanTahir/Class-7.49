import React from "react";
import { Form, useActionData } from "react-router-dom";
function Register() {
    const actionData = useActionData();
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800">Create An Account</h2>
                {actionData?.message && (
                    <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg" role="alert">
                        {actionData.message}
                    </div>
                )}
                <Form className="space-y-4" method='POST' action=''>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" name="name" required className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="Email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="text" id="Email" name="Email" required className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="text" id="password" name="Password" required className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500" />
                    </div>
                    <button className="rounded bg-[#2563eb] w-full h-[3rem] p-2 text-center content-center text-white">
                        Register
                    </button>
                </Form>
            </div>
        </div>
    )
}
export default Register;
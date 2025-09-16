import React from "react";
function About() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-50">
            <div className="max-w-md p-8  text-center bg-white rounded-lg shadow-lg">
                <h1 className="mb-4 text-2xl font-bold text-red-700">
                    About
                </h1>
                <p className="mb-6 text-lg text-gray-700">
                  I AM A Passionate Developer With Experience In Building Modern Web Applications .
                  I Enjoy Learning New Techniques And Improving My Skills . In My Free Time ,
                  I Love to Explore New Ideas And Work On Personal Projects.
                </p>

            </div>
        </div>
    )
}
export default About;
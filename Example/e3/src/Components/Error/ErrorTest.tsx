import React from "react";
function ErrorTest() {
    throw new Error("Simulated Error In Home Component!");
    return(
        <div>
            Testing
        </div>
    )
}
export default ErrorTest;
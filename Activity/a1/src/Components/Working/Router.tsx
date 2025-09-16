import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Main1 from "../Main/Main1";
const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
    },
    {
        path:"/MainPage",element:<Main1/>
    }
])
export default router;
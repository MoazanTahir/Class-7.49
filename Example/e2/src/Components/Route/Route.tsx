import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {path:"/",index:true,element:<Home/>},
            {path:"about",element:<About/>},
            {path:"contact",element:<Contact/>}
        ]
    }
])
export default router;
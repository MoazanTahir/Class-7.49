import { createBrowserRouter ,Navigate} from "react-router-dom";
import App from "../../App";
import Home from "../Home/Home";
import About from "../About/About"; 
import Dashboard from "../Dashboard/dashboard";
import Login from "../Auth/login";
// import ErrorTest from "../Error/ErrorTest";
const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {path:"/",element:<Home/>},
            {path:"about",element:<About/>},
            {path:"/login", element:<Login/> },
            {path:"/dashboard",element:<Dashboard/>},
        ]
    }
])
export default router;
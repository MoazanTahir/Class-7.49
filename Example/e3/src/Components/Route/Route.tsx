import { createBrowserRouter ,Navigate} from "react-router-dom";
import App from "../../App";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Dashboard from "../Dashboard/dashboard";
import ErrorPage from "../Error/ErrorPage";
import ErrorTest from "../Error/ErrorTest";
import Profile from "../Dashboard/Profile";
import Settings from "../Dashboard/Settings";

const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<ErrorPage/>,
        children:[
            {path:"/",element:<Home/>},
            {path:"about",element:<About/>},
            {
                path:"/dashboard",
                element:<Dashboard/>,
                children:[
                    {path:'',element:<Navigate to="profile"/> },
                    {path:"profile",element:<Profile/>},
                    {path:"settings",element:<Settings/>},
                ],
            },
            {path:'etest',element:<ErrorTest/>}
        ]
    }
])
export default router;
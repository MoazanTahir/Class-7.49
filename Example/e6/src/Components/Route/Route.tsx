import { createBrowserRouter ,Navigate} from "react-router-dom";
import App from "../../App";
import Home from "../Home/Home";
import Imagegallery from "../Image Gallery/imagegallery";
import loadImages from "../Image Gallery/ImagesLoader";
import Error from "../Error/Error";
const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {path:"/",element:<Home/>},
            {
                path:'/gallery',
                element:<Imagegallery/>,
                loader:loadImages,
                errorElement:<Error/>,
            }
        ]
    }
])
export default router;
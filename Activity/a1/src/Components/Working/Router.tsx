import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Main1 from "../Main/Main1";
import Login from "../Login/Login";
import Menu from "../Main/Menu";
import ButtonMenu from "../Buttons/ButtonMenu";
import { Children } from "react";
import ProductTake from "../Products/ProductTake";
import Product2 from "../Products/Product2";
import Product3 from "../Products/Product3";
import Product4 from "../Products/Product4";
import Product5 from "../Products/Product5";
import Product6 from "../Products/Product6";
import Product7 from "../Products/Product7";
import Product8 from "../Products/Product8";
const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
    },
    {
        path:"/Login",element:<Login/>
    },
    {
        path:"/MainPage",element:<Menu/>,
        children:[
            {path:"/MainPage/Menu",element:<ButtonMenu/>,
                children:[
               { path:"/MainPage/Menu/Water",element:<ProductTake/>},
               { path:"/MainPage/Menu/Food",element:<Product2/>},
               { path:"/MainPage/Menu/Dumbel",element:<Product3/>},
               { path:"/MainPage/Menu/Chemical",element:<Product4/>},
               { path:"/MainPage/Menu/Medicine",element:<Product5/>},
               { path:"/MainPage/Menu/Calendar",element:<Product6/>},
               { path:"/MainPage/Menu/BP",element:<Product7/>},
               { path:"/MainPage/Menu/Diobetic",element:<Product8/>}

            ]
            },
            
        ]
    }
])
export default router;
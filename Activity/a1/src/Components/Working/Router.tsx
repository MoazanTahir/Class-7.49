import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Main1 from "../Main/Main1";
import Login from "../Login/Login";
import Menu from "../Main/Menu";
import ButtonMenu from "../Buttons/ButtonMenu";
import ButtonApps from "../Buttons/ButtonApps";
import ButtonPlus from "../Buttons/ButtonPlus";
import ButtonCalendar from "../Buttons/ButtonCalendar";
import ButtonFollow from "../Buttons/ButtonFollow";
import ButtonGallery from "../Buttons/ButtonGallery";
import ButtonRing from "../Buttons/ButtonRing";
import ButtonSettings from "../Buttons/ButtonSettings";
import ButtonVideo from "../Buttons/ButtonVideo";
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
        path:"MainPage",element:<Menu/>,
        children:[
            {path:"Menu",element:<ButtonMenu/>,
                children:[
               { path:"Water",element:<ProductTake/>},
               { path:"Food",element:<Product2/>},
               { path:"Dumbel",element:<Product3/>},
               { path:"Chemical",element:<Product4/>},
               { path:"Medicine",element:<Product5/>},
               { path:"Calendar",element:<Product6/>},
               { path:"BP",element:<Product7/>},
               { path:"Diobetic",element:<Product8/>}
            ]
            },
              {path:"Apps",element:<ButtonApps/>,
                children:[
               { path:"Water",element:<ProductTake/>},
               { path:"Food",element:<Product2/>},
               { path:"Dumbel",element:<Product3/>},
               { path:"Chemical",element:<Product4/>},
               { path:"Medicine",element:<Product5/>},
               { path:"Calendar",element:<Product6/>},
               { path:"BP",element:<Product7/>},
               { path:"Diobetic",element:<Product8/>}
            ]
            },
             {path:"Plus",element:<ButtonPlus/>,
                children:[
               { path:"Water",element:<ProductTake/>},
               { path:"Food",element:<Product2/>},
               { path:"Dumbel",element:<Product3/>},
               { path:"Chemical",element:<Product4/>},
               { path:"Medicine",element:<Product5/>},
               { path:"Calendar",element:<Product6/>},
               { path:"BP",element:<Product7/>},
               { path:"Diobetic",element:<Product8/>}
            ]
            },
             {path:"Calendar",element:<ButtonCalendar/>,
                children:[
               { path:"Water",element:<ProductTake/>},
               { path:"Food",element:<Product2/>},
               { path:"Dumbel",element:<Product3/>},
               { path:"Chemical",element:<Product4/>},
               { path:"Medicine",element:<Product5/>},
               { path:"Calendar",element:<Product6/>},
               { path:"BP",element:<Product7/>},
               { path:"Diobetic",element:<Product8/>}
            ]
            },
             {path:"Gallery",element:<ButtonGallery/>,
                children:[
               { path:"Water",element:<ProductTake/>},
               { path:"Food",element:<Product2/>},
               { path:"Dumbel",element:<Product3/>},
               { path:"Chemical",element:<Product4/>},
               { path:"Medicine",element:<Product5/>},
               { path:"Calendar",element:<Product6/>},
               { path:"BP",element:<Product7/>},
               { path:"Diobetic",element:<Product8/>}
            ]
            },
             {path:"Follow",element:<ButtonFollow/>,
                children:[
               { path:"Water",element:<ProductTake/>},
               { path:"Food",element:<Product2/>},
               { path:"Dumbel",element:<Product3/>},
               { path:"Chemical",element:<Product4/>},
               { path:"Medicine",element:<Product5/>},
               { path:"Calendar",element:<Product6/>},
               { path:"BP",element:<Product7/>},
               { path:"Diobetic",element:<Product8/>}
            ]
            },
             {path:"Ring",element:<ButtonRing/>,
                children:[
               { path:"Water",element:<ProductTake/>},
               { path:"Food",element:<Product2/>},
               { path:"Dumbel",element:<Product3/>},
               { path:"Chemical",element:<Product4/>},
               { path:"Medicine",element:<Product5/>},
               { path:"Calendar",element:<Product6/>},
               { path:"BP",element:<Product7/>},
               { path:"Diobetic",element:<Product8/>}
            ]
            },
             {path:"Video",element:<ButtonVideo/>,
                children:[
               { path:"Water",element:<ProductTake/>},
               { path:"Food",element:<Product2/>},
               { path:"Dumbel",element:<Product3/>},
               { path:"Chemical",element:<Product4/>},
               { path:"Medicine",element:<Product5/>},
               { path:"Calendar",element:<Product6/>},
               { path:"BP",element:<Product7/>},
               { path:"Diobetic",element:<Product8/>}
            ]
            },
             {path:"Settings",element:<ButtonSettings/>,
                children:[
               { path:"Water",element:<ProductTake/>},
               { path:"Food",element:<Product2/>},
               { path:"Dumbel",element:<Product3/>},
               { path:"Chemical",element:<Product4/>},
               { path:"Medicine",element:<Product5/>},
               { path:"Calendar",element:<Product6/>},
               { path:"BP",element:<Product7/>},
               { path:"Diobetic",element:<Product8/>}
            ]
            },
            
        ]
    }
])
export default router;
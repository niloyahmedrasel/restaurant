import FoodItems from "../FoodItems/FoodItems";
import Login from "../Login/Login";
import Signup from "../Login/Signup";


const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home");


export const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/fooditems',
                element:<FoodItems></FoodItems>,
                
            }
           
        ]
    }
])
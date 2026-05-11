import { createBrowserRouter } from "react-router";
import Root from "../RootLayout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllMovie from "../Pages/AllMovie";

const router = createBrowserRouter([
    {
    path: "/",
    Component:Root,
    children:[
        {
            index:true,
            Component: Home
        },
        {
            path:'/login',
            Component:Login
        },
        {
            path:'/register',
            Component:Register
        },
        {
            path:'/all-movie',
            Component:AllMovie,
            loader:()=>fetch('http://localhost:3000/movie')
        }
    ]
    }
])

export default router
import { use } from "react";
import { Navigate, useLocation } from "react-router";
import Loading from "../Component/Loading";
import { AuthContest } from "./AuthContext";

const PrivateRouter = ({children}) => {

    const {user,loading}=use(AuthContest)

    const location= useLocation();
    // console.log(location)

    if(loading){
        return <Loading></Loading>
    }
    if(user && user?.email)
    {
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRouter;
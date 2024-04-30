import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(AuthContext)

    if(loading){
        return <div className="h-screen w-full flex items-center justify-center bg-[#F4EDE8]">
        <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if(user){
        return children
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <p className="text-2xl text-red-500">This is root</p> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
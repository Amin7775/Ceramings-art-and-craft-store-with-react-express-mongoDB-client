import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";


const Root = () => {
    return (
        <div>
            <div className="relative">
            <div className=" z-10 sticky">

            <Navbar></Navbar>
            </div>
            {/* <p className="text-2xl text-red-500">This is root</p> */}
            <Outlet></Outlet>
            </div>
            <ScrollRestoration></ScrollRestoration>
            <Footer></Footer>
        </div>
    );
};

export default Root;
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <p className="text-2xl text-red-500">This is root</p> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
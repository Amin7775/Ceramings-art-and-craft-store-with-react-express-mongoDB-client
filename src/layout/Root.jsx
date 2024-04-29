import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div>
            <p className="text-2xl text-red-500">This is root</p>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
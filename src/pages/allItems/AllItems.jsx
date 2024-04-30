import { useLoaderData } from "react-router-dom";


const AllItems = () => {
    const loadedData = useLoaderData()

    
    return (
        <div className="min-h-screen py-14">
            <div className="container mx-auto px-5">

            </div>
            this is all item {loadedData.length}
        </div>
    );
};

export default AllItems;
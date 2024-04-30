import { useEffect, useState } from "react";
import CommonTitle from "../../../../components/commonTitle/CommonTitle";
import CraftCard from "../../../../components/craftCard/CraftCard";

const CraftedItems = () => {

    const [crafts,setCrafts] = useState([])

    useEffect(()=>{
        fetch(' https://ceramings-server.vercel.app/allitems')
        .then(res => res.json())
        .then(data => setCrafts(data))
    },[])

    return (
        <div className="container mx-auto px-5 lg:px-0">
            <CommonTitle text={"Crafted Items"} descirption={"Exquisite handcrafted items for your home and lifestyle"}></CommonTitle>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-5 mb-16">
                {
                    crafts?.slice(0,8).map(item => <CraftCard key={item._id} item={item}></CraftCard>)
                }
            </div>
        </div>
    );
};

export default CraftedItems;
import { useEffect, useState } from "react";
import CommonTitle from "../../../../components/commonTitle/CommonTitle";
import FeaturedSlider from "./FeaturedSlider";

const FeaturedCategories = () => {
    const [subCategories,setSubCategories] = useState([])

    useEffect(()=>{
        fetch(' https://ceramings-server.vercel.app/subCategories')
        .then(res => res.json())
        .then(data => setSubCategories(data))
    },[])
    
    console.log(subCategories)
    return (
        <div className="pb-16">
            <div>
            <CommonTitle text={"Featured Categories"} descirption={"Check out our featured categories"}></CommonTitle>
            </div>
            {/* featurd slider */}
            <div className="mt-10">
                
                <FeaturedSlider subCategories={subCategories}></FeaturedSlider>
            </div>
        </div>
    );
};

export default FeaturedCategories;
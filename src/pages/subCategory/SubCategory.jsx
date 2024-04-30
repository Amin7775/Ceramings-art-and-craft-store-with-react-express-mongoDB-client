import { useLoaderData, useParams } from "react-router-dom";
import CraftCard from "../../components/craftCard/CraftCard";
import CommonTitle from "../../components/commonTitle/CommonTitle";

const SubCategory = () => {

    const loadedData = useLoaderData()

    const paramsData = useParams()

    const subcategory = paramsData.subcategory;

    
    console.log(subcategory)
    console.log(loadedData)
    
    const filterData = loadedData?.filter(item=> item.subcategory_Name == subcategory)
    console.log(filterData)
    

    return (
        <div className="min-h-screen container mx-auto py-10">
                <CommonTitle text={`${subcategory} Items`}></CommonTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-10 px-5">
                {filterData?.map(item => <CraftCard key={item._id} item={item}></CraftCard>)}
            </div>
            
        </div>
    );
};

export default SubCategory;
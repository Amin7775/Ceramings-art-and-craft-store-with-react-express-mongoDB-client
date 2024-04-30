import { useLoaderData, useParams } from "react-router-dom";
import CraftCard from "../../components/craftCard/CraftCard";
import CommonTitle from "../../components/commonTitle/CommonTitle";
import { useEffect, useState } from "react";
import SubCategoryCard from "./SubCategoryCard";

const SubCategory = () => {
  const loadedData = useLoaderData();

  const paramsData = useParams();

  const subcategory = paramsData.subcategory;

  console.log(subcategory);
  console.log(loadedData);

  const filterData = loadedData?.filter(
    (item) => item.subcategory_Name == subcategory
  );
  console.log(filterData);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen container mx-auto py-10">
      <CommonTitle text={`${subcategory} Items`}></CommonTitle>

      {loading ? (
        <div className="h-screen w-full flex items-center justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-10 px-5">
          {filterData?.map((item) => (
            <SubCategoryCard key={item._id} item={item}></SubCategoryCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubCategory;

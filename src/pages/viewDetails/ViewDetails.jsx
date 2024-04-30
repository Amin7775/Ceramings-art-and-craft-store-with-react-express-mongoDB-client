import { useLoaderData, useParams } from "react-router-dom";
import './../../styles/font.css'
import { FaStar } from "react-icons/fa6";

const ViewDetails = () => {
    const loadedData = useLoaderData()
    console.log(loadedData)
    const {_id, item_Name, image, subcategory_Name, price, short_Description, rating, customization, processing_Time, stockStatus, User_Email, User_Name
    } = loadedData;


    return (
        <div className="min-h-screen container mx-auto font-jost">
            <div className="flex flex-col lg:flex-row lg:mt-10 gap-5 lg:items-center">
                <div className="w-full lg:w-[40%] p-10  md:p-16 bg-custom-color-4">
                    <img className="object-cover object-center" src={image} alt="" />
                </div>
                {/* text section */}
                <div className="flex-1 px-7 py-5 md:p-16 lg:p-0">
                <h1 className="mt-2 text-4xl font-medium">{item_Name}</h1>
                <h1 className="mt-5 text-xl font-medium">Type : {subcategory_Name}</h1>
                <p className="mt-2 text-xl font-medium">By : {User_Name} </p>
                <div className="flex gap-1 mt-4 items-center">
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-orange-400"></FaStar>
                <div className="text-lg text-slate-500">
                    ( {rating} )
                </div>
                </div>
                {/* price */}
                <p className="font-extrabold text-slate-400 text-xl mt-5">
                Price : {price} Taka
                </p>
                <p className="text-lg  text-slate-500 mt-5" > {short_Description}</p>
                <div className="flex justify-between mt-8 flex-wrap gap-5">
                <p className="text-lg  text-slate-500">Customizable : {customization.toUpperCase()}</p>
                <p className="text-lg  text-slate-500">Stock Status : {stockStatus}</p>
                <p className="text-lg  text-slate-500">Processing Time : {processing_Time} Days</p>
                </div>  
                
                {/* btn */}
                <div className="mt-5">
                    <button className="btn bg-custom-color-1 text-white text-lg py-2 w-full">ADD TO CART</button>
                </div>

                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
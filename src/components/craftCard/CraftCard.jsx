import React from "react";
import { Link } from "react-router-dom";

const CraftCard = ({item}) => {
    const {_id, item_Name, image, subcategory_Name, price, short_Description, rating, customization, processing_Time, stockStatus, User_Email, User_Name
    } = item;
  return (
    <div className="card  bg-custom-color-3 drop-shadow-lg">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl object-cover"
        />
      </figure>
      <div className="card-body items-start text-center">
        <h2 className="card-title">{item_Name}</h2>
        <p className="text-lg mt-2"><span className="font-medium">Category : </span> {subcategory_Name}</p>
        {/* <p className="text-lg "><span className="font-medium">Rating : </span> {rating} out of 5</p> */}
        <p className="text-lg "><span className="font-medium">Price : </span> {price} taka</p>
        <div className="w-full">
            <Link to={`/allitems/${_id}`}>
          <button className="btn w-full bg-custom-color-1 text-white mt-2 text-lg hover:bg-custom-color-1/[.9]">View Details</button>
            </Link>
        
        </div>
      </div>
    </div>
  );
};

export default CraftCard;

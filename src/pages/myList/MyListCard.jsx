import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyListCard = ({ item,savedData,setSavedData }) => {
  const {
    _id,
    item_Name,
    image,
    subcategory_Name,
    price,
    short_Description,
    rating,
    customization,
    processing_Time,
    stockStatus,
    User_Email,
    User_Name,
  } = item;

  const handleDelete = (_id) => {
    console.log("clicked handledel", _id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/allitems/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "You have successfully Deleted a new craft",
                showConfirmButton: false,
                timer: 2000,
              });
            }
            const remaining = savedData?.filter(singleData => singleData._id != _id)
            setSavedData(remaining)
          });
      }
    });
  };

  return (
    <div className="card  bg-custom-color-3 drop-shadow-lg">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl object-cover" />
      </figure>
      <div className="card-body items-start text-center">
        <h2 className="card-title">{item_Name}</h2>
        <p className="text-lg mt-2">
          <span className="font-medium">Category : </span> {subcategory_Name}
        </p>
        <p className="text-lg ">
          <span className="font-medium">Rating : </span> {rating} out of 5
        </p>
        <p className="text-lg ">
          <span className="font-medium">Customization : </span>{" "}
          {customization.toUpperCase()}
        </p>
        <p className="text-lg ">
          <span className="font-medium">Stock Status : </span> {stockStatus}
        </p>
        <p className="text-lg ">
          <span className="font-medium">Price : </span> {price} taka
        </p>
        {/* btns */}
        <div className="w-full">
          <Link to={`/update/${_id}`}>
            <button className="btn w-full bg-custom-color-2 text-white mt-2 text-lg hover:bg-black/[.8]">
              Update
            </button>
          </Link>

          <button
            onClick={() => handleDelete(_id)}
            className="btn w-full bg-red-400 text-white mt-2 text-lg hover:bg-red-400/[.9]"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyListCard;

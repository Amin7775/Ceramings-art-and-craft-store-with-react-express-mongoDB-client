import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePage = () => {
  const { user } = useContext(AuthContext);
    const LoadedData = useLoaderData()
    const {_id} = LoadedData
    console.log(LoadedData, _id)

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = data;
    console.log(formData);

    fetch(` https://ceramings-server.vercel.app/allitems/${LoadedData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.acknowledged == true){
          Swal.fire({
            position: "center",
            icon: "success",
            title: "You have successfully Updated this item",
            showConfirmButton: false,
            timer: 2000
          })
          .then(()=>{
            window.location.reload()

          })
        }
      });
  };
  return (
    <div className="min-h-screen bg-[#F4EDE8] pb-12">
      <div className=" min-h-[95vh] rounded-3xl overflow-hidden w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto   flex justify-center items-center pt-10">
        <div className=" w-full bg-white rounded-3xl ">
          <div className="max-w-[80%] py-14 mx-auto">
            <h1 className="text-4xl md:text-5xl text-center font-semibold mb-10">
              Update Craft
            </h1>
            {/* form */}
            <div className="">
              <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                {/* item_name */}
                <div className="flex flex-col gap-2 mb-3">
                  <label className="text-black opacity-80 text-xl">
                    Item Name
                  </label>
                  <input
                    type="text"
                    className="border px-5 text-xl py-2 rounded-lg bg-[#F5F5F5] "
                    {...register("item_Name", { required: true })}
                    defaultValue={LoadedData?.item_Name}
                  />
                </div>

                {/* image */}
                <div className="flex flex-col gap-2 mb-3">
                  <label className="text-black opacity-80 text-xl">Image</label>
                  <input
                    type="text"
                    className="border px-5 text-xl py-2 rounded-lg bg-[#F5F5F5] "
                    {...register("image", {})}
                    defaultValue={LoadedData?.image}
                  />
                </div>
                <div className="flex flex-col lg:flex-row lg:gap-5">
                  {/* subcategory_Name */}
                  <div className="flex flex-col gap-2 mb-3 lg:w-1/2">
                    <label className="text-black opacity-80 text-xl">
                      Subcategory Name
                    </label>
                    <select
                      className="border px-5 py-2 rounded-lg bg-[#F5F5F5] text-xl"
                      {...register("subcategory_Name")}
                      defaultValue={LoadedData?.subcategory_Name}
                    >
                      <option value="Clay-made pottery">
                        Clay-made pottery
                      </option>
                      <option value="Stoneware">Stoneware</option>
                      <option value="Porcelain">Porcelain</option>
                      <option value="Terra Cotta">Terra Cotta</option>
                      <option value="Ceramics & Architectural">
                        Ceramics & Architectural
                      </option>
                      <option value="Home decor pottery">
                        Home decor pottery
                      </option>
                    </select>
                  </div>
                  {/* price */}
                  <div className="flex flex-col gap-2 mb-3 flex-1">
                    <label className="text-black opacity-80 text-xl">
                      Price
                    </label>
                    <input
                      type="number"
                      className="border px-5 text-xl py-2 rounded-lg bg-[#F5F5F5] "
                      {...register("price", {})}
                      defaultValue={LoadedData?.price}
                    />
                  </div>
                </div>

                {/* short description */}
                <div className="flex flex-col gap-2 mb-3">
                  <label className="text-black opacity-80 text-xl">
                    Short Description
                  </label>
                  <textarea
                    className="border px-5 text-xl py-2 rounded-lg bg-[#F5F5F5] "
                    {...register("short_Description", {})}
                    defaultValue={LoadedData?.short_Description}
                  />
                </div>

                <div className="flex flex-col lg:flex-row lg:gap-5">
                  {/* rating */}
                  <div className="flex flex-col gap-2 mb-3 lg:w-1/2">
                    <label className="text-black opacity-80 text-xl">
                      Rating
                    </label>
                    <input
                      type="text"
                      className="border px-5 text-xl py-2 rounded-lg bg-[#F5F5F5] "
                      {...register("rating", {})}
                      defaultValue={LoadedData?.rating}
                    />
                  </div>

                  {/* customization */}
                  <div className="flex flex-col gap-2 mb-3 flex-1">
                    <label className="text-black opacity-80 text-xl">
                      Customization
                    </label>
                    <select
                      className="border px-5 py-2 rounded-lg bg-[#F5F5F5] text-xl"
                      {...register("customization")}
                      defaultValue={LoadedData?.customization}
                    >
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:gap-5">
                  {/* processing_time */}
                  <div className="flex flex-col gap-2 mb-3 lg:w-1/2 ">
                    <label className="text-black opacity-80 text-xl">
                      Processing Time (in days)
                    </label>
                    <input
                      type="text"
                      className="border px-5 text-xl py-2 rounded-lg bg-[#F5F5F5] "
                      {...register("processing_Time", {})}
                      defaultValue={LoadedData?.processing_Time}
                    />
                  </div>

                  {/* stockStatus */}
                  <div className="flex flex-col gap-2 mb-3 flex-1">
                    <label className="text-black opacity-80 text-xl">
                      Stock Status
                    </label>
                    <select
                      className="border px-5 py-2 rounded-lg bg-[#F5F5F5] text-xl"
                      {...register("stockStatus")}
                      defaultValue={LoadedData?.stockStatus}
                    >
                      <option value="In stock">In Stock</option>
                      <option value="Made to Order">Made to Order</option>
                    </select>
                  </div>
                </div>
                {/* User Email */}
                <div className="flex flex-col gap-2 mb-3">
                  <label className="text-black opacity-80 text-xl">
                    User Email
                  </label>
                  <input
                    type="email"
                    className="border px-5 text-xl py-2 rounded-lg bg-[#F5F5F5] "
                    {...register("User_Email", {})}
                    defaultValue={user.email}
                    readOnly
                  />
                </div>

                {/* User Name */}
                <div className="flex flex-col gap-2 mb-3">
                  <label className="text-black opacity-80 text-xl">
                    User Name
                  </label>
                  <input
                    type="text"
                    className="border px-5 text-xl py-2 rounded-lg bg-[#F5F5F5] "
                    {...register("User_Name", {})}
                    defaultValue={user.displayName}
                    readOnly
                  />
                </div>

                <div className="pt-2">
                  <input
                    type="submit"
                    value={"Update"}
                    className="btn bg-custom-color-1 text-white hover:bg-custom-color-1/[.9] px-4 md:px-6 lg:px-10 md:text-lg w-full"
                  />
                </div>
              </form>

              {/* or */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePage;

import { Link, useLoaderData } from "react-router-dom";
import CommonTitle from "../../components/commonTitle/CommonTitle";
import { useEffect, useState } from "react";

const AllItems = () => {
  const loadedData = useLoaderData();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  let serial = 0;

  return (
    <div className="min-h-screen py-14">
      <div className="container mx-auto px-5">
        <CommonTitle text={"Crafts by Ceramings"}></CommonTitle>

        {loading ? (
          <div className="h-screen w-full flex items-center justify-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <section className="py-10">
            <div className="overflow-x-auto">
              <table className="table table-xs md:table-sm lg:table-lg">
                {/* head */}
                <thead>
                  <tr>
                    <th className="text-center">
                      <label>Serial No</label>
                    </th>
                    <th>Product Name and image</th>
                    <th className="hidden sm:table-cell">Subcategory</th>
                    <th className="hidden sm:table-cell">Price</th>
                    <th className="hidden sm:table-cell">Stock status</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {loadedData?.length != 0 &&
                    loadedData?.map((singleData) => (
                      <tr key={singleData._id}>
                        <th>
                          <label>
                            <p className="text-lg text-center">
                              {(serial = serial + 1)}
                            </p>
                          </label>
                        </th>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="mask mask-square w-20 h-20">
                                <img
                                  src={singleData?.image}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">
                                {singleData?.item_Name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="hidden sm:table-cell">
                          {singleData?.subcategory_Name}
                        </td>
                        <td className="hidden sm:table-cell">
                          {singleData?.price}
                        </td>
                        <td className="hidden sm:table-cell">
                          {singleData?.stockStatus}
                        </td>
                        <td>
                          <div className="flex justify-center">
                            <Link to={`/allitems/${singleData?._id}`}>
                              <button className="btn bg-custom-color-1 text-white hover:bg-custom-color-1/[.9]">
                                View Details
                              </button>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
                {/* foot */}
                <tfoot>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default AllItems;

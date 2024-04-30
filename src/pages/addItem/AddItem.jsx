import { useForm } from "react-hook-form";

const AddItem = () => {

  

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    console.log( email, password);
    //   validatePassword(password);
  };
 

  return (
    <div className="min-h-screen bg-[#F4EDE8] pb-12">
      <div className=" min-h-[95vh] rounded-3xl overflow-hidden w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto   flex justify-center items-center pt-10">
        <div className=" w-full bg-white rounded-3xl ">
          <div className="max-w-[80%] py-14 mx-auto">
          <h1 className="text-4xl md:text-5xl text-center font-semibold mb-10">
              Add New Item 
            </h1>
            {/* form */}
            <div className="">
              <form
                className="flex flex-col gap-2"
                onSubmit={handleSubmit(onSubmit)}
              >
                
                {/* email */}
                <div className="flex flex-col gap-2 mb-3">
                  <label className="text-black opacity-50 text-xl">Email</label>
                  <input
                    type="email"
                    className="border px-5 text-xl py-2 rounded-lg bg-[#F5F5F5] "
                    {...register("email", { required: true })}
                    placeholder="Enter Your Email Here"
                  />
                  {errors.email && <span>Please enter a valid email</span>}
                </div>
               
                {/* checkbox and forget password */}
                <div className="flex justify-between mb-3">
                  {/* checkbox */}
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4"
                      placeholder="loggedIn"
                      {...register("loggedIn", {})}
                    />
                    <label className="text-black opacity-50 ">
                      Keep me logged in
                    </label>
                  </div>
                </div>
                <input
                  type="submit"
                  className="btn w-full bg-custom-color-1 hover:bg-custom-color-1/[.9] py-3 h-full text-white text-2xl font-normal rounded-lg"
                  value={"Login"}
                />
              </form>
              {/* or */}
              
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};


export default AddItem;
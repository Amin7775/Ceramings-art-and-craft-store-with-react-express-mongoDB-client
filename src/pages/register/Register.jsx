import { FaRegEye, FaRegEyeSlash, FaTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import RegisterTopText from "./RegisterComponents/RegisterTopText";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  // validate Pw
  // const validatePassword = (password) => {
  //   Regular expressions to check for uppercase, lowercase, and minimum length
  //   const uppercaseRegex = /[A-Z]/;
  //   const lowercaseRegex = /[a-z]/;
  //   const lengthRegex = /.{6,}/;

  //   if (!uppercaseRegex.test(password)) {
  //     return toast("Password must contain at least one uppercase letter.");
  //   } else if (!lowercaseRegex.test(password)) {
  //     return toast("Password must contain at least one lowercase letter.");
  //   } else if (!lengthRegex.test(password)) {
  //     return toast("Password must be at least 6 characters long.");
  //   }
  // };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const name = data.name;
    const photoURL = data.photoURL;
    const email = data.email;
    const password = data.password;

    console.log(name, photoURL, email, password);
    //   validatePassword(password);
  };
  const handleGoogleLogin = () => {};
  const handleTwitter = () => {};

  return (
    <div className="min-h-screen bg-[#F4EDE8] pb-12">
      <div className=" min-h-[95vh] rounded-3xl overflow-hidden w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto   flex justify-center items-center pt-10">
        <div className=" w-full bg-white rounded-3xl ">
          <div className="max-w-[80%] py-14 mx-auto">
            <RegisterTopText></RegisterTopText>
            {/* form */}
            <div className="">
              <form
                className="flex flex-col gap-2"
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* name */}
                <div className="flex flex-col gap-2 mb-3">
                  <label className="text-black opacity-50 text-xl">Name</label>
                  <input
                    type="text"
                    className="border px-5 text-xl py-2 rounded-lg bg-[#F5F5F5] "
                    {...register("name", { required: true, min: 4 })}
                    placeholder="Enter Your Name Here"
                  />
                  {errors.name && <span>Name must be more than 3 words</span>}
                </div>
                {/* photoURL */}
                <div className="flex flex-col gap-2 mb-3">
                  <label className="text-black opacity-50 text-xl">Photo</label>
                  <input
                    type="text"
                    className="border px-5 text-xl py-2 rounded-lg bg-[#F5F5F5] "
                    {...register("photoURL")}
                    placeholder="Enter Your photo url Here"
                  />
                </div>
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
                {/* password */}
                <div className="flex flex-col gap-2 mb-4">
                  <label className="text-black opacity-50 text-xl">
                    Password
                  </label>
                  {/* password field modification */}
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="border w-full px-5 text-xl py-2 rounded-lg bg-[#F5F5F5] "
                      {...register("password", { required: true })}
                      placeholder="Enter Your Password Here"
                    />
                    {!showPassword ? (
                      <FaRegEye
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 bottom-3 text-lg text-black opacity-50 cursor-pointer"
                      ></FaRegEye>
                    ) : (
                      <FaRegEyeSlash
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 bottom-3 text-lg text-black opacity-50 cursor-pointer"
                      ></FaRegEyeSlash>
                    )}
                  </div>
                  {errors.password && <span>Invalid password</span>}
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
                  value={"Register"}
                />
              </form>
              {/* or */}
              <div className="flex items-center my-5 gap-3">
                <hr className="flex-grow border-t-2 border-slate-300" />
                <span className="">OR</span>
                <hr className="flex-grow border-t-2 border-slate-300" />
              </div>
              {/* Login with google and twitter*/}
              <div className="grid gap-4 md:gap-6 lg:gap-10 grid-cols-1 md:grid-cols-2">
                {/* google */}
                <button
                  onClick={handleGoogleLogin}
                  className="bg-transparent btn hover:bg-[#F0F0F0] text-base md:text-xl font-normal py-3 drop-shadow-sm h-full border-slate-300"
                >
                  <FcGoogle></FcGoogle>
                  Register with Google
                </button>
                {/* twitter */}
                <button
                  onClick={handleTwitter}
                  className="bg-transparent btn hover:bg-[#F0F0F0]  text-base md:text-xl font-normal py-3 drop-shadow-sm h-full border-slate-300"
                >
                  <FaTwitter className="text-[#4D9EF1]"></FaTwitter>
                  Register with twitter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

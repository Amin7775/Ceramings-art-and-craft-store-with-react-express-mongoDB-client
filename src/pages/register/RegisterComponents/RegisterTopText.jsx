import { Link } from "react-router-dom";


const RegisterTopText = () => {
    return (
        <>
          {/* Welcome Back Message */}
          <div className=" mb-6">
            <h1 className="text-4xl md:text-5xl text-center font-semibold">
              Register
            </h1>
            <p className="text-base md:text-xl text-center mt-4">
              Already have an account?
              <Link to={"/login"}>
                <span className="text-red-500"> Login</span>
              </Link>
            </p>
          </div>
        </>
      );
    };

export default RegisterTopText;
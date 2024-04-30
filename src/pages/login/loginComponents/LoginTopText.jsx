import React from 'react';
import { Link } from 'react-router-dom';

const LoginTopText = () => {
    return (
        <>
          
          <div className=" mb-6">
            <h1 className="text-4xl md:text-5xl text-center font-semibold">
              Welcome Back !
            </h1>
            <p className="text-base md:text-xl text-center mt-4">
              Don't have an account?
              <Link to={"/register"}>
                <span className="text-red-500"> Register</span>
              </Link>
            </p>
          </div>
        </>
      );
    };


export default LoginTopText;
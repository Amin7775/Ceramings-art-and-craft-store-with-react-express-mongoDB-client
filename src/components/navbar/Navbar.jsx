import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/allitems"}>Items</NavLink>
      </li>
      <li>
        <NavLink to={"/additem"}>Add item</NavLink>
      </li>
      <li>
        <NavLink to={"/mylist"}>My list</NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    Swal.fire({
      title: "Confirm logout?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logged Out!",
          text: "Redirecting to the home page",
          icon: "success",
        }).then(() => {
          logOut();
          navigate("/");
        });
      }
    });
  };

  console.log(user)
  return (
    <div className="navbar bg-base-100 drop-shadow-md sticky py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            id="sidebar"
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl md:text-4xl font-bold">
          CERAMINGS
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          className="menu menu-horizontal px-1 text-lg font-medium"
          id="sidebar"
        >
          {links}
        </ul>
      </div>
      <div className="navbar-end flex gap-1">
        {user ? (
          <>
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-custom-color-1 ring-offset-base-100 ring-offset-2 mr-3">
                
                <img src={
                      user.photoURL
                        ? `${user.photoURL}`
                        : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    } />
              </div>
            </div>
            <p
              onClick={handleLogOut}
              className="btn bg-custom-color-1 text-white hover:bg-custom-color-1/[.9] px-4 md:px-6 lg:px-10 md:text-lg"
            >
              Logout
            </p>
          </>
        ) : (
          <>
            <Link to={"/login"}>
              <p className="btn bg-custom-color-1 text-white hover:bg-custom-color-1/[.9] px-4 md:px-6 lg:px-10 md:text-lg">
                Login
              </p>
            </Link>
            <Link to={"/register"}>
              <p className="btn bg-custom-color-1 text-white hover:bg-custom-color-1/[.9] px-4 md:px-6 lg:px-10 md:text-lg">
                Register
              </p>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

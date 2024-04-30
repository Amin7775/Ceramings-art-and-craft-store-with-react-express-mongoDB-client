import { Link, NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/allitems'}>Items</NavLink></li>
        <li><NavLink to={'/additem'}>Add item</NavLink></li>
        <li><NavLink to={'/mylist'}>My list</NavLink></li>
    </>
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
        <a className="btn btn-ghost text-2xl md:text-4xl font-bold">CERAMINGS</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-medium" id="sidebar">
        {links}
        </ul>
      </div>
      <div className="navbar-end flex gap-1">
        <Link to={'/login'}>
        <p className="btn bg-custom-color-1 text-white hover:bg-custom-color-1/[.9] px-4 md:px-6 lg:px-10 md:text-lg">Login</p>
        </Link>
        <Link to={'/register'}>
        <p className="btn bg-custom-color-1 text-white hover:bg-custom-color-1/[.9] px-4 md:px-6 lg:px-10 md:text-lg">Register</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

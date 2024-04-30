import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import AllItems from "../pages/allItems/AllItems";
import AddItem from "../pages/addItem/AddItem";
import MyList from "../pages/myList/MyList";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../pages/viewDetails/ViewDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/allitems',
          element: <AllItems></AllItems>,
          loader: ()=>fetch('http://localhost:5000/allitems')
        },
        {
          path: '/additem',
          element: <PrivateRoute><AddItem></AddItem></PrivateRoute>
        },
        {
          path: '/mylist',
          element: <PrivateRoute><MyList></MyList></PrivateRoute>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: `/allitems/:id`,
          element: <ViewDetails></ViewDetails>,
          loader: ({params})=>fetch(`http://localhost:5000/allitems/${params.id}`)
        }
      ]
    },
  ]);

export default router;
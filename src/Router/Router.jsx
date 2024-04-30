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
import UpdatePage from "../pages/UpdatePage/UpdatePage";
import SubCategory from "../pages/subCategory/SubCategory";

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
          element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
          loader: ({params})=>fetch(`http://localhost:5000/allitems/${params.id}`)
        },
        {
          path:`/update/:id`,
          element: <PrivateRoute><UpdatePage></UpdatePage></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/allitems/${params.id}`)
        },
        {
          // show data based on subcategory
          path: `/subcategory/:subcategory`,
          element: <SubCategory></SubCategory>,
          loader: ()=>fetch(`http://localhost:5000/allitems`)
        }
      ]
    },
  ]);

export default router;
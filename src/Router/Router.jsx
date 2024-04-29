import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import AllItems from "../pages/allItems/AllItems";
import AddItem from "../pages/addItem/AddItem";
import MyList from "../pages/myList/MyList";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

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
          element: <AllItems></AllItems>
        },
        {
          path: '/additem',
          element: <AddItem></AddItem>
        },
        {
          path: '/mylist',
          element: <MyList></MyList>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
  ]);

export default router;
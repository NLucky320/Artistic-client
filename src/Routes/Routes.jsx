import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import AddCraftsItem from "../Pages/AddCraftsItem";
import AllCraftsItems from "../Pages/AllCraftsItems";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: 'addCraftsItem',
        element:<AddCraftsItem></AddCraftsItem>
      },
      {
        path: '/allCraftsItems',
        element: <AllCraftsItems></AllCraftsItems>
      }
    ],
  },
]);
export default router;

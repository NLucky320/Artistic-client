import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import AddCraftsItem from "../Pages/AddCraftsItem";
import AllCraftsItems from "../Pages/AllCraftsItems";
import MyArt from "../Pages/MyArt";
import UpdateArt from "../Pages/UpdateArt";
import ViewDetails from "../Pages/ViewDetails";
import PrivateRoute from '../components/PrivateRoute';
import ArtSubcategory from "../Pages/ArtSubcategory";
import ContactUs from "../Pages/ContactUs";

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
        path: "/addArtsItem",
        element: <PrivateRoute><AddCraftsItem></AddCraftsItem></PrivateRoute>,
      },
      {
        path: "/allArtsItems",
        element: <AllCraftsItems></AllCraftsItems>,
      },
      {
        path: "/myArt&CraftList",
        element: <PrivateRoute><MyArt></MyArt></PrivateRoute>,
      },
      {
        path: "/updateArt/:id",
        element: <PrivateRoute> <UpdateArt></UpdateArt></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://assignment-10-server-liart-ten.vercel.app/crafts/${params.id}`).then((res) =>
            res.json()
          ),
      },
      {
        path: "/allArtsItems/viewDetails/:id",
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://assignment-10-server-liart-ten.vercel.app/crafts/${params.id}`).then((res) =>
            res.json()
          ),
      },
      {
        path: "/viewDetails/:id",
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://assignment-10-server-liart-ten.vercel.app/crafts/${params.id}`).then((res) =>
            res.json()
          ),
      },
      {
        path: "/subcategory/viewDetails/:id",
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://assignment-10-server-liart-ten.vercel.app/crafts/${params.id}`).then((res) =>
            res.json()
          ),
      },
      {
        path: "/subcategory/:subcategory_Name",
        element: <PrivateRoute><ArtSubcategory></ArtSubcategory></PrivateRoute>,
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>
      }
    ],
  },
]);

export default router;

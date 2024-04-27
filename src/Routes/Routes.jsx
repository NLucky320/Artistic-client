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
        element: <AddCraftsItem></AddCraftsItem>,
      },
      {
        path: "/allArtsItems",
        element: <AllCraftsItems></AllCraftsItems>,
      },
      {
        path: "/myArt&CraftList",
        element: <MyArt></MyArt>,
      },
      {
        path: "/updateArt/:id",
        element: <UpdateArt></UpdateArt>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/crafts/${params.id}`).then((res) =>
            res.json()
          ),
      },
      {
        path: "/allArtsItems/viewDetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/crafts/${params.id}`).then((res) =>
            res.json()
          ),
      },
      {
        path: "/viewDetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/crafts/${params.id}`).then((res) =>
            res.json()
          ),
      },
    ],
  },
]);

export default router;

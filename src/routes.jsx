import Layout from "@components/layout/Layout";
import ErrorPage from "@pages/ErrorPage";
import MainPage from "@pages/MainPage";
import Calender from "@pages/calender/Calender";
import FriendListPage from "@pages/friends/FriendListPage";
import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: "home",
        element: <MainPage />,
      },
      {
        path: "friends",
        element: <FriendListPage />,
      },
      {
        path: "calender",
        element: <Calender />,
      },
    ],
  },
]);

export default router;

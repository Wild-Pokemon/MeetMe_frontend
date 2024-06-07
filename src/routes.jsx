import Layout from "@components/layout/Layout";
import ErrorPage from "@pages/ErrorPage";
import MainPage from "@pages/MainPage";
import Calender from "@pages/calendar/Calender";
import FriendListPage from "@pages/friends/FriendListPage";
import Login from "@pages/users/Login";
import Signup from "@pages/users/Signup";
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
        path: "users/login",
        element: <Login />,
      },
      {
        path: "users/signup",
        element: <Signup />,
      },
      {
        path: "friends",
        element: <FriendListPage />,
      },
      {
        path: "calendar",
        element: <Calender />,
      },
    ],
  },
]);

export default router;

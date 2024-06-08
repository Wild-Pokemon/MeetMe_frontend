import Layout from "@components/layout/Layout";
import ErrorPage from "@pages/ErrorPage";
import MainPage from "@pages/MainPage";
import Calender from "@pages/calendar/Calender";
import FriendListPage from "@pages/friends/FriendListPage";
import MyPage from "@pages/mypage/MyPage";
import MyPageAuth from "@pages/mypage/MyPageAuth";
import MyPageEdit from "@pages/mypage/MyPageEdit";
import MyPageMain from "@pages/mypage/MyPageMain";
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
        path: "mypage",
        element: <MyPage />,
        children: [
          {
            index: true,
            element: <MyPageMain />,
          },
          {
            path: "auth",
            element: <MyPageAuth />,
          },
          {
            path: "edit",
            element: <MyPageEdit />,
          },
        ],
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

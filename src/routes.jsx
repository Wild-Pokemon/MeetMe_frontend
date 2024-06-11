import Layout from "@components/layout/Layout";
import ErrorPage from "@pages/ErrorPage";
import MainPage from "@pages/MainPage";
import Calender from "@pages/calendar/Calender";
import Mail from "@pages/friends/Mail";
import FriendListPage from "@pages/friends/FriendListPage";
import EmailAuth from "@pages/help/EmailAuth";
import EmailSearch from "@pages/help/EmailSearch";
import EmailSearchResult from "@pages/help/EmailSearchResult";
import PWReset from "@pages/help/PWReset";
import PWSearch from "@pages/help/PWSearch";
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
        path: "users/help/emailSearch",
        element: <EmailSearch />,
      },
      {
        path: "users/help/emailResult",
        element: <EmailSearchResult />,
      },
      {
        path: "users/help/pwSearch",
        element: <PWSearch />,
      },
      {
        path: "users/help/emailAuth",
        element: <EmailAuth />,
      },
      {
        path: "users/help/pwReset",
        element: <PWReset />,
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
        path: "friends/mail",
        element: <Mail />,
      },
      {
        path: "calendar",
        element: <Calender />,
      },
    ],
  },
]);

export default router;

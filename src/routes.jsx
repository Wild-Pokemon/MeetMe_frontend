import Layout from "@components/layout/Layout";
import ErrorPage from "@pages/error/ErrorPage";
import MainPage from "@pages/mainpage/MainPage";
import Calendar from "@pages/calendar/Calendar";
import PromiseDetail from "@pages/promise/PromiseDetail";
import PromiseEdit from "@pages/promise/PromiseEdit";
import PromiseNew from "@pages/promise/PromiseNew";

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
import FriendMainPage from "@pages/friends/FriendMainPage";
import FriendRequestPage from "@pages/friends/FriendRequestPage";

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
        element: <FriendMainPage />,
      },
      {
        path: "friends/request",
        element: <FriendRequestPage />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "promise",
        element: <PromiseNew />,
      },
      {
        path: "promise/detail",
        element: <PromiseDetail />,
      },
      {
        path: "promise/edit",
        element: <PromiseEdit />,
      },
    ],
  },
]);

export default router;

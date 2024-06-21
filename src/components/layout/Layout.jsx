import Header from "@components/layout/Header";
import "@styles/components/layout/Layout.scss";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  const [user, setUser] = useState(false);
  return (
    <div className="layout">
      {user ? <Header /> : ""}
      <Outlet />
    </div>
  );
}

export default Layout;

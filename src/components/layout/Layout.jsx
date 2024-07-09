import "@styles/components/layout/Layout.scss";
import Header from "@components/layout/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;

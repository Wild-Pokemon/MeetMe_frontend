import Header from "@components/layout/Header";
import "@styles/components/layout/Layout.scss";
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

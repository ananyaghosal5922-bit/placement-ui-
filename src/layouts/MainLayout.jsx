import { useLocation } from "react-router-dom";


import Sidebar from "../components/Sidebar";

import TopBar from "../components/TopBar";

import "./MainLayout.css";

function MainLayout({ children, role, setRole }) {
  const location = useLocation();

  const getPageTitle = () => {
    if (location.pathname === "/") {
      return "Dashboard";
    }

    if (location.pathname === "/jobs") {
      return "Explore Placement Jobs";
    }

    if (location.pathname === "/job-details") {
      return "Job Specification";
    }

    if (location.pathname === "/applications") {
      return "Applications Tracker";
    }

      return "Placement Portal";
  };

  return (
    <div className="main-layout">
      <Sidebar />

      <div className="main-content">
        <TopBar
  title={getPageTitle()}
  role={role}
  setRole={setRole}
/>

        <main className="page-content">
          {children}
        </main>
      </div>
    </div>
  );
}
export default MainLayout;
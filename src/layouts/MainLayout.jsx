import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";

import Sidebar from "../components/Sidebar";

import TopBar from "../components/TopBar";

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
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box sx={{ flex: 1 }}>
        <TopBar
          title={getPageTitle()}
          role={role}
          setRole={setRole}
        />

        <Box
          component="main"
          sx={{ color: "black", backgroundColor: "white", minHeight: "500px" }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
export default MainLayout;
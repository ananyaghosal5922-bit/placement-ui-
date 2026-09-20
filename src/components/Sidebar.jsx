import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import WorkIcon from "@mui/icons-material/Work";
import AssignmentIcon from "@mui/icons-material/Assignment";

import { Link, useLocation } from "react-router-dom";

import "./Sidebar.css";

function Sidebar() {
  const location = useLocation();

  return (
    <Box className="sidebar">
      <Box className="sidebar-logo">
        Placement Portal
      </Box>

      <List>

        <ListItemButton
          component={Link}
          to="/"
          className="sidebar-item active"
          aria-current={location.pathname === "/" ? "page" : undefined}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>

          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/jobs"
          className="sidebar-item"
          aria-current={location.pathname === "/jobs" ? "page" : undefined}
        >
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>

          <ListItemText primary="Jobs" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/applications"
          className="sidebar-item"
          aria-current={
            location.pathname === "/applications" ? "page" : undefined
          }
        >
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>

          <ListItemText primary="Applications" />
        </ListItemButton>

      </List>
    </Box>
  );
}

export default Sidebar;
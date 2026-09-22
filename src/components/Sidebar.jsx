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

function Sidebar() {
  const location = useLocation();

  return (
    <Box
      sx={{
        width: 240,
        minHeight: "100vh",
        bgcolor: "background.paper",
        borderRight: 1,
        borderColor: "divider",
      }}
    >
      <Box
        sx={{
          p: 2,
          fontSize: "1.25rem",
          fontWeight: 700,
        }}
      >
        Placement Portal
      </Box>

      <List>
        <ListItemButton
          component={Link}
          to="/"
          sx={{
            color: location.pathname === "/" ? "primary.main" : "inherit",
            bgcolor: location.pathname === "/" ? "action.selected" : "transparent",
            "&:hover": { bgcolor: "action.hover" },
          }}
          aria-current={location.pathname === "/" ? "page" : undefined}
        >
          <ListItemIcon sx={{ color: "inherit" }}>
            <DashboardIcon />
          </ListItemIcon>

          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/jobs"
          sx={{
            color: location.pathname === "/jobs" ? "primary.main" : "inherit",
            bgcolor: location.pathname === "/jobs" ? "action.selected" : "transparent",
            "&:hover": { bgcolor: "action.hover" },
          }}
          aria-current={location.pathname === "/jobs" ? "page" : undefined}
        >
          <ListItemIcon sx={{ color: "inherit" }}>
            <WorkIcon />
          </ListItemIcon>

          <ListItemText primary="Jobs" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/applications"
          sx={{
            color:
              location.pathname === "/applications" ? "primary.main" : "inherit",
            bgcolor:
              location.pathname === "/applications"
                ? "action.selected"
                : "transparent",
            "&:hover": { bgcolor: "action.hover" },
          }}
          aria-current={
            location.pathname === "/applications" ? "page" : undefined
          }
        >
          <ListItemIcon sx={{ color: "inherit" }}>
            <AssignmentIcon />
          </ListItemIcon>

          <ListItemText primary="Applications" />
        </ListItemButton>

      </List>
    </Box>
  );
}

export default Sidebar;
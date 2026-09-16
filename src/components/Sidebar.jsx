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

import "./Sidebar.css";

function Sidebar() {
  return (
    <Box className="sidebar">
      <Box className="sidebar-logo">
        Placement Portal
      </Box>

      <List>
        <ListItemButton className="sidebar-item">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>

          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton className="sidebar-item">
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>

          <ListItemText primary="Jobs" />
        </ListItemButton>

        <ListItemButton className="sidebar-item">
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
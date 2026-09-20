import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Chip,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import "./TopBar.css";

function TopBar({ title, role, setRole }) {
  return (
    <AppBar position="static" className="topbar">
      <Toolbar className="topbar-toolbar">

        <Typography className="topbar-title">
          {title}
        </Typography>

        <div className="topbar-actions">

          <ToggleButtonGroup
            value={role}
            exclusive
            size="small"
            onChange={(event, newRole) => {
              if (newRole !== null) {
                setRole(newRole);
              }
            }}
          >
            <ToggleButton value="admin">
              Admin
            </ToggleButton>

            <ToggleButton value="student">
              Student
            </ToggleButton>
          </ToggleButtonGroup>

          <IconButton className="notification-button">
            <NotificationsNoneIcon />
          </IconButton>

          <Chip
            label="Batch of 2024"
            className="batch-chip"
          />

        </div>

      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Chip,
} from "@mui/material";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import "./TopBar.css";

function TopBar({ title }) {
  return (
    <AppBar position="static" className="topbar">
      <Toolbar className="topbar-toolbar">

        <Typography className="topbar-title">
          {title}
        </Typography>

        <div className="topbar-actions">

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
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Chip,
} from "@mui/material";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

function TopBar({ title, role, setRole }) {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#ffffff",
        color: "#1f2937",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          minHeight: 64,
          px: { xs: 2, sm: 3 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >

        <Typography
          sx={{
            fontSize: "1.25rem",
            fontWeight: 600,
            lineHeight: 1.5,
          }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >


          <IconButton
            sx={{
              color: "inherit",
              p: 1,
            }}
          >
            <NotificationsNoneIcon />
          </IconButton>

          <Chip
            label="Batch of 2024"
            sx={{
              borderRadius: 1,
              fontWeight: 500,
            }}
          />

        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
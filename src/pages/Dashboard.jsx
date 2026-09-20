import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import AssignmentIcon from "@mui/icons-material/Assignment";

import "./Dashboard.css";

function Dashboard({ role }) {
  return (
    <Box className="dashboard-page">
      <Typography className="dashboard-heading">
         {role === "admin" ? "Admin Dashboard" : "Student Dashboard"}
      </Typography>

<Box className="dashboard-cards">
    {role === "admin" && (
  <Card className="dashboard-card">
    <CardContent>
      <WorkIcon className="dashboard-icon" />

      <Typography className="dashboard-card-title">
        Manage Jobs
      </Typography>

      <Typography className="dashboard-card-number">
        12
      </Typography>

      <Button variant="contained">
        Manage Drives
      </Button>
    </CardContent>
  </Card>
)}
<Card className="dashboard-card">
    <CardContent>
    <WorkIcon className="dashboard-icon" />

    <Typography className="dashboard-card-title">
    Available Jobs
</Typography>

<Typography className="dashboard-card-number">
    12
</Typography>

<Button variant="contained">
    View Jobs
</Button>
    </CardContent>
</Card>

    <Card className="dashboard-card">
    <CardContent>
    <AssignmentIcon className="dashboard-icon" />

    <Typography className="dashboard-card-title">
        Applications
    </Typography>

    <Typography className="dashboard-card-number">
        5
    </Typography>

    <Button variant="contained">
        View Applications
    </Button>
    </CardContent>
    </Card>
    </Box>
</Box>
);
}

export default Dashboard;
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  LinearProgress,
} from "@mui/material";

import WorkIcon from "@mui/icons-material/Work";
import StarIcon from "@mui/icons-material/Star";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SchoolIcon from "@mui/icons-material/School";

import { Link } from "react-router-dom";

import "./Dashboard.css";

function Dashboard() {
  return (
<Box className="dashboard-page">

<Typography className="dashboard-heading">
Placement Dashboard
</Typography>


<Card className="welcome-card">
<CardContent className="welcome-content">

<Box>
  <Typography className="welcome-title">
    Welcome back, Ananya!
  </Typography>

  <Typography className="welcome-text">
    Keep your profile updated to increase matching opportunities by 3x.
  </Typography>
</Box>

<Box className="profile-progress">
  <Typography className="profile-label">
    Profile Completeness
    <span>72% Complete</span>
  </Typography>

  <LinearProgress
    variant="determinate"
    value={72}
  />
</Box>

</CardContent>
</Card>

<Box className="dashboard-summary">

<Card className="summary-card">
<CardContent>
  <Box className="summary-top">
    <Typography>Total Applications</Typography>
    <WorkIcon />
  </Box>

  <Typography className="summary-number">
    14
  </Typography>

  <Typography className="summary-blue">
    3 active processes
  </Typography>
</CardContent>
</Card>

<Card className="summary-card">
<CardContent>
  <Box className="summary-top">
    <Typography>Shortlisted</Typography>
    <StarIcon />
  </Box>

  <Typography className="summary-number">
    4
  </Typography>

  <Typography className="summary-green">
    +1 since last week
  </Typography>
</CardContent>
</Card>

<Card className="summary-card">
<CardContent>
  <Box className="summary-top">
    <Typography>Interviews Scheduled</Typography>
    <CalendarMonthIcon />
  </Box>

  <Typography className="summary-number">
    2
  </Typography>

  <Typography className="summary-orange">
    Next on 15 Oct
  </Typography>
</CardContent>
</Card>

<Card className="summary-card">
<CardContent>
  <Box className="summary-top">
    <Typography>Offers Received</Typography>
    <SchoolIcon />
  </Box>

  <Typography className="summary-number">
    1
  </Typography>

  <Typography className="summary-blue">
    Congratulations!
  </Typography>
</CardContent>
</Card>

</Box>

<Typography className="section-title">
Upcoming Placement Drive
</Typography>

<Box className="drive-cards">

<Card className="drive-card">
<CardContent>
  <Box className="drive-header">
    <WorkIcon />
    <Box>
      <Typography className="drive-title">
        Software Engineer
      </Typography>
      <Typography>
        Stripe
      </Typography>
    </Box>
  </Box>

  <Box className="drive-bottom">
    <Typography className="salary">
      18-22 LPA
    </Typography>

    <Button
      variant="contained"
      component={Link}
      to="/job-details"
    >
      Apply Now
    </Button>
  </Box>
</CardContent>
</Card>

<Card className="drive-card">
<CardContent>
  <Box className="drive-header">
    <WorkIcon />
    <Box>
      <Typography className="drive-title">
        Product Analyst
      </Typography>
      <Typography>
        Razorpay
      </Typography>
    </Box>
  </Box>

  <Box className="drive-bottom">
    <Typography className="salary">
      12-15 LPA
    </Typography>

    <Button
      variant="contained"
      component={Link}
      to="/job-details"
    >
      Apply Now
    </Button>
  </Box>
</CardContent>
</Card>

<Card className="drive-card">
<CardContent>
  <Box className="drive-header">
    <WorkIcon />
    <Box>
      <Typography className="drive-title">
        Frontend Developer
      </Typography>
      <Typography>
        Vercel
      </Typography>
    </Box>
  </Box>

  <Box className="drive-bottom">
    <Typography className="salary">
      16-20 LPA
    </Typography>

    <Button
      variant="contained"
      component={Link}
      to="/job-details"
    >
      Apply Now
    </Button>
  </Box>
</CardContent>
</Card>

</Box>

<Box className="dashboard-bottom">

<Card className="activity-card">
<CardContent>
  <Typography className="section-title">
    Recent Placement Activity
  </Typography>

  <Box className="activity-item">
    <span className="activity-dot"></span>
    <Box>
      <Typography>
        Applied to Software Development Engineer <b>Amazon</b>
      </Typography>
      <Typography className="activity-time">
        2 hours ago
      </Typography>
    </Box>
    <span className="status-badge">
      Applied
    </span>
  </Box>

  <Box className="activity-item">
    <span className="activity-dot"></span>
    <Box>
      <Typography>
        Status updated to Shortlisted for <b>Atlassian</b>
      </Typography>
      <Typography className="activity-time">
        Yesterday
      </Typography>
    </Box>
    <span className="status-badge">
      Shortlisted
    </span>
  </Box>

  <Box className="activity-item">
    <span className="activity-dot"></span>
    <Box>
      <Typography>
        Interview Scheduled with <b>Google India</b>
      </Typography>
      <Typography className="activity-time">
        2 days ago
      </Typography>
    </Box>
    <span className="status-badge">
      Interview
    </span>
  </Box>

</CardContent>
</Card>

<Card className="deadline-card">
<CardContent>
  <Typography className="section-title">
    Upcoming Deadlines
  </Typography>

  <Box className="deadline-item">
    <Typography>
      <b>Microsoft SDE Role</b>
    </Typography>
    <Typography className="deadline-red">
      Closes in 4 hours
    </Typography>
  </Box>

  <Box className="deadline-item">
    <Typography>
      <b>Uber Coding Assessment</b>
    </Typography>
    <Typography className="deadline-orange">
      Due tomorrow, 11:59 PM
    </Typography>
  </Box>

</CardContent>
</Card>

</Box>

    </Box>
  );
}

export default Dashboard;
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

function Dashboard() {
  return (
    <Box sx={{ p: 3, maxWidth: 1400, mx: "auto" }}>

      <Typography sx={{ fontSize: "2rem", fontWeight: 700, mb: 3 }}>
        Placement Dashboard
      </Typography>


      <Card sx={{ mb: 4, borderRadius: 2 }}>
        <CardContent sx={{ p: 3, display: "flex", justifyContent: "space-between", gap: 3, alignItems: "center" }}>

          <Box>
            <Typography sx={{ fontSize: "1.35rem", fontWeight: 700, mb: 1 }}>
              Welcome back, Ananya!
            </Typography>

            <Typography sx={{ color: "text.secondary" }}>
              Keep your profile updated to increase matching opportunities by 3x.
            </Typography>
          </Box>

          <Box sx={{ width: { xs: "100%", sm: 280 } }}>
            <Typography sx={{ display: "flex", justifyContent: "space-between", mb: 1, fontWeight: 600 }}>
              Profile Completeness
              <span>72% Complete</span>
            </Typography>

            <LinearProgress variant="determinate" value={72} sx={{ height: 8, borderRadius: 4 }} />
          </Box>

        </CardContent>
      </Card>

      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 2, mb: 4 }}>

        <Card sx={{ borderRadius: 2 }}>
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "primary.main" }}>
              <Typography>Total Applications</Typography>
              <WorkIcon />
            </Box>

            <Typography sx={{ fontSize: "2rem", fontWeight: 700, mt: 1 }}>14</Typography>

            <Typography sx={{ color: "primary.main" }}>3 active processes</Typography>
          </CardContent>
        </Card>

        <Card sx={{ borderRadius: 2 }}>
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "warning.main" }}>
              <Typography>Shortlisted</Typography>
              <StarIcon />
            </Box>

            <Typography sx={{ fontSize: "2rem", fontWeight: 700, mt: 1 }}>
              4
            </Typography>

            <Typography sx={{ color: "success.main" }}>
              +1 since last week
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ borderRadius: 2 }}>
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "warning.main" }}>
              <Typography>Interviews Scheduled</Typography>
              <CalendarMonthIcon />
            </Box>

            <Typography sx={{ fontSize: "2rem", fontWeight: 700, mt: 1 }}>
              2
            </Typography>

            <Typography sx={{ color: "warning.main" }}>
              Next on 15 Oct
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ borderRadius: 2 }}>
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "success.main" }}>
              <Typography>Offers Received</Typography>
              <SchoolIcon />
            </Box>

            <Typography sx={{ fontSize: "2rem", fontWeight: 700, mt: 1 }}>
              1
            </Typography>

            <Typography sx={{ color: "primary.main" }}>
              Congratulations!
            </Typography>
          </CardContent>
        </Card>

      </Box>

      <Typography sx={{ fontSize: "1.25rem", fontWeight: 700, mb: 2 }}>
        Upcoming Placement Drive
      </Typography>

      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 2, mb: 4 }}>

        <Card sx={{ borderRadius: 2 }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <WorkIcon />
              <Box>
                <Typography sx={{ fontWeight: 700 }}>
                  Software Engineer
                </Typography>
                <Typography>
                  Stripe
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 3 }}>
              <Typography sx={{ fontWeight: 600 }}>
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

        <Card sx={{ borderRadius: 2 }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <WorkIcon />
              <Box>
                <Typography sx={{ fontWeight: 700 }}>
                  Product Analyst
                </Typography>
                <Typography>
                  Razorpay
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 3 }}>
              <Typography sx={{ fontWeight: 600 }}>
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

        <Card sx={{ borderRadius: 2 }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <WorkIcon />
              <Box>
                <Typography sx={{ fontWeight: 700 }}>
                  Frontend Developer
                </Typography>
                <Typography>
                  Vercel
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 3 }}>
              <Typography sx={{ fontWeight: 600 }}>
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

      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 2 }}>

        <Card sx={{ borderRadius: 2 }}>
          <CardContent>
            <Typography sx={{ fontSize: "1.25rem", fontWeight: 700, mb: 2 }}>
              Recent Placement Activity
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, py: 1.5, borderBottom: "1px solid", borderColor: "divider" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#1976d2", display: "inline-block" }}></span>
              <Box>
                <Typography>
                  Applied to Software Development Engineer <b>Amazon</b>
                </Typography>
                <Typography sx={{ color: "text.secondary", fontSize: "0.85rem" }}>
                  2 hours ago
                </Typography>
              </Box>
              <span style={{ marginLeft: "auto", color: "#1976d2", fontWeight: 600 }}>
                Applied
              </span>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, py: 1.5, borderBottom: "1px solid", borderColor: "divider" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#1976d2", display: "inline-block" }}></span>
              <Box>
                <Typography>
                  Status updated to Shortlisted for <b>Atlassian</b>
                </Typography>
                <Typography sx={{ color: "text.secondary", fontSize: "0.85rem" }}>
                  Yesterday
                </Typography>
              </Box>
              <span style={{ marginLeft: "auto", color: "#1976d2", fontWeight: 600 }}>
                Shortlisted
              </span>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, py: 1.5 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#1976d2", display: "inline-block" }}></span>
              <Box>
                <Typography>
                  Interview Scheduled with <b>Google India</b>
                </Typography>
                <Typography sx={{ color: "text.secondary", fontSize: "0.85rem" }}>
                  2 days ago
                </Typography>
              </Box>
              <span style={{ marginLeft: "auto", color: "#1976d2", fontWeight: 600 }}>
                Interview
              </span>
            </Box>

          </CardContent>
        </Card>

        <Card sx={{ borderRadius: 2 }}>
          <CardContent>
            <Typography sx={{ fontSize: "1.25rem", fontWeight: 700, mb: 2 }}>
              Upcoming Deadlines
            </Typography>

            <Box sx={{ py: 1.5, borderBottom: "1px solid", borderColor: "divider" }}>
              <Typography>
                <b>Microsoft SDE Role</b>
              </Typography>
              <Typography sx={{ color: "error.main" }}>
                Closes in 4 hours
              </Typography>
            </Box>

            <Box sx={{ py: 1.5 }}>
              <Typography>
                <b>Uber Coding Assessment</b>
              </Typography>
              <Typography sx={{ color: "warning.main" }}>
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
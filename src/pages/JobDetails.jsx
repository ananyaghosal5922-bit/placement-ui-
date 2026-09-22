import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  Grid,
  Tabs,
  Tab,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import WorkOutlinedIcon from "@mui/icons-material/WorkOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import CloseIcon from "@mui/icons-material/Close";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
    </div>
  );
}

export default function JobDetails() {
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [applicationId, setApplicationId] = useState("");

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleApply = () => {
    const generatedId = `APP-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}`;
    setApplicationId(generatedId);

    const newApp = {
      company: "Stripe",
      title: "Software Engineer - Developer Relations",
      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      activeStep: 0,
      statusLabel: "Applied",
      appId: generatedId,
    };

    localStorage.setItem("application", JSON.stringify(newApp));
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    navigate("/applications");
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 1280, mx: "auto" }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate("/jobs")}
        sx={{ mb: 2, textTransform: "none" }}
      >
        Back to Jobs
      </Button>

      <Card sx={{ mb: 3, borderRadius: 2 }}>
        <CardContent sx={{ display: "flex", alignItems: "center", gap: 2, p: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: 52, height: 52, borderRadius: 2, bgcolor: "primary.main", color: "primary.contrastText" }}>
            <WorkOutlinedIcon />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              Software Engineer - Developer Relations
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Stripe India • Bengaluru, KA • Posted 2 days ago
            </Typography>
          </Box>
          <Chip label="Eligible" color="success" />
        </CardContent>
      </Card>

      <Grid container spacing={3}>

        <Grid item xs={12} md={8}>
          <Card sx={{ height: "100%", borderRadius: 2 }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                Job Specification
              </Typography>

              <Tabs
                value={tabIndex}
                onChange={handleTabChange}
                sx={{ mb: 1, borderBottom: 1, borderColor: "divider" }}
              >
                <Tab label="Job Description" />
                <Tab label="Eligibility Criteria" />
                <Tab label="About Company" />
              </Tabs>

              <CustomTabPanel value={tabIndex} index={0}>
                <Typography sx={{ fontWeight: 700, mb: 1 }}>
                  About Stripe
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                  Stripe is a financial infrastructure platform for businesses. Millions of companies—from the world’s largest enterprises to the most ambitious startups—use Stripe to accept payments, grow their revenue, and accelerate new business opportunities.
                </Typography>

                <Typography sx={{ fontWeight: 700, mt: 3, mb: 1 }}>
                  Responsibilities
                </Typography>
                <ul style={{ marginTop: 0, paddingLeft: 24, lineHeight: 1.8 }}>
                  <li>Build developer resources, tutorials, and documentation for API integrations.</li>
                  <li>Design high-volume distributed developer tooling and scalable API endpoints.</li>
                  <li>Advocate for developers internally and directly improve product user experience.</li>
                  <li>Engage with global developer communities through technical blogs and open-source releases.</li>
                </ul>
              </CustomTabPanel>

              <CustomTabPanel value={tabIndex} index={1}>
                <Typography sx={{ fontWeight: 700, mb: 1 }}>
                  Academic Requirements
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                  Must be enrolled in B.Tech / B.E. Computer Science, Information Technology, or related circuit branches with no active backlogs at the time of drive registration.
                </Typography>
              </CustomTabPanel>

              <CustomTabPanel value={tabIndex} index={2}>
                <Typography sx={{ fontWeight: 700, mb: 1 }}>
                  Global Operations
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                  Stripe operates in over 40 countries, handling hundreds of billions of dollars every year for forward-thinking businesses around the world.
                </Typography>
              </CustomTabPanel>

              <Box sx={{ mt: 3, p: 2, bgcolor: "action.hover", borderRadius: 2 }}>
                <Typography sx={{ fontWeight: 700, mb: 1 }}>
                  Your Eligibility Checklist
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                  <CheckCircleIcon color="success" />
                  <Typography variant="body2">
                    <strong>CGPA Requirement:</strong> Your CGPA 8.2 (Req: 7.5+)
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                  <CheckCircleIcon color="success" />
                  <Typography variant="body2">
                    <strong>No Active Backlogs:</strong> Verified (0 Active)
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CheckCircleIcon color="success" />
                  <Typography variant="body2">
                    <strong>Branch Eligibility:</strong> CSE, IT, ECE Eligible (Your branch: CSE)
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: "100%", borderRadius: 2 }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Application Panel
              </Typography>
              <Typography variant="caption" sx={{ display: "block", mb: 3, color: "text.secondary" }}>
                VERIFY YOUR PROFILE DETAILS BEFORE SUBMITTING
              </Typography>

              <Box sx={{ mb: 2 }}>
                <Typography variant="caption" sx={{ display: "block", fontWeight: 700 }}>FULL NAME</Typography>
                <Typography>Ananya Ghosal</Typography>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography variant="caption" sx={{ display: "block", fontWeight: 700 }}>EMAIL ADDRESS</Typography>
                <Typography>ananya.ghosal@university.edu</Typography>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography variant="caption" sx={{ display: "block", fontWeight: 700 }}>PHONE NUMBER</Typography>
                <Typography>+91 98765 43210</Typography>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography variant="caption" sx={{ display: "block", fontWeight: 700 }}>RESUME / CV ATTACHED</Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
                  <InsertDriveFileIcon color="primary" />
                  <Typography variant="body2">
                    Resume_Ananya_Ghosal_2024.pdf
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="caption" sx={{ display: "block", fontWeight: 700 }}>KEY SKILLS MATCHED</Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
                  <Chip label="Python" size="small" />
                  <Chip label="Data Structures" size="small" />
                  <Chip label="React.js" size="small" />
                  <Chip label="API Development" size="small" />
                </Box>
              </Box>

              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 1, py: 1.25, fontWeight: 700 }}
                onClick={handleApply}
              >
                Submit Application
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        PaperProps={{
          sx: { borderRadius: 2, maxWidth: 440 },
        }}
      >
        <IconButton
          onClick={handleCloseDialog}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{ p: 4, textAlign: "center" }}>
          <Box sx={{ display: "inline-flex", p: 1.5, borderRadius: "50%", bgcolor: "success.light", color: "success.main" }}>
            <CheckCircleIcon />
          </Box>

          <Typography variant="h6" sx={{ mt: 2, fontWeight: 700 }}>
            Application Submitted!
          </Typography>

          <Typography variant="body2" sx={{ mt: 1, color: "text.secondary" }}>
            Your profile has been shared with Stripe India. You will receive updates directly in your portal.
          </Typography>

          <Box sx={{ mt: 3, p: 2, bgcolor: "action.hover", borderRadius: 1 }}>
            <Typography variant="caption" sx={{ display: "block", fontWeight: 700 }}>APPLICATION REF ID</Typography>
            <Typography sx={{ fontWeight: 700 }}>{applicationId}</Typography>
          </Box>

          <Button
            variant="contained"
            fullWidth
            onClick={handleCloseDialog}
            sx={{ mt: 3, py: 1.25, fontWeight: 700 }}
          >
            Done
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
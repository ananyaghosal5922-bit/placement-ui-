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
import "./JobDetails.css";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box className="tab-panel-content">{children}</Box>}
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
    <Box className="job-details-container">
      {/* Back Button */}
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate("/jobs")}
        className="back-to-jobs-btn"
      >
        Back to Jobs
      </Button>

      {/* Main Company / Role Banner Header */}
      <Card className="header-banner-card">
        <CardContent className="header-banner-content">
          <Box className="company-icon-box">
            <WorkOutlinedIcon className="brand-work-icon" />
          </Box>
          <Box className="header-text-details">
            <Typography variant="h5" className="role-heading">
              Software Engineer - Developer Relations
            </Typography>
            <Typography variant="body2" className="company-sub-line">
              Stripe India • Bengaluru, KA • Posted 2 days ago
            </Typography>
          </Box>
          <Chip label="Eligible" className="eligible-status-chip" />
        </CardContent>
      </Card>

      {/* Two Column Section */}
      <Grid container spacing={3} className="details-grid-wrapper">
        {/* Left Column: Job Specification & Eligibility */}
        <Grid item xs={12} md={8}>
          <Card className="spec-card-container">
            <CardContent className="card-content-padding">
              <Typography variant="h6" className="spec-main-title">
                Job Specification
              </Typography>

              <Tabs
                value={tabIndex}
                onChange={handleTabChange}
                className="spec-navigation-tabs"
              >
                <Tab label="Job Description" className="tab-item-btn" />
                <Tab label="Eligibility Criteria" className="tab-item-btn" />
                <Tab label="About Company" className="tab-item-btn" />
              </Tabs>

              {/* Tab 1: Description */}
              <CustomTabPanel value={tabIndex} index={0}>
                <Typography className="section-block-title">
                  About Stripe
                </Typography>
                <Typography variant="body2" className="body-description-text">
                  Stripe is a financial infrastructure platform for businesses. Millions of companies—from the world’s largest enterprises to the most ambitious startups—use Stripe to accept payments, grow their revenue, and accelerate new business opportunities.
                </Typography>

                <Typography className="section-block-title section-spacing-top">
                  Responsibilities
                </Typography>
                <ul className="responsibilities-list">
                  <li>Build developer resources, tutorials, and documentation for API integrations.</li>
                  <li>Design high-volume distributed developer tooling and scalable API endpoints.</li>
                  <li>Advocate for developers internally and directly improve product user experience.</li>
                  <li>Engage with global developer communities through technical blogs and open-source releases.</li>
                </ul>
              </CustomTabPanel>

              {/* Tab 2: Eligibility */}
              <CustomTabPanel value={tabIndex} index={1}>
                <Typography className="section-block-title">
                  Academic Requirements
                </Typography>
                <Typography variant="body2" className="body-description-text">
                  Must be enrolled in B.Tech / B.E. Computer Science, Information Technology, or related circuit branches with no active backlogs at the time of drive registration.
                </Typography>
              </CustomTabPanel>

              {/* Tab 3: About Company */}
              <CustomTabPanel value={tabIndex} index={2}>
                <Typography className="section-block-title">
                  Global Operations
                </Typography>
                <Typography variant="body2" className="body-description-text">
                  Stripe operates in over 40 countries, handling hundreds of billions of dollars every year for forward-thinking businesses around the world.
                </Typography>
              </CustomTabPanel>

              {/* Your Eligibility Checklist Card */}
              <Box className="eligibility-checklist-card">
                <Typography className="checklist-card-title">
                  Your Eligibility Checklist
                </Typography>

                <Box className="checklist-row">
                  <CheckCircleIcon className="check-icon-green" />
                  <Typography variant="body2" className="checklist-label-text">
                    <strong>CGPA Requirement:</strong> Your CGPA 8.2 (Req: 7.5+)
                  </Typography>
                </Box>

                <Box className="checklist-row">
                  <CheckCircleIcon className="check-icon-green" />
                  <Typography variant="body2" className="checklist-label-text">
                    <strong>No Active Backlogs:</strong> Verified (0 Active)
                  </Typography>
                </Box>

                <Box className="checklist-row">
                  <CheckCircleIcon className="check-icon-green" />
                  <Typography variant="body2" className="checklist-label-text">
                    <strong>Branch Eligibility:</strong> CSE, IT, ECE Eligible (Your branch: CSE)
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Column: Application Panel */}
        <Grid item xs={12} md={4}>
          <Card className="app-panel-card-container">
            <CardContent className="card-content-padding">
              <Typography variant="h6" className="app-panel-title">
                Application Panel
              </Typography>
              <Typography variant="caption" className="app-panel-subtitle">
                VERIFY YOUR PROFILE DETAILS BEFORE SUBMITTING
              </Typography>

              <Box className="panel-field-group">
                <Typography className="panel-field-label">FULL NAME</Typography>
                <Typography className="panel-field-value"> Ananya Ghosal</Typography>
              </Box>

              <Box className="panel-field-group">
                <Typography className="panel-field-label">EMAIL ADDRESS</Typography>
                <Typography className="panel-field-value">ananya.ghosal@university.edu</Typography>
              </Box>

              <Box className="panel-field-group">
                <Typography className="panel-field-label">PHONE NUMBER</Typography>
                <Typography className="panel-field-value">+91 98765 43210</Typography>
              </Box>

              <Box className="panel-field-group">
                <Typography className="panel-field-label">RESUME / CV ATTACHED</Typography>
                <Box className="resume-badge-box">
                  <InsertDriveFileIcon className="resume-file-icon" />
                  <Typography className="resume-file-name">
                    Resume_Ananya_Ghosal_2024.pdf
                  </Typography>
                </Box>
              </Box>

              <Box className="panel-field-group">
                <Typography className="panel-field-label">KEY SKILLS MATCHED</Typography>
                <Box className="skills-chip-wrapper">
                  <Chip label="Python" size="small" className="skill-chip" />
                  <Chip label="Data Structures" size="small" className="skill-chip" />
                  <Chip label="React.js" size="small" className="skill-chip" />
                  <Chip label="API Development" size="small" className="skill-chip" />
                </Box>
              </Box>

              <Button
                variant="contained"
                fullWidth
                className="submit-application-btn"
                onClick={handleApply}
              >
                Submit Application
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Modal Popup: Application Submitted */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        className="submission-dialog-container"
        PaperProps={{
          className: "dialog-paper-custom",
        }}
      >
        <IconButton
          onClick={handleCloseDialog}
          className="dialog-close-icon-btn"
        >
          <CloseIcon />
        </IconButton>
        <DialogContent className="dialog-inner-content">
          <Box className="modal-success-icon-circle">
            <CheckCircleIcon className="modal-check-mark" />
          </Box>

          <Typography variant="h6" className="modal-title-text">
            Application Submitted!
          </Typography>

          <Typography variant="body2" className="modal-body-subtext">
            Your profile has been shared with Stripe India. You will receive updates directly in your portal.
          </Typography>

          <Box className="app-ref-box">
            <Typography className="ref-box-label">APPLICATION REF ID</Typography>
            <Typography className="ref-box-id">{applicationId}</Typography>
          </Box>

          <Button
            variant="contained"
            fullWidth
            onClick={handleCloseDialog}
            className="dialog-done-action-btn"
          >
            Done
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
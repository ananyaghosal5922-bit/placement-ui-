import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";

import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import "./JobDetails.css";

function JobDetails() {
  return (
    <Box className="job-details-page">

<Typography className="job-details-heading">
Job Specification
</Typography>

<Card className="job-details-card">
<CardContent>

    <Box className="job-details-header">
    <WorkIcon className="job-details-icon" />

    <Box>
        <Typography className="job-details-title">
Software Developer
</Typography>

<Typography className="job-details-company">
ABC Technologies
</Typography>
</Box>
</Box>

<Box className="job-details-info">
    <Box className="job-info-item">
        <LocationOnIcon />
        <Typography>Kolkata</Typography>
    </Box>

    <Box className="job-info-item">
        <AttachMoneyIcon />
        <Typography>6 LPA</Typography>
    </Box>
    </Box>

    <Typography className="job-section-title">
    Job Description
    </Typography>

    <Typography className="job-description">
    We are looking for a Software Developer to join our
    team. The candidate will work on developing and
    maintaining software applications.
    </Typography>

<Typography className="job-section-title">
    Responsibilities
    </Typography>

    <Typography className="job-description">
    • Develop software applications
    <br />
    • Fix bugs and improve existing features
    <br />
    • Work with the development team
    </Typography>

    <Button variant="contained" className="apply-button">
    Apply Now
    </Button>

</CardContent>
</Card>

    </Box>
  );
}

export default JobDetails;
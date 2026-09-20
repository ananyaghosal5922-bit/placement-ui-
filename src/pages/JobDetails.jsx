import { useState } from "react";

import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stepper,
  Step,
  StepLabel,
  TextField,
} from "@mui/material";

import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import "./JobDetails.css";

const steps = ["Personal Details", "Education", "Confirmation"];

function JobDetails() {
  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  phone: "",
  college: "",
  degree: "",
  cgpa: "",
});

  const handleOpen = () => {
    console.log("Apply Now clicked");
    setOpen(true);
    setActiveStep(0);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
  localStorage.setItem(
    "application",
    JSON.stringify({
      applicant: formData.fullName,
      job: "Software Developer",
      status: "Applied",
      email: formData.email,
      phone: formData.phone,
      college: formData.college,
      degree: formData.degree,
      cgpa: formData.cgpa,
    })
  );

  setOpen(false);
};

  const handleChange = (event) => {
  setFormData({
    ...formData,
    [event.target.name]: event.target.value,
  });
};

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

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

  <Button
    variant="contained"
    className="apply-button"
    onClick={handleOpen}
  >
    Apply Now
  </Button>

</CardContent>
</Card>

<Dialog
open={open}
onClose={handleClose}
fullWidth
maxWidth="sm"
>
<DialogTitle>
  Apply for Software Developer
</DialogTitle>

<DialogContent>

<Stepper activeStep={activeStep} className="application-stepper">
  {steps.map((label) => (
    <Step key={label}>
      <StepLabel>{label}</StepLabel>
    </Step>
  ))}
</Stepper>

{activeStep === 0 && (
<Box className="application-form">
  <TextField
  label="Full Name"
  name="fullName"
  value={formData.fullName}
  onChange={handleChange}
  fullWidth
/>
<TextField
  label="Email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  fullWidth
/>

  <TextField
  label="Phone Number"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  fullWidth
/>
</Box>
)}

      {activeStep === 1 && (
<Box className="application-form">
 <TextField
  label="College Name"
  name="college"
  value={formData.college}
  onChange={handleChange}
  fullWidth
/>

  <TextField
  label="Degree"
  name="degree"
  value={formData.degree}
  onChange={handleChange}
  fullWidth
/>

<TextField
  label="CGPA"
  name="cgpa"
  value={formData.cgpa}
  onChange={handleChange}
  fullWidth
/>
</Box>
)}

{activeStep === 2 && (
  <Box className="confirmation-content">

    <Typography variant="h6">
      Review Your Details
    </Typography>

    <Typography>
      <strong>Name:</strong> {formData.fullName}
    </Typography>

    <Typography>
      <strong>Email:</strong> {formData.email}
    </Typography>

    <Typography>
      <strong>Phone:</strong> {formData.phone}
    </Typography>

    <Typography>
      <strong>College:</strong> {formData.college}
    </Typography>

    <Typography>
      <strong>Degree:</strong> {formData.degree}
    </Typography>

    <Typography>
      <strong>CGPA:</strong> {formData.cgpa}
    </Typography>

  </Box>
)}

</DialogContent>

<DialogActions>

  {activeStep > 0 && (
    <Button onClick={handleBack}>
      Back
    </Button>
  )}

  {activeStep < steps.length - 1 ? (
    <Button
      variant="contained"
      onClick={handleNext}
    >
      Next
    </Button>
  ) : (
    <Button
  variant="contained"
  onClick={handleSubmit}
>
  Submit Application
</Button>
  )}

</DialogActions>
</Dialog>

</Box>
);
}

export default JobDetails;
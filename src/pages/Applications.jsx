import { useEffect, useState } from "react";

import {
  Box,
  Typography,
  Card,
  CardContent,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Select,
  MenuItem,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";

import "./Applications.css";

const steps = [
  "Applied",
  "Under Review",
  "Shortlisted",
  "Selected",
];

function Applications() {

const [application, setApplication] = useState(null);

  useEffect(() => {
    const savedApplication = localStorage.getItem("application");

    if (savedApplication) {
      setApplication(JSON.parse(savedApplication));
    }
  }, []);
  return (
    <Box className="applications-page">

      <Typography className="applications-heading">
Applications Tracker
</Typography>

<Card className="applications-card">
<CardContent>

<TableContainer>
<Table>
<TableHead>
<TableRow>
    <TableCell>Applicant</TableCell>
    <TableCell>Job</TableCell>
    <TableCell>Application Status</TableCell>
</TableRow>
</TableHead>

<TableBody>
<TableRow>

<TableCell>
<Box className="applicant-cell">
    <PersonIcon />
    <Typography>
     {application?.applicant || "No Application"}
            </Typography>
    </Box>
    </TableCell>

    <TableCell>
    <Box className="job-cell">
        <WorkIcon />
        <Typography>
       {application?.job || "No Application"}
        </Typography>
    </Box>
    </TableCell>

    <TableCell>
    <Select
  value={application?.status || "Applied"}
  size="small"
  onChange={(event) => {
    const updatedApplication = {
      ...application,
      status: event.target.value,
    };

    setApplication(updatedApplication);

    localStorage.setItem(
      "application",
      JSON.stringify(updatedApplication)
    );
  }}
>
    <MenuItem value="Applied">
    Applied
    </MenuItem>

    <MenuItem value="Under Review">
    Under Review
    </MenuItem>

    <MenuItem value="Shortlisted">
    Shortlisted
    </MenuItem>

    <MenuItem value="Selected">
    Selected
    </MenuItem>
</Select>
        </TableCell>

    </TableRow>
    </TableBody>
</Table>
          </TableContainer>

    <Typography className="status-heading">
    Application Progress
    </Typography>

   <Stepper
  activeStep={steps.indexOf(application?.status || "Applied")}
>
    {steps.map((step) => (
        <Step key={step}>
        <StepLabel>
            {step}
        </StepLabel>
        </Step>
    ))}
    </Stepper>

</CardContent>
</Card>

</Box>
);
}

export default Applications;
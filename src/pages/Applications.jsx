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
                        Ananya Ghosal
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell>
                    <Box className="job-cell">
                      <WorkIcon />
                      <Typography>
                        Software Developer
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell>
                    <Select
                      defaultValue="Under Review"
                      size="small"
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

          <Stepper activeStep={1}>
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
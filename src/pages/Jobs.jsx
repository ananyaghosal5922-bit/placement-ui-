import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
} from "@mui/material";

import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import "./Jobs.css";

function Jobs() {
  return (
    <Box className="jobs-page">

      <Typography className="jobs-heading">
        Explore Placement Jobs
      </Typography>

      <TextField
        className="jobs-search"
        label="Search jobs"
        placeholder="Search by company or role"
        fullWidth
      />

      <Box className="jobs-list">

        <Card className="job-card">
          <CardContent>

            <WorkIcon className="job-icon" />

            <Typography className="job-title">
              Software Developer
            </Typography>

            <Typography className="job-company">
              ABC Technologies
            </Typography>

            <Box className="job-location">
              <LocationOnIcon />
              <Typography>
                Kolkata
              </Typography>
            </Box>

            <Button variant="contained">
              View Details
            </Button>

          </CardContent>
        </Card>

        <Card className="job-card">
          <CardContent>

            <WorkIcon className="job-icon" />

            <Typography className="job-title">
              React Developer
            </Typography>

            <Typography className="job-company">
              XYZ Solutions
            </Typography>

            <Box className="job-location">
              <LocationOnIcon />
              <Typography>
                Bengaluru
              </Typography>
            </Box>

            <Button variant="contained">
              View Details
            </Button>

          </CardContent>
        </Card>

      </Box>

    </Box>
  );
}

export default Jobs;
import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  InputAdornment,
  Chip,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useNavigate } from "react-router-dom";
import "./Jobs.css";

export default function Jobs() {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate("/job-details");
  };

  return (
    <Box className="jobs-page-wrapper">
      {/* Top Header */}
      <Box className="jobs-top-header">
        <Typography variant="h5" className="page-heading">
          Explore Placement Jobs
        </Typography>
      </Box>

      {/* Non Technical Section */}
      <Typography variant="h6" className="section-title">
        Eligible Jobs (Non Technical)
      </Typography>
      <Typography variant="body2" className="section-subtitle">
        Based on your skills and practice assessment performance
      </Typography>

      <Grid container spacing={2.5} className="grid-margin-bottom">
        <Grid item xs={12} md={6}>
          <Card className="job-card non-tech-border">
            <CardContent className="card-padding">
              <Box className="card-top-row">
                <Box>
                  <Typography className="job-title-text">Consultant</Typography>
                  <Typography className="job-company-text">NVIDIA</Typography>
                </Box>
                <Chip label="Closing Soon" className="closing-chip" size="small" />
              </Box>

              <Typography className="match-info-text">
                Based on Python &amp; C++ assessment match
              </Typography>

              <Box className="card-bottom-row">
                <Typography className="pay-range-text">5-10 LPA</Typography>
                <Button
                  variant="contained"
                  className="apply-primary-btn"
                  onClick={handleApplyClick}
                >
                  Apply Now
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card className="job-card non-tech-border">
            <CardContent className="card-padding">
              <Box className="card-top-row">
                <Box>
                  <Typography className="job-title-text">Customer Support</Typography>
                  <Typography className="job-company-text">Salesforce</Typography>
                </Box>
                <Chip label="Eligible" className="eligible-chip" size="small" />
              </Box>

              <Typography className="match-info-text">
                Matches CGPA &amp; Skills
              </Typography>

              <Box className="card-bottom-row">
                <Typography className="pay-range-text">7-10 LPA</Typography>
                <Button
                  variant="contained"
                  className="apply-primary-btn"
                  onClick={handleApplyClick}
                >
                  Apply Now
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Search and Filters Bar */}
      <Box className="search-bar-wrapper">
        <TextField
          placeholder="Search companies, job titles, or tech stacks..."
          variant="outlined"
          size="small"
          className="search-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon className="search-icon" />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="outlined"
          startIcon={<FilterListIcon />}
          className="filter-outline-btn"
        >
          Filters
        </Button>
        <Button variant="contained" className="search-solid-btn">
          Search
        </Button>
      </Box>

      {/* Technical Section */}
      <Typography variant="h6" className="section-title">
        Eligible Jobs (Technical)
      </Typography>

      <Grid container spacing={2.5}>
        {[
          {
            title: "Software Engineer",
            company: "Google • Hybrid",
            deadline: "20 Oct",
            openings: "5 positions",
            pay: "32-36 LPA",
          },
          {
            title: "Data Scientist",
            company: "Meta • On-site",
            deadline: "25 Oct",
            openings: "2 positions",
            pay: "28-32 LPA",
          },
          {
            title: "SDE-1",
            company: "Flipkart • Remote",
            deadline: "18 Oct",
            openings: "12 positions",
            pay: "14-16 LPA",
          },
          {
            title: "Product Engineer",
            company: "Atlassian • Remote",
            deadline: "19 Oct",
            openings: "4 positions",
            pay: "22-26 LPA",
          },
        ].map((job, idx) => (
          <Grid item xs={12} md={6} key={idx}>
            <Card className="job-card">
              <CardContent className="card-padding">
                <Box className="card-top-row">
                  <Box>
                    <Typography className="job-title-text">{job.title}</Typography>
                    <Typography className="job-company-text">{job.company}</Typography>
                  </Box>
                  <Chip label="Eligible" className="eligible-chip" size="small" />
                </Box>

                <Box className="meta-info-container">
                  <Box>
                    <Typography className="meta-label">DEADLINE</Typography>
                    <Typography className="meta-value">{job.deadline}</Typography>
                  </Box>
                  <Box>
                    <Typography className="meta-label">OPENINGS</Typography>
                    <Typography className="meta-value">{job.openings}</Typography>
                  </Box>
                </Box>

                <Box className="card-bottom-row">
                  <Typography className="pay-range-text">{job.pay}</Typography>
                  <Button
                    variant="contained"
                    className="apply-primary-btn"
                    onClick={handleApplyClick}
                  >
                    Apply Now
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
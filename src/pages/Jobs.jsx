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

export default function Jobs() {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate("/job-details");
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, backgroundColor: "#f8fafc", minHeight: "100vh" }}>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, color: "#172033" }}>
          Explore Placement Jobs
        </Typography>
      </Box>


      <Typography variant="h6" sx={{ mt: 2, fontWeight: 700, color: "#172033" }}>
        Eligible Jobs (Non Technical)
      </Typography>
      <Typography variant="body2" sx={{ mt: 0.5, mb: 2, color: "#64748b" }}>
        Based on your skills and practice assessment performance
      </Typography>

      <Grid container spacing={2.5} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: "100%", border: "1px solid #e2e8f0", borderLeft: "4px solid #f59e0b", borderRadius: 2, boxShadow: "0 2px 8px rgba(15,23,42,.06)" }}>
            <CardContent sx={{ p: 2.5, "&:last-child": { pb: 2.5 } }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 2 }}>
                <Box>
                  <Typography sx={{ fontWeight: 700, color: "#172033" }}>Consultant</Typography>
                  <Typography sx={{ color: "#64748b", mt: .5 }}>NVIDIA</Typography>
                </Box>
                <Chip label="Closing Soon" size="small" sx={{ color: "#b45309", backgroundColor: "#fef3c7", fontWeight: 600 }} />
              </Box>

              <Typography sx={{ color: "#64748b", fontSize: ".875rem", my: 2 }}>
                Based on Python &amp; C++ assessment match
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography sx={{ fontWeight: 700, color: "#172033" }}>5-10 LPA</Typography>
                <Button
                  variant="contained"
                  sx={{ textTransform: "none", borderRadius: 1.5, backgroundColor: "#2563eb" }}
                  onClick={handleApplyClick}
                >
                  Apply Now
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: "100%", border: "1px solid #e2e8f0", borderLeft: "4px solid #f59e0b", borderRadius: 2, boxShadow: "0 2px 8px rgba(15,23,42,.06)" }}>
            <CardContent sx={{ p: 2.5, "&:last-child": { pb: 2.5 } }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 2 }}>
                <Box>
                  <Typography sx={{ fontWeight: 700, color: "#172033" }}>Customer Support</Typography>
                  <Typography sx={{ color: "#64748b", mt: .5 }}>Salesforce</Typography>
                </Box>
                <Chip label="Eligible" size="small" sx={{ color: "#15803d", backgroundColor: "#dcfce7", fontWeight: 600 }} />
              </Box>

              <Typography sx={{ color: "#64748b", fontSize: ".875rem", my: 2 }}>
                Matches CGPA &amp; Skills
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography sx={{ fontWeight: 700, color: "#172033" }}>7-10 LPA</Typography>
                <Button
                  variant="contained"
                  sx={{ textTransform: "none", borderRadius: 1.5, backgroundColor: "#2563eb" }}
                  onClick={handleApplyClick}
                >
                  Apply Now
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>


      <Box sx={{ display: "flex", gap: 1.5, alignItems: "center", my: 4, flexWrap: "wrap" }}>
        <TextField
          placeholder="Search companies, job titles, or tech stacks..."
          variant="outlined"
          size="small"
          sx={{ flex: 1, minWidth: 260 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#64748b" }} />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="outlined"
          startIcon={<FilterListIcon />}
          sx={{ textTransform: "none", borderColor: "#cbd5e1", color: "#334155" }}
        >
          Filters
        </Button>
        <Button variant="contained" sx={{ textTransform: "none", backgroundColor: "#2563eb" }}>
          Search
        </Button>
      </Box>


      <Typography variant="h6" sx={{ mt: 2, mb: 2, fontWeight: 700, color: "#172033" }}>
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
            <Card sx={{ height: "100%", border: "1px solid #e2e8f0", borderRadius: 2, boxShadow: "0 2px 8px rgba(15,23,42,.06)" }}>
              <CardContent sx={{ p: 2.5, "&:last-child": { pb: 2.5 } }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 2 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 700, color: "#172033" }}>{job.title}</Typography>
                    <Typography sx={{ color: "#64748b", mt: .5 }}>{job.company}</Typography>
                  </Box>
                  <Chip label="Eligible" size="small" sx={{ color: "#15803d", backgroundColor: "#dcfce7", fontWeight: 600 }} />
                </Box>

                <Box sx={{ display: "flex", gap: 6, my: 2 }}>
                  <Box>
                    <Typography sx={{ color: "#94a3b8", fontSize: ".7rem", fontWeight: 700 }}>DEADLINE</Typography>
                    <Typography sx={{ color: "#334155" }}>{job.deadline}</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: "#94a3b8", fontSize: ".7rem", fontWeight: 700 }}>OPENINGS</Typography>
                    <Typography sx={{ color: "#334155" }}>{job.openings}</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Typography sx={{ fontWeight: 700, color: "#172033" }}>{job.pay}</Typography>
                  <Button
                    variant="contained"
                    sx={{ textTransform: "none", borderRadius: 1.5, backgroundColor: "#2563eb" }}
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
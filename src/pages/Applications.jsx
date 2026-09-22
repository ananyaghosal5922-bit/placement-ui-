import React, { useState, useEffect } from "react";
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
  Grid,
  TextField,
  InputAdornment,
  Chip,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import WorkOutlineIcon from "@mui/icons-material/WorkOutlined";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const steps = ["Applied", "Shortlisted", "Interview", "Selected"];

const mockApplications = [
  {
    company: "Amazon",
    title: "Software Development Engineer",
    date: "14 Oct 2024",
    activeStep: 0,
    statusLabel: "Applied",
    appId: "APP-2024-8842",
  },
  {
    company: "Atlassian",
    title: "Product Engineer",
    date: "12 Oct 2024",
    activeStep: 1,
    statusLabel: "Shortlisted",
    appId: "APP-2024-5102",
  },
  {
    company: "Google India",
    title: "Developer Relations SDE",
    date: "10 Oct 2024",
    activeStep: 2,
    statusLabel: "Interview Scheduled",
    appId: "APP-2024-9941",
  },
];

export default function Applications() {
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [applications, setApplications] = useState(mockApplications);

  // Sync newly submitted applications from Job Details page via localStorage
  useEffect(() => {
    const savedApp = localStorage.getItem("application");
    if (savedApp) {
      const parsed = JSON.parse(savedApp);
      setApplications((prev) => {
        if (prev.some((item) => item.appId === parsed.appId)) return prev;
        return [parsed, ...prev];
      });
    }
  }, []);

  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "All" ||
      app.statusLabel.toLowerCase().includes(statusFilter.toLowerCase());
    return matchesSearch && matchesStatus;
  });

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        minHeight: "100vh",
        maxHeight: "100vh",
        overflowY: "auto",
        boxSizing: "border-box",
        p: { xs: 2, md: 3 },
        display: "flex",
        flexDirection: "column",
        gap: 2,
        bgcolor: "#f8fafc",
      }}
    > {/* Top Header */}
      <Typography variant="h5" sx={{ fontWeight: 700, color: "#0f172a" }}>
        Applications Tracker
      </Typography>

      {/* 4 Summary Metric Cards */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ borderRadius: 3, border: "1px solid #e2e8f0", boxShadow: "none" }}>
            <CardContent sx={{ p: 2.5 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="body2" sx={{ color: "#64748b", fontWeight: 600 }}>
                  Total Applied
                </Typography>
                <Box sx={{ p: 1, borderRadius: 2, bgcolor: "#eef2ff", display: "flex" }}>
                  <WorkOutlineIcon sx={{ color: "#4f46e5" }} />
                </Box>
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 700, mt: 1, color: "#0f172a" }}>
                14
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ borderRadius: 3, border: "1px solid #e2e8f0", boxShadow: "none" }}>
            <CardContent sx={{ p: 2.5 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="body2" sx={{ color: "#64748b", fontWeight: 600 }}>
                  In Progress
                </Typography>
                <Box sx={{ p: 1, borderRadius: 2, bgcolor: "#fef3c7", display: "flex" }}>
                  <AutoAwesomeIcon sx={{ color: "#d97706" }} />
                </Box>
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 700, mt: 1, color: "#0f172a" }}>
                3
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ borderRadius: 3, border: "1px solid #e2e8f0", boxShadow: "none" }}>
            <CardContent sx={{ p: 2.5 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="body2" sx={{ color: "#64748b", fontWeight: 600 }}>
                  Selected
                </Typography>
                <Box sx={{ p: 1, borderRadius: 2, bgcolor: "#d1fae5", display: "flex" }}>
                  <CheckCircleOutlineIcon sx={{ color: "#059669" }} />
                </Box>
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 700, mt: 1, color: "#0f172a" }}>
                1
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ borderRadius: 3, border: "1px solid #e2e8f0", boxShadow: "none" }}>
            <CardContent sx={{ p: 2.5 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="body2" sx={{ color: "#64748b", fontWeight: 600 }}>
                  Rejected
                </Typography>
                <Box sx={{ p: 1, borderRadius: 2, bgcolor: "#fee2e2", display: "flex" }}>
                  <CancelOutlinedIcon sx={{ color: "#dc2626" }} />
                </Box>
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 700, mt: 1, color: "#0f172a" }}>
                1
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Filter and Search Bar Controls */}
      <Box
        sx={{
          display: "flex",
          gap: 1.5,
          bgcolor: "#ffffff",
          p: 1.5,
          borderRadius: 3,
          border: "1px solid #e2e8f0",
          alignItems: "center",
        }}
      >
        <TextField
          placeholder="Search by company, title, or skills..."
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            flexGrow: 1,
            bgcolor: "#f8fafc",
            "& .MuiOutlinedInput-root": { borderRadius: 2 },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#94a3b8" }} />
              </InputAdornment>
            ),
          }}
        />

        <Select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          size="small"
          sx={{
            minWidth: 140,
            bgcolor: "#f8fafc",
            borderRadius: 2,
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          <MenuItem value="All">Status: All</MenuItem>
          <MenuItem value="Applied">Applied</MenuItem>
          <MenuItem value="Shortlisted">Shortlisted</MenuItem>
          <MenuItem value="Interview">Interview</MenuItem>
        </Select>

        <Select
          defaultValue="All"
          size="small"
          sx={{
            minWidth: 140,
            bgcolor: "#f8fafc",
            borderRadius: 2,
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          <MenuItem value="All">Date Range</MenuItem>
          <MenuItem value="7">Last 7 Days</MenuItem>
          <MenuItem value="30">Last 30 Days</MenuItem>
        </Select>
      </Box>

      {/* Active Submissions Table Card */}
      <Card sx={{ borderRadius: 3, border: "1px solid #e2e8f0", boxShadow: "none" }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#0f172a" }}>
            Active Submissions
          </Typography>

          <TableContainer sx={{ maxHeight: "calc(100vh - 360px)", overflowY: "auto" }}>
            <Table>
              <TableHead sx={{ bgcolor: "#f8fafc" }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, color: "#64748b", fontSize: 11, letterSpacing: 0.5 }}>
                    COMPANY
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, color: "#64748b", fontSize: 11, letterSpacing: 0.5 }}>
                    JOB TITLE
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, color: "#64748b", fontSize: 11, letterSpacing: 0.5 }}>
                    APPLIED DATE
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, color: "#64748b", fontSize: 11, letterSpacing: 0.5 }}>
                    STATUS
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, color: "#64748b", fontSize: 11, letterSpacing: 0.5 }}>
                    ACTION
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredApplications.map((row, idx) => (
                  <React.Fragment key={idx}>
                    {/* Primary Row */}
                    <TableRow sx={{ "& td": { borderBottom: "none", pt: 2.5 } }}>
                      <TableCell>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                          <Box sx={{ bgcolor: "#eef2ff", p: 0.75, borderRadius: 2, display: "flex" }}>
                            <WorkOutlineIcon sx={{ color: "#4f46e5", fontSize: 20 }} />
                          </Box>
                          <Typography sx={{ fontWeight: 700, color: "#0f172a", fontSize: 14 }}>
                            {row.company}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell sx={{ color: "#334155", fontSize: 14 }}>{row.title}</TableCell>
                      <TableCell sx={{ color: "#64748b", fontSize: 14 }}>{row.date}</TableCell>
                      <TableCell>
                        <Chip
                          label={row.statusLabel}
                          size="small"
                          sx={{
                            fontWeight: 600,
                            borderRadius: 1.5,
                            bgcolor:
                              row.activeStep === 0
                                ? "#f1f5f9"
                                : row.activeStep === 1
                                  ? "#e0f2fe"
                                  : "#fef3c7",
                            color:
                              row.activeStep === 0
                                ? "#475569"
                                : row.activeStep === 1
                                  ? "#0369a1"
                                  : "#b45309",
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <Button
                          size="small"
                          endIcon={<ArrowForwardIcon />}
                          sx={{ textTransform: "none", color: "#4f46e5", fontWeight: 600 }}
                        >
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>

                    {/* Stepper Process Row */}
                    <TableRow sx={{ "& td": { pb: 3, borderBottom: "1px solid #e2e8f0" } }}>
                      <TableCell colSpan={5}>
                        <Box sx={{ px: 2, py: 1, bgcolor: "#ffffff" }}>
                          <Stepper
                            activeStep={row.activeStep}
                            alternativeLabel
                            sx={{
                              "& .MuiStepIcon-root.Mui-active": { color: "#4f46e5" },
                              "& .MuiStepIcon-root.Mui-completed": { color: "#4f46e5" },
                              "& .MuiStepLabel-label": { fontSize: 11, fontWeight: 600 },
                            }}
                          >
                            {steps.map((label) => (
                              <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                              </Step>
                            ))}
                          </Stepper>
                        </Box>
                      </TableCell>
                    </TableRow>
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
}
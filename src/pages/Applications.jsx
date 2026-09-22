import React, { useState } from "react";
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
  Button
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const steps = ["Applied", "Shortlisted", "Interview", "Selected"];

const mockApplications = [
  { company: "Amazon", title: "Software Development Engineer", date: "14 Oct 2024", activeStep: 0, statusLabel: "Applied" },
  { company: "Atlassian", title: "Product Engineer", date: "12 Oct 2024", activeStep: 1, statusLabel: "Shortlisted" },
  { company: "Google India", title: "Developer Relations SDE", date: "10 Oct 2024", activeStep: 2, statusLabel: "Interview Scheduled" },
];

export default function Applications() {
  const [statusFilter, setStatusFilter] = useState("All");

  return (
    <Box sx={{ p: 3, backgroundColor: "#f8fafc", minHeight: "100%" }}>
      <Typography sx={{ mb: 3, fontWeight: 700 }} variant="h5">
        Applications Tracker
      </Typography>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%", borderRadius: 2, boxShadow: "0 1px 3px rgba(15, 23, 42, 0.08)" }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Typography variant="body2" color="text.secondary">Total Applied</Typography>
                <Box sx={{ p: 1, borderRadius: 1.5, backgroundColor: "#ede9fe" }}><WorkOutlineIcon color="primary" /></Box>
              </Box>
              <Typography variant="h4" sx={{ mt: 1.5, fontWeight: 700 }}>14</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%", borderRadius: 2, boxShadow: "0 1px 3px rgba(15, 23, 42, 0.08)" }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Typography variant="body2" color="text.secondary">In Progress</Typography>
                <Box sx={{ p: 1, borderRadius: 1.5, backgroundColor: "#fef3c7" }}><AutoAwesomeIcon sx={{ color: '#D97706' }} /></Box>
              </Box>
              <Typography variant="h4" sx={{ mt: 1.5, fontWeight: 700 }}>3</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%", borderRadius: 2, boxShadow: "0 1px 3px rgba(15, 23, 42, 0.08)" }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Typography variant="body2" color="text.secondary">Selected</Typography>
                <Box sx={{ p: 1, borderRadius: 1.5, backgroundColor: "#d1fae5" }}><CheckCircleOutlineIcon sx={{ color: '#059669' }} /></Box>
              </Box>
              <Typography variant="h4" sx={{ mt: 1.5, fontWeight: 700 }}>1</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%", borderRadius: 2, boxShadow: "0 1px 3px rgba(15, 23, 42, 0.08)" }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Typography variant="body2" color="text.secondary">Rejected</Typography>
                <Box sx={{ p: 1, borderRadius: 1.5, backgroundColor: "#fee2e2" }}><CancelOutlinedIcon sx={{ color: '#DC2626' }} /></Box>
              </Box>
              <Typography variant="h4" sx={{ mt: 1.5, fontWeight: 700 }}>1</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
        <TextField
          placeholder="Search by company, title, or skills..."
          variant="outlined"
          size="small"
          sx={{ flex: 1, minWidth: 260 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
        <Select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          size="small"
          sx={{ minWidth: 150 }}
        >
          <MenuItem value="All">Status: All</MenuItem>
          <MenuItem value="Applied">Applied</MenuItem>
          <MenuItem value="Shortlisted">Shortlisted</MenuItem>
          <MenuItem value="Selected">Selected</MenuItem>
        </Select>
        <Select defaultValue="All" size="small" sx={{ minWidth: 150 }}>
          <MenuItem value="All">Date Range</MenuItem>
          <MenuItem value="7">Last 7 Days</MenuItem>
          <MenuItem value="30">Last 30 Days</MenuItem>
        </Select>
      </Box>

      <Card sx={{ borderRadius: 2, boxShadow: "0 1px 3px rgba(15, 23, 42, 0.08)" }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
            Active Submissions
          </Typography>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f8fafc" }}>
                  <TableCell>COMPANY</TableCell>
                  <TableCell>JOB TITLE</TableCell>
                  <TableCell>APPLIED DATE</TableCell>
                  <TableCell>STATUS</TableCell>
                  <TableCell>ACTION</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mockApplications.map((row, idx) => (
                  <React.Fragment key={idx}>
                    <TableRow>
                      <TableCell sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                        <Box sx={{ p: 0.75, borderRadius: 1, backgroundColor: "#ede9fe", display: "flex" }}><WorkOutlineIcon color="primary" /></Box>
                        <Typography fontWeight="bold">{row.company}</Typography>
                      </TableCell>
                      <TableCell>{row.title}</TableCell>
                      <TableCell color="text.secondary">{row.date}</TableCell>
                      <TableCell>
                        <Chip
                          label={row.statusLabel}
                          size="small"
                          sx={{ backgroundColor: row.statusLabel === "Applied" ? "#ede9fe" : row.statusLabel === "Shortlisted" ? "#fef3c7" : "#dbeafe" }}
                        />
                      </TableCell>
                      <TableCell>
                        <Button size="small" endIcon={<ArrowForwardIcon />} sx={{ textTransform: "none" }}>
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell colSpan={5}>
                        <Box sx={{ py: 1 }}>
                          <Stepper activeStep={row.activeStep} alternativeLabel>
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
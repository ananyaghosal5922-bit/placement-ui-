import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Jobs from "../pages/Jobs";
import JobDetails from "../pages/JobDetails";
import Applications from "../pages/Applications";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/job-details" element={<JobDetails />} />
      <Route path="/applications" element={<Applications />} />
    </Routes>
  );
}

export default AppRoutes;
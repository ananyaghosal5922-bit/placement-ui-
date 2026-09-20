import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [role, setRole] = useState("student");

  return (
    <BrowserRouter>
      <MainLayout role={role} setRole={setRole}>
        <AppRoutes role={role} />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
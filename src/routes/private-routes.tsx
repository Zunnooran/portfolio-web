import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";

function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export { PrivateRoutes };

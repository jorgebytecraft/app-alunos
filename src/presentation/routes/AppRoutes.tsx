import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home/Home";
import { Students } from "../pages/Students/Students";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/students" element={<Students />} />
    </Routes>
  );
}

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Roles from "./pages/Roles";
import Login from "./pages/Login";
import Dashboard from "./Components/Dashboard";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute"; // if using
import Unauthorized from "./Components/Unauthorized";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Roles />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<Login />} />

          {/* Optional: Protect dashboard if needed */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute allowedRoles={["admin", "user", "guest"]}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

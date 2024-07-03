import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "../src/components/DashboardPage";
import LoginPage from "../src/components/LoginPage";
import ScheduleEventPage from "../src/components/ScheduleEventPage";
import ProtectedRoute from "./components/ProtectedRoute";
import WelcomePage from "./components/WelcomePage";
import SignUpPage from "./components/SignUpPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/schedule-event"
          element={
            <ProtectedRoute>
              <ScheduleEventPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

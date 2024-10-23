import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
// import { AppointmentProvider } from "./context/Appointmentcontext";
import { AppointmentProvider } from "./context/Appointmentcontext.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <AppointmentProvider>
    <App />
    </AppointmentProvider>
  </Router>
);

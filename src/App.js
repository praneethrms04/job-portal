import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import DashBoard from "./pages/Dashboard";
import JobPage from "./pages/JobPage";
import Home from "./pages/Home";
import Unauth from "./pages/Unauthorized";
import AppicationStatus from "./components/AppicationStatus";
import Applications from "./pages/Applications";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/jobs" element={<JobPage />} />
        <Route path="/dashboard" element={<DashBoard />}></Route>
        <Route path="/unauthorized" element={<Unauth />} />
        <Route path="/applications" element={<Applications />} />

        <Route path="/applicationstatus" element={<AppicationStatus/>} />

      </Routes>
    </Router>
  );
}

export default App;

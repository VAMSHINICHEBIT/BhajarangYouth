import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "./index.css";

function ScheduleEventPage() {
  const [data, setData] = useState([]);
  return (
    <div className="bg-schedule-event-page">
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default ScheduleEventPage;

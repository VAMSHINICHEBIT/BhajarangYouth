import React, { useState } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import { BarChart } from "@mui/x-charts/BarChart";
import "./index.css";

const data = [
  {
    month: "January",
    count: 5,
  },
  {
    month: "February",
    count: 10,
  },
  {
    month: "March",
    count: 12,
  },
  {
    month: "April",
    count: 8,
  },
  {
    month: "May",
    count: 5,
  },
  {
    month: "June",
    count: 10,
  },
  {
    month: "July",
    count: 12,
  },
  {
    month: "August",
    count: 8,
  },
  {
    month: "September",
    count: 5,
  },
  {
    month: "October",
    count: 10,
  },
  {
    month: "November",
    count: 12,
  },
  {
    month: "December",
    count: 8,
  },
];

const DashboardPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-dashboard-container">
      <Navbar />
      <div className="sidebar-remaining-container">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div className="dashboard-content-container">
          <BarChart
            xAxis={[
              {
                id: "Months",
                data: [
                  "Jan",
                  "Feb",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ],
                scaleType: "band",
              },
            ]}
            series={[
              {
                data: [2, 5, 3, 2, 5, 3, 2, 5, 3, 2, 5, 3],
              },
            ]}
            width={900}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

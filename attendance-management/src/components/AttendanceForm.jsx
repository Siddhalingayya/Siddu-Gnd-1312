/*
import React, { useState } from "react";

const AttendanceForm = ({ onStartAttendance }) => {
  const [formData, setFormData] = useState({
    date: "",
    period: "1", // Default to the first period
    section: "1", // Default to the first section
    branch: "1", // Default to the first branch
    faculty: "1", // Default to the first faculty
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onStartAttendance(formData);
  };

  return (
    <div className="form-container">
      <h2>Start Attendance</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <label htmlFor="period">Period:</label>
        <select
          id="period"
          name="period"
          value={formData.period}
          onChange={handleChange}
        >
          {Array.from({ length: 7 }, (_, i) => (
            <option key={i} value={i + 1}>
              Period {i + 1}
            </option>
          ))}
        </select>
        <label htmlFor="section">Section:</label>
        <select
          id="section"
          name="section"
          value={formData.section}
          onChange={handleChange}
        >
          {Array.from({ length: 13 }, (_, i) => (
            <option key={i} value={i + 1}>
              Section {i + 1}
            </option>
          ))}
        </select>
        <label htmlFor="branch">Branch:</label>
        <select
          id="branch"
          name="branch"
          value={formData.branch}
          onChange={handleChange}
        >
          {Array.from({ length: 9 }, (_, i) => (
            <option key={i} value={i + 1}>
              Branch {i + 1}
            </option>
          ))}
        </select>
        <label htmlFor="faculty">Faculty Name:</label>
        <select
          id="faculty"
          name="faculty"
          value={formData.faculty}
          onChange={handleChange}
        >
          {Array.from({ length: 35 }, (_, i) => (
            <option key={i} value={i + 1}>
              Faculty {i + 1}
            </option>
          ))}
        </select>
        <button type="submit">Start Attendance</button>
      </form>
    </div>
  );
};

export default AttendanceForm;
*/

import React, { useState } from "react";

const AttendanceForm = ({ onStartAttendance }) => {
  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    date: today, // Default to today's date
    period: "1", // Default to the first period
    section: "1", // Default to the first section
    branch: "1", // Default to the first branch
    faculty: "1", // Default to the first faculty
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onStartAttendance(formData);
  };

  return (
    <div className="form-container">
      <h2>Start Attendance</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          readOnly // Ensures the date cannot be changed
        />
        <label htmlFor="period">Period:</label>
        <select
          id="period"
          name="period"
          value={formData.period}
          onChange={handleChange}
        >
          {Array.from({ length: 7 }, (_, i) => (
            <option key={i} value={i + 1}>
              Period {i + 1}
            </option>
          ))}
        </select>
        <label htmlFor="section">Section:</label>
        <select
          id="section"
          name="section"
          value={formData.section}
          onChange={handleChange}
        >
          {Array.from({ length: 13 }, (_, i) => (
            <option key={i} value={i + 1}>
              Section {i + 1}
            </option>
          ))}
        </select>
        <label htmlFor="branch">Branch:</label>
        <select
          id="branch"
          name="branch"
          value={formData.branch}
          onChange={handleChange}
        >
          {Array.from({ length: 9 }, (_, i) => (
            <option key={i} value={i + 1}>
              Branch {i + 1}
            </option>
          ))}
        </select>
        <label htmlFor="faculty">Faculty Name:</label>
        <select
          id="faculty"
          name="faculty"
          value={formData.faculty}
          onChange={handleChange}
        >
          {Array.from({ length: 35 }, (_, i) => (
            <option key={i} value={i + 1}>
              Faculty {i + 1}
            </option>
          ))}
        </select>
        <button type="submit">Start Attendance</button>
      </form>
    </div>
  );
};

export default AttendanceForm;



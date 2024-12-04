import React, { useState } from "react";

const AttendanceForm = ({ onStartAttendance }) => {
  const [formData, setFormData] = useState({
    period: "",
    section: "",
    branch: "",
    faculty: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.period && formData.section && formData.branch && formData.faculty && formData.date) {
      onStartAttendance(formData);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label htmlFor="period">Select Period:</label>
      <select name="period" id="period" value={formData.period} onChange={handleChange}>
        <option value="">--Choose--</option>
        <option value="Period 1">Period 1</option>
        <option value="Period 2">Period 2</option>
        <option value="Period 3">Period 3</option>
      </select>

      <label htmlFor="section">Section:</label>
      <input
        type="text"
        id="section"
        name="section"
        value={formData.section}
        onChange={handleChange}
        placeholder="Enter section (e.g., A)"
      />

      <label htmlFor="branch">Branch:</label>
      <input
        type="text"
        id="branch"
        name="branch"
        value={formData.branch}
        onChange={handleChange}
        placeholder="Enter branch (e.g., CSE)"
      />

      <label htmlFor="faculty">Faculty Name:</label>
      <input
        type="text"
        id="faculty"
        name="faculty"
        value={formData.faculty}
        onChange={handleChange}
        placeholder="Enter faculty name"
      />

      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />

      <button type="submit">Start Attendance</button>
    </form>
  );
};

export default AttendanceForm;

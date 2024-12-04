import React, { useState } from "react";
import { students as studentData } from "./data/students";
import AttendanceForm from "./components/AttendanceForm";
import StudentList from "./components/StudentList";
import { jsPDF } from "jspdf";

const App = () => {
  const [attendanceDetails, setAttendanceDetails] = useState(null);
  const [students, setStudents] = useState(studentData);
  const [submittedData, setSubmittedData] = useState(null);

  const handleStartAttendance = (details) => {
    setAttendanceDetails(details);
  };

  const toggleAttendance = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, present: !student.present } : student
      )
    );
  };

  const handleSubmit = () => {
    setSubmittedData({
      ...attendanceDetails,
      attendance: students.map(({ id, name, present }) => ({
        id,
        name,
        status: present ? "Present" : "Absent",
      })),
    });
    setAttendanceDetails(null); // Reset form
    setStudents(studentData); // Reset students list
  };

  const handleSaveAsPDF = () => {
    if (!submittedData) return;

    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Attendance Report", 20, 20);

    doc.setFontSize(12);
    doc.text(`Date: ${submittedData.date}`, 20, 30);
    doc.text(`Period: ${submittedData.period}`, 20, 40);
    doc.text(`Section: ${submittedData.section}`, 20, 50);
    doc.text(`Branch: ${submittedData.branch}`, 20, 60);
    doc.text(`Faculty: ${submittedData.faculty}`, 20, 70);

    doc.text("Attendance Details:", 20, 80);
    let yPosition = 90;

    submittedData.attendance.forEach((entry) => {
      doc.text(`${entry.name} - ${entry.status}`, 20, yPosition);
      yPosition += 10;
    });

    doc.save("attendance_report.pdf");
  };

  return (
    <div className="App">
      <h1>Attendance Management</h1>
      {!attendanceDetails ? (
        <AttendanceForm onStartAttendance={handleStartAttendance} />
      ) : (
        <div>
          <h2>Period: {attendanceDetails.period}</h2>
          <p>
            <strong>Date:</strong> {attendanceDetails.date}
          </p>
          <p>
            <strong>Section:</strong> {attendanceDetails.section}
          </p>
          <p>
            <strong>Branch:</strong> {attendanceDetails.branch}
          </p>
          <p>
            <strong>Faculty:</strong> {attendanceDetails.faculty}
          </p>
          <StudentList
            students={students}
            toggleAttendance={toggleAttendance}
            onSubmit={handleSubmit}
          />
        </div>
      )}

      {submittedData && (
        <div style={{ marginTop: "30px" }}>
          <h2>Submitted Data</h2>
          <p>
            <strong>Date:</strong> {submittedData.date}
          </p>
          <p>
            <strong>Period:</strong> {submittedData.period}
          </p>
          <p>
            <strong>Section:</strong> {submittedData.section}
          </p>
          <p>
            <strong>Branch:</strong> {submittedData.branch}
          </p>
          <p>
            <strong>Faculty:</strong> {submittedData.faculty}
          </p>
          <ul>
            {submittedData.attendance.map((entry) => (
              <li key={entry.id}>
                {entry.name} - {entry.status}
              </li>
            ))}
          </ul>
          <button onClick={handleSaveAsPDF} className="save-btn">
            Save as PDF
          </button>
        </div>
      )}
    </div>
  );
};

export default App;

/*
import React, { useState } from "react";
import jsPDF from "jspdf";

const StudentList = ({ details, onAttendanceComplete }) => {
  const [students, setStudents] = useState(
    Array.from({ length: 60 }, (_, i) => ({
      id: i + 1,
      name: `Student ${i + 1}`,
      present: false,
    }))
  );

  const toggleAttendance = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, present: !student.present } : student
      )
    );
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Attendance Report", 10, 10);
    doc.text(`Date: ${details.date}`, 10, 20);
    doc.text(`Period: ${details.period}`, 10, 30);
    doc.text(`Section: ${details.section}`, 10, 40);
    doc.text(`Branch: ${details.branch}`, 10, 50);
    doc.text(`Faculty ID: ${details.faculty}`, 10, 60);

    doc.setFontSize(12);
    doc.text("Student Attendance:", 10, 70);

    let yPosition = 80;
    students.forEach((student) => {
      doc.text(
        `${student.id}. ${student.name} - ${student.present ? "Present" : "Absent"}`,
        10,
        yPosition
      );
      yPosition += 10;
    });

    doc.save(`Attendance_${details.date}.pdf`);
  };

  const handleComplete = () => {
    generatePDF();
    onAttendanceComplete();
  };

  return (
    <div>
      <h2>Attendance for {details.date}</h2>
      <p>
        <strong>Period:</strong> {details.period}
      </p>
      <p>
        <strong>Section:</strong> {details.section}
      </p>
      <p>
        <strong>Branch:</strong> {details.branch}
      </p>
      <p>
        <strong>Faculty:</strong> {details.faculty}
      </p>

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <span>{student.name}</span>
            <button onClick={() => toggleAttendance(student.id)}>
              {student.present ? "Present" : "Absent"}
            </button>
          </li>
        ))}
      </ul>

      <button onClick={handleComplete}>Complete Attendance and Save PDF</button>
    </div>
  );
};

export default StudentList;

*/

import React, { useState } from "react";
import jsPDF from "jspdf";

const StudentList = ({ details, onAttendanceComplete }) => {
  const [students, setStudents] = useState(
    Array.from({ length: 60 }, (_, i) => ({
      id: i + 1,
      name: `Student ${i + 1}`,
      present: false,
    }))
  );

  const toggleAttendance = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, present: !student.present } : student
      )
    );
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const startX = 10;
    const startY = 10;

    doc.setFontSize(16);
    doc.text("Attendance Report", startX, startY);
    doc.setFontSize(12);
    doc.text(`Date: ${details.date}`, startX, startY + 10);
    doc.text(`Period: ${details.period}`, startX, startY + 20);
    doc.text(`Section: ${details.section}`, startX, startY + 30);
    doc.text(`Branch: ${details.branch}`, startX, startY + 40);
    doc.text(`Faculty: ${details.faculty}`, startX, startY + 50);

    doc.text("Student Attendance", startX, startY + 60);
    let yPosition = startY + 70;

    students.forEach((student, index) => {
      doc.text(
        `${student.id}. ${student.name} - ${student.present ? "Present" : "Absent"}`,
        startX,
        yPosition
      );
      yPosition += 10;

      // Create a new page if the content exceeds the page height
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 10;
      }
    });

    doc.save(`Attendance_${details.date}.pdf`);
  };

  const handleComplete = () => {
    generatePDF();
    onAttendanceComplete();
  };

  return (
    <div className="student-list">
      <h2>Attendance for {details.date}</h2>
      <p>
        <strong>Period:</strong> {details.period}
      </p>
      <p>
        <strong>Section:</strong> {details.section}
      </p>
      <p>
        <strong>Branch:</strong> {details.branch}
      </p>
      <p>
        <strong>Faculty:</strong> {details.faculty}
      </p>

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <span>{student.name}</span>
            <button onClick={() => toggleAttendance(student.id)}>
              {student.present ? "Present" : "Absent"}
            </button>
          </li>
        ))}
      </ul>

      <button onClick={handleComplete}>Complete Attendance and Save PDF</button>
    </div>
  );
};

export default StudentList;


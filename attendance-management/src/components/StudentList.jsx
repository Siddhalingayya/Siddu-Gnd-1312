import React from "react";

const StudentList = ({ students, toggleAttendance, onSubmit }) => {
  return (
    <div>
      <h3>Student List</h3>
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
      <button onClick={onSubmit} style={{ marginTop: "20px", padding: "10px" }}>
        Submit Attendance
      </button>
    </div>
  );
};

export default StudentList;

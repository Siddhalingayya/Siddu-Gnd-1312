import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AttendanceForm from "./components/AttendanceForm";
import StudentList from "./components/StudentList";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState([
    { username: "admin", password: "password123" }, // Default admin user
  ]);
  const [attendanceDetails, setAttendanceDetails] = useState(null);

  const handleLogin = (username, password) => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials! Please try again.");
    }
  };

  const handleSignUp = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
    alert("Sign-up successful! Please log in.");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAttendanceDetails(null);
  };

  const handleStartAttendance = (details) => {
    setAttendanceDetails(details);
  };

  return (
    <Router>
      <div>
        {!isAuthenticated ? (
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} />
          </Routes>
        ) : (
          <>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
            <Routes>
              <Route
                path="/"
                element={
                  attendanceDetails ? (
                    <StudentList
                      details={attendanceDetails}
                      onAttendanceComplete={() => setAttendanceDetails(null)}
                    />
                  ) : (
                    <AttendanceForm onStartAttendance={handleStartAttendance} />
                  )
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;

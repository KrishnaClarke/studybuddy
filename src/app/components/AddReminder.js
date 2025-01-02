"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom"; // Import useHistory for navigation
import "./globals.css";

const AddReminder = ({ onAdd }) => {
  const [reminder, setReminder] = useState("");
  const [date, setDate] = useState("");
  const history = useHistory(); // Initialize useHistory

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ reminder, date });
    toast.success("Reminder added!");
    setReminder("");
    setDate("");
  };

  const handleNavigation = (path) => {
    history.push(path); // Navigate to the specified path
  };

  return (
    <div>
      <header className="header">
        <h1 className="title">StudyBuddy</h1>
        <button onClick={() => handleNavigation("/profile")}>
          <svg
            className="profileicon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            id="profile"
          >
            {/* SVG content */}
          </svg>
        </button>
      </header>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Reminder"
          value={reminder}
          onChange={(e) => setReminder(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Add Reminder</button>
      </form>

      <div className="bottombanner">
        <button onClick={() => handleNavigation("/messages")}>
          <svg
            className="messageicon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            id="message"
          >
            {/* SVG content */}
          </svg>
        </button>
        <button onClick={() => handleNavigation("/home")}>
          <svg
            className="homeicon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="home"
          >
            {/* SVG content */}
          </svg>
        </button>
        <button onClick={() => handleNavigation("/calendar")}>
          <svg
            className="calandericon"
            xmlns="http://www.w3.org/2000/svg"
            width="128"
            height="128"
            fill="none"
            viewBox="0 0 128 128"
            id="calendar"
          >
            {/* SVG content */}
          </svg>{" "}
          {/* Correctly close the SVG tag here */}
        </button>
      </div>
    </div>
  );
};

export default AddReminder;

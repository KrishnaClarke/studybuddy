// src/AddReminder.js
"use client";

import React, { useState } from "react";

const AddReminder = ({ addReminder }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addReminder({ title, date });
    setTitle("");
    setDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      <label
        className="formtitle"
        htmlFor="title"
        style={{ marginBottom: "5px" }}
      >
        Assignment/Test/Lab
      </label>
      <input
        type="text"
        id="title"
        placeholder="Enter assignment title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{
          padding: "10px",
          marginBottom: "10px",
          width: "200px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <label
        className="formtitle"
        htmlFor="date"
        style={{ marginBottom: "5px" }}
      >
        Due Date
      </label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        style={{
          padding: "10px",
          marginBottom: "10px",
          width: "200px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <button>Add Reminder</button>
    </form>
  );
};

export default AddReminder;
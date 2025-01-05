// pages/add-reminder.js
"use client"; // Add this directive to indicate this is a client component

import React, { useState } from "react";
import Link from "next/link";

const AddReminderPage = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle the added reminder (e.g., update state in a parent component or send it to an API)
    console.log("Reminder added:", { title, date });
    setTitle("");
    setDate("");
  };

  return (
    <div>
      <h1>Add Reminder</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Assignment/Test/Lab</label>
        <input
          type="text"
          id="title"
          placeholder="Enter assignment title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="date">Due Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Add Reminder</button>
      </form>
      <Link href="/">Back to Home</Link>
    </div>
  );
};

export default AddReminderPage;

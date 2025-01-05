// src/Reminder.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const Reminder = () => {
  const [reminders, setReminders] = useState([]);
  const [reminder, setReminder] = useState("");
  const [date, setDate] = useState("");

  // Fetch reminders from the server
  const fetchReminders = async () => {
    const response = await axios.get("http://localhost:3000/api/reminders");
    setReminders(response.data);
  };

  useEffect(() => {
    fetchReminders();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReminder = { reminder, date };
    await axios.post("http://localhost:3000/api/reminders", newReminder);
    setReminder("");
    setDate("");
    fetchReminders(); // Refresh the list of reminders
  };

  return (
    <div>
      <h1>Study Buddy - Reminders</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Reminder"
          value={reminder}
          onChange={(e) => setReminder(e.target.value)}
          required
        />
        <input
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Add Reminder</button>
      </form>

      <h2>Upcoming Reminders</h2>
      <ul>
        {reminders.map((rem, index) => (
          <li key={index}>
            {rem.reminder} - Due on {new Date(rem.date).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reminder;

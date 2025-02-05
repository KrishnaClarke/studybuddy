"use client";

import React, { useState, useEffect } from "react";
import AddReminder from "./AddReminder";
import "./style.css";
const Home = () => {
  const [reminders, setReminders] = useState([]);
  const [randomTip, setRandomTip] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editReminder, setEditReminder] = useState({ title: "", date: "" });

  const studyTips = [
    "Take regular breaks.",
    "Stay organized.",
    "Practice active recall.",
    "Teach someone else.",
    "Use flashcards for revision.",
    "Set specific goals for each study session.",
  ];

  useEffect(() => {
    const tip = studyTips[Math.floor(Math.random() * studyTips.length)];
    setRandomTip(tip);
  }, []);

  const addReminder = (reminder) => {
    setReminders([...reminders, reminder]);
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditReminder(reminders[index]);
  };

  const updateReminder = (updatedReminder) => {
    const updatedReminders = reminders.map((reminder, index) =>
      index === editIndex ? updatedReminder : reminder
    );
    setReminders(updatedReminders);
    setEditIndex(null);
    setEditReminder({ title: "", date: "" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <header className="header">
        <h1 className="title">StudyBuddy</h1>
      </header>

      <div className="container">
        <AddReminder addReminder={addReminder} />
      </div>

      <h2 className="head">Upcoming Reminders</h2>
      {reminders.length === 0 ? (
        <p>No upcoming reminders.</p>
      ) : (
        <ul>
          {reminders.map((reminder, index) => (
            <li key={index}>
              {editIndex === index ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    updateReminder(editReminder);
                  }}
                >
                  <input
                    type="text"
                    value={editReminder.title}
                    onChange={(e) =>
                      setEditReminder({
                        ...editReminder,
                        title: e.target.value,
                      })
                    }
                    required
                  />
                  <input
                    type="date"
                    value={editReminder.date}
                    onChange={(e) =>
                      setEditReminder({ ...editReminder, date: e.target.value })
                    }
                    required
                  />
                  <button type="submit">Update Reminder</button>
                </form>
              ) : (
                <>
                  <strong>{reminder.title}</strong> - Due on {reminder.date}
                  <button onClick={() => startEdit(index)}>Edit</button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
      <h2 className="head">Study Tip</h2>
      <p className="tips">{randomTip}</p>
      <div className="bottombanner">
        <svg
          className="messageicon"
          xmlns="http://www .w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          id="message"
        >
          <g
            id="Page-1"
            fill="none"
            fillRule="evenodd"
            stroke="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          >
            <g
              id="Artboard"
              stroke="#000"
              strokeWidth="2"
              transform="translate(-1687 -1753)"
            >
              <g id="message-circle" transform="translate(1688 1754)">
                <path
                  id="Shape"
                  d="M18 8.5a8.38 8.38 0 0 1-.9 3.8A8.5 8.5 0 0 1 9.5 17a8.38 8.38 0 0 1-3.8-.9L0 18l1.9-5.7A8.38 8.38 0 0 1 1 8.5 8.5 8.5 0 0 1 5.7.9 8.38 8.38 0 0 1 9.5 0h.5a8.48 8.48 0 0 1 8 8v.5z"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <svg
          className="homeicon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="home"
        >
          <path d="M20,8h0L14,2.74a3,3,0,0,0-4,0L4,8a3,3,0,0,0-1,2.26V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10.25A3,3,0,0,0,20,8ZM14,20H10V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm5-1a1,1,0,0,1-1,1H16V15a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5H6a1,1,0,0,1-1-1V10.25a1,1,0,0,1,.34-.75l6-5.25a1,1,0,0,1,1.32,0l6,5.25a1,1,0,0,1,.34.75Z"></path>
        </svg>

        <svg
          className="calendaricon"
          xmlns="http://www.w3.org/2000/svg"
          width="128"
          height="128"
          fill="none"
          viewBox="0 0 128 128"
          id="calendar"
        >
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeWidth="6"
            d="M45 33V33C34.5066 33 26 41.5066 26 52L26 83C26 93.4934 34.5066 102 45 102V102L64 102 83 102V102C93.4934 102 102 93.4934 102 83L102 52C102 41.5066 93.4934 33 83 33V33L73.5 33 64 33 58.5 33M49 40V26M79 40V26M28 61H101.5"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Home;

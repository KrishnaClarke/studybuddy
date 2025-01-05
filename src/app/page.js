// // src/App.js
// // import React from "react";
// // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // import Home from "./Home";
// // import AddReminderPage from "./AddReminder";

// // const App = () => {
// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/add-reminder" element={<AddReminderPage />} />
// //       </Routes>
// //     </Router>
// //   );
// // };

// // export default App;

// // pages/index.js
// "use client"; // Add this directive to indicate this is a client component

// import React, { useState, useEffect } from "react";
// import Link from "next/link"; // Use Next.js Link for navigation
// import "./style.css"; // Adjust the path as necessary

// const Home = () => {
//   const [reminders, setReminders] = useState([]);
//   const [randomTip, setRandomTip] = useState("");
//   const [editIndex, setEditIndex] = useState(null);
//   const [editReminder, setEditReminder] = useState({ title: "", date: "" });

//   const studyTips = [
//     "Take regular breaks.",
//     "Stay organized.",
//     "Practice active recall.",
//     "Teach someone else.",
//     "Use flashcards for revision.",
//     "Set specific goals for each study session.",
//   ];

//   useEffect(() => {
//     const tip = studyTips[Math.floor(Math.random() * studyTips.length)];
//     setRandomTip(tip);
//   }, []);

//   const addReminder = (reminder) => {
//     setReminders([...reminders, reminder]);
//   };

//   const startEdit = (index) => {
//     setEditIndex(index);
//     setEditReminder(reminders[index]);
//   };

//   const updateReminder = (updatedReminder) => {
//     const updatedReminders = reminders.map((reminder, index) =>
//       index === editIndex ? updatedReminder : reminder
//     );
//     setReminders(updatedReminders);
//     setEditIndex(null);
//     setEditReminder({ title: "", date: "" });
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <header>
//         <h1 className="title">StudyBuddy</h1>
//       </header>

//       <h2 className="head">Upcoming Reminders</h2>
//       {reminders.length === 0 ? (
//         <p>No upcoming reminders.</p>
//       ) : (
//         <ul>
//           {reminders.map((reminder, index) => (
//             <li key={index}>
//               {editIndex === index ? (
//                 <form
//                   onSubmit={(e) => {
//                     e.preventDefault();
//                     updateReminder(editReminder);
//                   }}
//                 >
//                   <input
//                     type="text"
//                     value={editReminder.title}
//                     onChange={(e) =>
//                       setEditReminder({
//                         ...editReminder,
//                         title: e.target.value,
//                       })
//                     }
//                     required
//                   />
//                   <input
//                     type="date"
//                     value={editReminder.date}
//                     onChange={(e) =>
//                       setEditReminder({ ...editReminder, date: e.target.value })
//                     }
//                     required
//                   />
//                   <button type="submit">Update Reminder</button>
//                 </form>
//               ) : (
//                 <>
//                   <strong>{reminder.title}</strong> - Due on {reminder.date}
//                   <button onClick={() => startEdit(index)}>Edit</button>
//                 </>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}
//       <h2 className="head">Study Tip</h2>
//       <p className="tips">{randomTip}</p>
//       <Link href="/add-reminder">Add Reminder</Link>
//     </div>
//   );
// };

// export default Home;

// src/App.js
import React from "react";
import Home from "./Home";
import AddReminder from "./AddReminder";

const App = () => {
  return (
    <div>
      <Home />
      {/* <AddReminder /> */}
    </div>
  );
};

export default App;

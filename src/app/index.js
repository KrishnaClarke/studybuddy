// src/index.js or src/App.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
// App.js or index.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'; // Adjust the import based on your file structure
import AddReminder from './components/AddReminder'; // Adjust the import based on your file structure
import Messages from './mes/Messages'; // Example component
import Calendar from './cal/Calendar'; // Example component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addreminder" element={<AddReminder onAdd={() => {}} />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/calendar" element={<Calendar />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
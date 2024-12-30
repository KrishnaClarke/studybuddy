import Image from "next/image";
//import Home from "../components/Home";
//import Messages from "../components/Messages";
//import Calander from "../components/Calander";
//import AddReminder from "../components/AddReminder";
//import EditReminder from "../components/EditReminder";

export default function Home() {
  return (
    <div>
      <header>
        <h1 className="header">Study Buddy</h1>
      </header>

      <div className="footer">
        <img src="img/add.svg"></img>
      </div>

      <footer className="footer">
        <p>Study Buddy</p>
        <img></img>
      </footer>
    </div>
  );
}

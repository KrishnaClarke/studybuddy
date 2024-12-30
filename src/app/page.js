import Image from "next/image";
//import Home from "../components/Home";
//import Messages from "../components/Messages";
//import Calander from "../components/Calander";
//import AddReminder from "../components/AddReminder";
//import EditReminder from "../components/EditReminder";
import AddIcon from "../images/add.svg";

export default function Home() {
  return (
    <div>
      <header>
        <h1 className="header">Study Buddy</h1>
      </header>

      <div className="bottombanner"></div>

      <footer className="footer">
        <p>copyright @1995 </p>
        <img></img>
      </footer>
    </div>
  );
}

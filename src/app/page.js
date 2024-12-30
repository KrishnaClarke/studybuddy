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
      <header className="header">
        <h1 className="title">StudyBuddy</h1>
        <svg
          className="profileicon"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          id="profile"
        >
          <g
            id="Page-1"
            fill="none"
            fillRule="evenodd"
            stroke="none"
            strokeWidth="1"
          >
            <g
              id="Dribbble-Light-Preview"
              fill="#000"
              transform="translate(-420 -2159)"
            >
              <g id="icons" transform="translate(56 160)">
                <path
                  id="profile-[#1335]"
                  d="M374 2009c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4m3.758.673A5.983 5.983 0 0 0 380 2005a6 6 0 1 0-9.758 4.673c-3.659 1.375-6.242 4.772-6.242 9.327h2c0-5 3.589-8 8-8s8 3 8 8h2c0-4.555-2.583-7.952-6.242-9.327"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </header>

      <div className="bottombanner">
        <svg
          className="messageicon"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          id="message"
        >
          <g
            id="Page-1"
            fill="none"
            fill-rule="evenodd"
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
          className="calandericon"
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

      <footer className="footer">
        <p>copyright @1995 </p>
        <img></img>
      </footer>
    </div>
  );
}

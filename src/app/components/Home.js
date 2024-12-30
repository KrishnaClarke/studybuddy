import Messages from "../components/Messages";

function HomeScreen() {
  return (
    <div>
      <div>
        <Messages></Messages>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          id="add"
          x="0"
          y="0"
          version="1.1"
          viewBox="0 0 29 29"
        >
          <path d="M14.5 27.071c-6.893 0-12.5-5.607-12.5-12.5s5.607-12.5 12.5-12.5S27 7.678 27 14.571s-5.607 12.5-12.5 12.5zm0-23c-5.79 0-10.5 4.71-10.5 10.5s4.71 10.5 10.5 10.5S25 20.36 25 14.571s-4.71-10.5-10.5-10.5z"></path>
          <path d="M14.5 21.571a1 1 0 0 1-1-1v-12a1 1 0 0 1 2 0v12a1 1 0 0 1-1 1z"></path>
          <path d="M20.5 15.571h-12a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"></path>
        </svg>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";

const Header = () => {
  const [timestamp, setTimestamp] = useState(null);

  useEffect(() => {
    setTimestamp(Date.now());
  }, []);

  return (
    <div>
      Last Updated:{" "}
      {timestamp ? new Date(timestamp).toLocaleString() : "Loading..."}
    </div>
  );
};

export default Header;

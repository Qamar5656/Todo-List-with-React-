import React, { useState } from "react";

const TestComp = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [notification, setNotification] = useState(0);

  function handleLoggedIn() {
    if (user.userName === "abc@gmail.com" && user.password === "abc123") {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }

  return (
    <>
      {loggedIn ? "UserName" : "Please login to continue"}
      {loggedIn && notification > 0 ? (
        <p>{notification}</p>
      ) : (
        "No new notifications"
      )}
    </>
  );
};

export default TestComp;

import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch data from the backend
    axios.get("http://localhost:5000")
      .then((response) => {
        setMessage(response.data); // Set the backend message in state
      })
      .catch((error) => {
        console.error("Error fetching data from backend:", error);
      });
  }, []);

  return (
    <div>
      <h1>Social Food Journal</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;

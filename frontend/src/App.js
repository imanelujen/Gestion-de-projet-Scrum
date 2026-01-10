import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch(() => setMessage("Backend not connected ❌"));
  }, []);

  return (
    <div className="App">
      <h1>🚀 Agile Project Manager</h1>

      <p>Application de suivi de projets Agile</p>

      <hr />

      <h3>Backend status :</h3>
      <p>{message}</p>
    </div>
  );
}

export default App;

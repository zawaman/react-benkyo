import "./styles.css";
import React, { useState } from "react";

export const App = () => {
  const [display, setDisplay] = useState("Hellow World.");

  const onClick = () => {
    if (display === "Hellow World.") setDisplay("Hoge Hoge.");
    else setDisplay("Hellow World.");
  };

  return (
    <div>
      <h1>{display}</h1>
      <button onClick={onClick}>OK</button>
    </div>
  );
};

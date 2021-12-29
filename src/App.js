import "./styles.css";
import React from "react";

export const App = () => {
  const onClick = () => {
    const box = [1, 10, 100, 1000];
    const result = box.map((value) => {
      return value * 2;
    });
    console.log(result);
  };

  return (
    <div>
      <h1>Hellow World.</h1>
      <button onClick={onClick}>OK</button>
    </div>
  );
};

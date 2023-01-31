import "./App.css";
import React, { useState } from "react";
import Button from "@mui/material/Button";

function App() {
  const [count, setCount] = useState(1);
  let buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <p key={i}>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Count: {count}
        </Button>
      </p>
    );
  }
  return (
    <div className="App">
      {buttons}
      <p>Hello mturk1</p>
    </div>
  );
}

export default App;

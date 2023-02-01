import "./App.css";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

const getRandomPrompt = () => {
  const prompts = [
    "Click many times!",
    "Click some amount of times!",
    "Please click a few times.",
    "Click this?",
    "What does this do?",
    "Click for a while.",
    "What happens if you click?",
    "Click me.",
    "???",
  ];
  return prompts[Math.floor(Math.random() * prompts.length)];
};

function App() {
  const [count, setCount] = useState(0);
  const [clickTimes, setClickTimes] = useState([]);
  const [prompt] = useState(getRandomPrompt());
  const [now] = useState(Date.now());

  // Update the submit button
  useEffect(() => {
    // attach the form to the HTML document and trigger submission
    document.getElementById("mturk-result").value = JSON.stringify({
      count: count,
      clicksTimes: clickTimes,
      prompt: prompt,
      now: now,
    });
  });

  return (
    <div className="App">
      <p>{prompt}</p>
      <Button
        onClick={(e) => {
          setCount(count + 1);
          setClickTimes([Date.now(), ...clickTimes]);
        }}
      >
        Count: {count}
      </Button>
    </div>
  );
}

export default App;

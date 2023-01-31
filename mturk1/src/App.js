import "./App.css";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

function App() {
  const [count, setCount] = useState(1);
  let buttons = [];

  // Update the submit button
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    // create the form element and point it to the correct endpoint
    const form = document.createElement("form");
    form.action = new URL(
      "mturk/externalSubmit",
      urlParams.get("turkSubmitTo")
    ).href;
    form.method = "post";

    // attach the assignmentId
    const inputAssignmentId = document.createElement("input");
    inputAssignmentId.name = "assignmentId";
    inputAssignmentId.value = urlParams.get("assignmentId");
    inputAssignmentId.hidden = true;
    form.appendChild(inputAssignmentId);

    // attach data I want to send back
    // attach data I want to send back
    const results = document.createElement("input");
    results.name = "results";
    results.value = JSON.stringify({
      count: count,
    });
    results.hidden = true;
    document.getElementById("mturk_form").submit();
    form.appendChild(results);

    // attach the form to the HTML document and trigger submission
    document.body.appendChild(form);
    form.submit();
  });

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

import React, { useState } from "react";

import "./NewTopic.css";

const NewTopic = (props) => {
  const [enteredText, setEnteredText] = useState("");

  const addTopicHandler = (event) => {
    // The default action will not be taken unless explicitly handled
    event.preventDefault();

    const newTopic = {
      // Formatting new topics to match the topics I created in App.js
      id: Math.random().toString(),
      text: enteredText,
    };

    // Resets the input field to an empty string
    setEnteredText("");

    props.onAddTopic(newTopic);
  };

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  return (
    <form className="new-topic" onSubmit={addTopicHandler}>
      <input type="text" value={enteredText} onChange={textChangeHandler} />
      <button type="submit">Add Topic</button>
    </form>
  );
};

export default NewTopic;

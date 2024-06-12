import React, { useState } from "react";

import TopicList from "./components/TopicList/TopicList";
import NewTopic from "./components/NewTopic/NewTopic";
import "./App.css";

const App = () => {
  const [learningTopics, setLearningTopics] = useState([
    // Setting default state with learning topics
    { id: "lt1", text: "MongoDB" },
    { id: "lt2", text: "Express" },
    { id: "lt3", text: "React" },
    { id: "lt4", text: "NodeJS" },
  ]);

  const addNewTopicHandler = (newTopic) => {
    setLearningTopics((prevLearningTopics) =>
      // Concatenating previous list state with the new list items
      prevLearningTopics.concat(newTopic)
    );
  };

  return (
    // Using JSX (JavaScript syntax extension)
    <div className="course-topics">
      <h2>Learning Topics</h2>
      <NewTopic onAddTopic={addNewTopicHandler} />
      <TopicList topics={learningTopics} />
    </div>
  );
};

export default App;

import React from "react";

import "./TopicList.css";

const TopicList = (props) => {
  return (
    // Filling the list dynamically from App.js and NewTopic.js
    <ul className="topic-list">
      {props.topics.map((topic) => {
        return <li key={topic.id}>{topic.text}</li>;
      })}
    </ul>
  );
};

export default TopicList;

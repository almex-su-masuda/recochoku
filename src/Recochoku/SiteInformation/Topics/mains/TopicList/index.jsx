// libs
import React from "react";
// components
import TopicItem from "../../components/TopicItem";
// others
import "./style.scss";

const TopicList = ({ topicContents }) => (
  <div className="topic-list-wrapper">
    {topicContents.map(topicContents => (
      <TopicItem topicContents={topicContents} />
    ))}
  </div>
);

export default TopicList;

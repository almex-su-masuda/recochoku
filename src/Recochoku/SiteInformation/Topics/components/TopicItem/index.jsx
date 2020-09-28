// libs
import React from "react";
// components
import TopicContents from "./TopicContents";
import TopicItemImage from "./TopicItemImage";
// others
import "./style.scss";

const TopicItem = ({ topicContents }) => (
  <div className="topic-item-wrapper">
    <TopicItemImage />
    <TopicContents topicContents={topicContents} />
  </div>
);

export default TopicItem;

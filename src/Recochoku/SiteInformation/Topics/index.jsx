// libs
import React from "react";
// components
import TitleLabel from "./components/TitleLabel";
import TopicList from "./mains/TopicList";
// others
import "./style.scss";

const topicContents = [
  "【毎日宝くじ】無料クーポンがあたる♪",
  "あたりがでたら1曲無料",
  "【無料】映像とメッセージでプレイリストにしよう",
  "【初回1か月無料】レコチョクのサブスク"
];

const Topics = () => (
  <div className="topic-container-wrapper">
    <TitleLabel titleLabel="TOPICS" />
    <TopicList topicContents={topicContents} />
  </div>
);

export default Topics;

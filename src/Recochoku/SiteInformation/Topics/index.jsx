// libs
import React from "react";
// components
import InformationContainer from "../../../commons/InformationContainer";
// others
import "./style.scss";

const informationContents = [
  "【毎日宝くじ】無料クーポンがあたる♪",
  "あたりがでたら1曲無料",
  "【無料】映像とメッセージでプレイリストにしよう",
  "【初回1か月無料】レコチョクのサブスク"
];

const Topics = () => (
  <div className="topics-wrapper">
    <InformationContainer
      titleLabel="TOPICS"
      informationContents={informationContents}
    />
  </div>
);

export default Topics;

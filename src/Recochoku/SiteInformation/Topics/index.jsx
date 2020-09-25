// libs
import React from "react";
// components
import InformationContainer from "../../../commons/InformationContainer";
// others
import "./style.scss";

const informationContents = [
  "【毎日宝くじ】無料クーポンがあたる♪",
  "【毎日宝くじ】無料クーポンがあたる♪",
  "【毎日宝くじ】無料クーポンがあたる♪"
];

const Topics = () => (
  <div className="topics">
    <InformationContainer
      titleLabel="TOPICS"
      informationContents={informationContents}
    />
  </div>
);

export default Topics;

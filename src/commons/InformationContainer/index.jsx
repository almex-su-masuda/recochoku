// libs
import React from "react";
// conponents
import InformationList from "./mains/InformationList";
import InformationTitle from "./components/InformationTitle";
// others
import "./style.scss";

const InformationContainer = ({ informationTitle, informationContents }) => (
  <div className="information-container-wrapper">
    <InformationTitle informationTitle={informationTitle} />
    <InformationList informationContents={informationContents} />
  </div>
);

export default InformationContainer;

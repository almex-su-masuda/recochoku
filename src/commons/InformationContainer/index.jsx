// libs
import React from "react";
// conponents
import InformationList from "./main/InformationList";
import TitleLabel from "./components/TitleLabel";
// others
import "./style.scss";

const InformationContainer = ({ titleLabel, informationContents }) => (
  <div className="information-container-wrapper">
    <TitleLabel titleLabel={titleLabel} />
    <InformationList informationContents={informationContents} />
  </div>
);

export default InformationContainer;

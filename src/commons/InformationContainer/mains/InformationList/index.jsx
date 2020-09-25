// libs
import React from "react";
// components
import InformationContents from "../../components/InformationContents";
// others
import "./style.scss";

const InformationList = ({ informationContents }) => (
  <div className="information-list-wrapper">
    <InformationContents informationContents={informationContents} />
  </div>
);

export default InformationList;

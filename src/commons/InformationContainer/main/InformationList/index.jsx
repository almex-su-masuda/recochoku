// libs
import React from "react";
// components
import InformationItem from "../../components/InformationItem";
// others
import "./style.scss";

const InformationList = ({ informationContents }) => (
  <div className="information-list-wrapper">
    {informationContents.map(informationContents => (
      <InformationItem informationContents={informationContents} />
    ))}
  </div>
);

export default InformationList;

// libs
import React from "react";
// components
import InformationContents from "./InformationContents";
import InformationItemImage from "./InformationItemImage";
// others
import "./style.scss";

const InformationItem = ({ informationContents }) => (
  <div className="topic-item-wrapper">
    <InformationItemImage />
    <InformationContents informationContents={informationContents} />
  </div>
);

export default InformationItem;

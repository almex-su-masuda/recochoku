// libs
import React from "react";
// components
import InformationContents from "./InformationContents";
import InformationItemImage from "./InformationItemImage";

const InformationItem = ({ informationContents }) => (
  <div className="topic-item-wrapper">
    <InformationContents informationContents={informationContents} />
    <InformationItemImage />
  </div>
);

export default InformationItem;

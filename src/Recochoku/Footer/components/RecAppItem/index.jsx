// libs
import React from "react";
// components
import RecAppImage from "./RecAppImage";
import RecAppName from "./RecAppName";
import RecAppInformation from "./RecAppInfromation";
// others
import "./style.scss";

const RecAppItem = ({ recAppName, recAppInformation }) => (
  <div className="rec-app-item-wrapper">
    <RecAppImage />
    <div className="rec-app-item-wrapper-innner">
      <RecAppName recAppName={recAppName} />
      <RecAppInformation recAppInformation={recAppInformation} />
    </div>
  </div>
);

export default RecAppItem;

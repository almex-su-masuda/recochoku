// libs
import React from "react";
// components
import RecAppItem from "../RecAppItem";
// others
import "./style.scss";

const RecAppList = ({ recochokuService }) => (
  <div className="rec-app-list-wrapper">
    {recochokuService.map(recochokuService => (
      <RecAppItem
        key={recochokuService.recAppInformation}
        {...recochokuService}
      />
    ))}
  </div>
);

export default RecAppList;

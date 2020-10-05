// libs
import React from "react";
// components
import AppQrItem from "../AppQrItem";
// others
import "./style.scss";

const AppQrList = ({ appQrList }) => (
  <div className="app-qr-list-wrapper">
    {appQrList.map(appQrList => (
      <AppQrItem key={appQrList.appName} {...appQrList} />
    ))}
  </div>
);

export default AppQrList;

// libs
import React from "react";
// components
import AppQrItem from "../AppQrItem";
// others
import "./style.scss";

const AppQrList = ({ appCategory, appName, appStoreImage }) => (
  <div className="app-qr-list-wrapper">
    <AppQrItem
      appCategory={appCategory}
      appName={appName}
      appStoreImage={appStoreImage}
    />
    <AppQrItem />
  </div>
);

export default AppQrList;

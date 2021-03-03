// libs
import React from "react";
// components
import AppImage from "./AppImage";
import AppCategory from "./AppCategory";
import QrImage from "./QrImage";
import AppName from "./AppName";
import AppStoreImage from "./AppStoreImage";
// others
import "./style.scss";

const AppQrItem = ({ appCategory, appName, appStoreImage }) => (
  <div className="app-qr-item-wrapper">
    <AppImage />
    <div className="app-qr-item-wrapper-inner">
      <AppCategory appCategory={appCategory} />
      <AppName appName={appName} />
    </div>
    <AppStoreImage appStoreImage={appStoreImage} />
    <QrImage />
  </div>
);

export default AppQrItem;

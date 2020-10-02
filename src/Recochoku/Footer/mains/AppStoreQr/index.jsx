// libs
import React from "react";
// components
import FooterTitle from "../../components/FooterTitle";
import AppQrList from "../../components/AppQrList";
// others
import "./style.scss";

const AppStoreQr = () => (
  <div className="app-store-wrapper">
    <FooterTitle footerTitle="アプリ" />
    <AppQrList
      appCategory="音楽ダウンロードアプリ"
      appName="レコチョク"
      appStoreImage="Google Play"
    />
  </div>
);

export default AppStoreQr;

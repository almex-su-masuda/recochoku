// libs
import React from "react";
// components
import FooterTitle from "../../components/FooterTitle";
import AppQrList from "../../components/AppQrList";
// others
import "./style.scss";

const appQrList = [
  {
    appCategory: "音楽ダウンロードアプリ",
    appName: "レコチョク",
    appStoreImage: "Google Play"
  },
  {
    appCategory: "音楽ダウンロードアプリ",
    appName: "レコチョクplus+",
    appStoreImage: "App Store"
  }
];

const AppStoreQr = () => (
  <div className="app-store-wrapper">
    <FooterTitle footerTitle="アプリ" />
    <AppQrList appQrList={appQrList} />
  </div>
);

export default AppStoreQr;

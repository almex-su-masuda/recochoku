// libs
import React from "react";
// components
import AppStoreQr from "./mains/AppStoreQr";
import RecochokuServiceList from "./mains/RecochokuServiceList";
import SiteMap from "./mains/SiteMap";
import AboutRecochoku from "./mains/AboutRecochoku";
// others
import "./style.scss";

const Footer = () => (
  <div className="footer-wrapper">
    <div className="footer-wrapper-inner">
      <AppStoreQr />
      <RecochokuServiceList />
      <SiteMap />
      <AboutRecochoku />
    </div>
  </div>
);

export default Footer;

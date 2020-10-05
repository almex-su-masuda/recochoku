// libs
import React from "react";
// components
import ContentTitle from "../SiteMapItem/ContentTitle";
import SiteMapItem from "../SiteMapItem";
// others
import "./style.scss";

const SiteMapList = ({ contentTitle, siteContent }) => (
  <div className="site-map-list-wrapper">
    <ContentTitle contentTitle={contentTitle} />
    <SiteMapItem siteContent={siteContent} />
  </div>
);

export default SiteMapList;

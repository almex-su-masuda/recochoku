// libs
import React from "react";
// components
import ContentTitle from "../ContentTitle";
import SiteContent from "../SiteContent";
// others
import "./style.scss";

const SiteMapList = ({ contentTitle, siteContent = [] }) => (
  <div className="site-map-list-wrapper">
    <ContentTitle contentTitle={contentTitle} />
    {siteContent.map(siteContentItem => (
      <SiteContent key={siteContentItem} siteContent={siteContentItem} />
    ))}
  </div>
);

export default SiteMapList;

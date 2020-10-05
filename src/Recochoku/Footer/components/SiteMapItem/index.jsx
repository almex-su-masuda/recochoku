// libs
import React from "react";
// components
import SiteContent from "./SiteContent";
// others
import "./style.scss";

// const SiteMapItem = ({ siteContent }) => (
//   <div className="site-map-item-wrapper">
//     {siteContent.map(siteContentTitle => (
//       <SiteContent key={siteContent} siteContent={siteContentTitle} />
//     ))}
//   </div>
// );

const SiteMapItem = ({ siteContent }) => (
  <div className="site-map-item-wrapper">
    <SiteContent siteContent={siteContent} />
  </div>
);

export default SiteMapItem;

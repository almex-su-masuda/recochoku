// libs
import React from "react";
// components
import ContentTitle from "./ContentTitle";
import SiteContent from "./SiteContent";
// others
import "./style.scss";

// const SiteMapItem = ({ contentTitle, siteContent }) => (
//   <div className="site-map-item-wrapper">
//     <ContentTitle contentTitle={contentTitle} />
//     <div className="site-map-item-wrapper">
//       {siteContent.map(siteContent => (
//         <SiteContent {...siteContent} />
//       ))}
//     </div>
//   </div>
// );

const SiteMapItem = ({ contentTitle, siteContent }) => (
  <div className="site-map-item-wrapper">
    <ContentTitle contentTitle={contentTitle} />
    <div className="site-map-item-wrapper">
      <SiteContent siteContent={siteContent} />
    </div>
  </div>
);

export default SiteMapItem;

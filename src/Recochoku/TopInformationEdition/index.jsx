// libs
import React from "react";
// components
import NewArrivals from "./mains/NewArrivals";
import SiteInformation from "./mains/SiteInformation";
// others
import "./style.scss";

const TopInformationEdition = () => (
  <div className="top-information-edition-wrapper">
    <NewArrivals />
    <SiteInformation />
  </div>
);

export default TopInformationEdition;

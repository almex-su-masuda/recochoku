// libs
import React from "react";
// components
import NewArrivals from "./NewArrivals";
import SiteInformation from "./SiteInformation";
// others
import "./style.scss";

const TopInformationEdition = () => (
  <div className="top-information-edition-wrapper">
    <NewArrivals />
    <SiteInformation />
  </div>
);

export default TopInformationEdition;

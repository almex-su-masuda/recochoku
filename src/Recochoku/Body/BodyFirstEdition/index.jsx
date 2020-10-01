// libs
import React from "react";
// components
import NewArrivals from "./NewArrivals";
import SiteInformation from "./SiteInformation";
// others
import "./style.scss";

const BodyFirstEdition = () => (
  <div className="body-first-edition-wrapper">
    <NewArrivals />
    <SiteInformation />
  </div>
);

export default BodyFirstEdition;

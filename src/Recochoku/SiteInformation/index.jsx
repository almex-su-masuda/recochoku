// libs
import React from "react";
// compornents
import Topics from "./Topics";
import Information from "./Information";
// others
import "./style.scss";

const SiteInformation = () => (
  <div className="site-information-wrapper">
    <Topics />
    <Information />
  </div>
);

export default SiteInformation;

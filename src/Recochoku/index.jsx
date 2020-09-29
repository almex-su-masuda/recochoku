// libs
import React from "react";
// components
import SiteInformation from "./SiteInformation";
import PickupEdition from "./PickupEdition";
import SingleRanking from "./SingleRanking";
import NewArrivals from "./NewArrivals";
import BreakThrough from "./BreakThrough";
import SpecialPrice from "./SpecialPrice";
// others
import "./style.scss";

const Recochoku = () => (
  <div className="recochoku-wrapper">
    <NewArrivals />
    <SiteInformation />
    <SingleRanking />
    <PickupEdition />
    <BreakThrough />
    <SpecialPrice />
  </div>
);

export default Recochoku;

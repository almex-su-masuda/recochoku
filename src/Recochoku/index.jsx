// libs
import React from "react";
// components
import PickupEdition from "./PickupEdition";
import SingleRanking from "./SingleRanking";
import NewArrivals from "./NewArrivals";
// others
import "./style.scss";

const Recochoku = () => (
  <div className="recochoku-wrapper">
    <NewArrivals />
    <PickupEdition />
    <SingleRanking />
  </div>
);

export default Recochoku;

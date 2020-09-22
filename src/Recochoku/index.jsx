// libs
import React from "react";
// components
import PickupEdition from "./PickupEdition";
import SingleRanking from "./RankingContainer";
// others
import "./style.scss";

const Recochoku = () => (
  <div className="recochoku-wrapper">
    <PickupEdition />
    <SingleRanking />
  </div>
);

export default Recochoku;

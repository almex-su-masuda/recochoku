// libs
import React from "react";
// components
import AlbumRanking from "./AlbumRanking";
import SingleRanking from "./SingleRanking";
// others
import "./style.scss";

const BodySecondEdition = () => (
  <div className="body-second-edition-wrapper">
    <SingleRanking />
    <AlbumRanking />
  </div>
);

export default BodySecondEdition;

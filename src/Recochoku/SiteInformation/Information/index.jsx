// libs
import React from "react";
// components
import FavoriteArtistInformation from "./FavoriteArtistInformation";
import PurchaseEdition from "./PurchaseEdition";
// others
import "./style.scss";

const Information = () => (
  <div className="information-wrapper">
    <FavoriteArtistInformation />
    <div className="separating-line"></div>
    <PurchaseEdition />
  </div>
);

export default Information;

// libs
import React from "react";
// compornents
import Topics from "./Topics";
import FavoriteArtistInformation from "./FavoriteArtistInformation";
import PurchaseEdition from "./PurchaseEdition";
// others
import "./style.scss";

const SiteInformation = () => (
  <div className="site-information-wrapper">
    <Topics />
    <FavoriteArtistInformation />
    <PurchaseEdition />
  </div>
);

export default SiteInformation;

// libs
import React from "react";
// compornents
import Topics from "../../components/Topics";
import FavoriteArtistInformation from "../../components/FavoriteArtistInformation";
import PurchaseEdition from "../../components/PurchaseEdition";
// others
import "./style.scss";

const SiteInformation = () => (
  <div className="site-information-wrapper">
    <Topics />
    <FavoriteArtistInformation />
    <div className="separating-line"></div>
    <PurchaseEdition />
  </div>
);

export default SiteInformation;

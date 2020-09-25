// libs
import React from "react";
// components
import InformationContainer from "../../../commons/InformationContainer";
// others
import "./style.scss";

const informationContents = ["新着情報はありません。"];

const FavoriteArtistInformation = () => (
  <InformationContainer
    titleLabel="Myアーティストの新着"
    informationContents={informationContents}
  />
);

export default FavoriteArtistInformation;

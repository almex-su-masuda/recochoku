// libs
import React from "react";
// components
import BestAlbumList from "./BestAlbumList";
import BreakThrough from "./BreakThrough";
import CompilationAlbum from "./CompilationAlbumList";
import FamousSongList from "./FamousSongList";
import PickupEdition from "./PickupEdition";
import SpecialPrice from "./SpecialPrice";
// others
import "./style.scss";

const BodyThirdEdition = () => (
  <div className="body-third-edition-wrapper">
    <PickupEdition />
    <BreakThrough />
    <SpecialPrice />
    <BestAlbumList />
    <FamousSongList />
    <CompilationAlbum />
  </div>
);

export default BodyThirdEdition;

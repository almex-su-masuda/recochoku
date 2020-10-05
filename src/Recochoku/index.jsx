// libs
import React from "react";
// components
import TopEdition from "./TopEdition";
import AlbumRanking from "./AlbumRanking";
import BestAlbumList from "./BestAlbumList";
import BreakThrough from "./BreakThrough";
import CompilationAlbumList from "./CompilationAlbumList";
import FamousSongList from "./FamousSongList";
import GenreSelection from "./GenreSelection";
import PickupEdition from "./PickupEdition";
import SingleRanking from "./SingleRanking";
import SpecialPrice from "./SpecialPrice";
import TopInformationEdition from "./TopInformationEdition";
// otjers
import "./style.scss";

const Recochoku = () => (
  <div className="recochoku-wrapper">
    <div className="recohoku-wrapper-inner">
      <TopEdition />
      <TopInformationEdition />
    </div>
    <div className="recochoku-wrapper-inner">
      <SingleRanking />
      <AlbumRanking />
    </div>
    <div className="recochoku-wrapper-inner">
      <PickupEdition />
      <BreakThrough />
      <SpecialPrice />
      <BestAlbumList />
      <FamousSongList />
      <CompilationAlbumList />
    </div>
    <div className="recochoku-wrapper-inner">
      <GenreSelection />
    </div>
  </div>
);

export default Recochoku;

// libs
import React from "react";
// components
import SiteInformation from "./SiteInformation";
import PickupEdition from "./PickupEdition";
import SingleRanking from "./SingleRanking";
import AlbumRanking from "./AlbumRanking";
import NewArrivals from "./NewArrivals";
import BreakThrough from "./BreakThrough";
import SpecialPrice from "./SpecialPrice";
import BestAlbumList from "./BestAlbumList";
import FamousSongList from "./FamousSongList";
import CompilationAlbumList from "./CompilationAlbumList";
import GenreSelection from "./GenreSelection";
// others
import "./style.scss";

const Body = () => (
  <div className="body-wrapper">
    <NewArrivals />
    <SiteInformation />
    <SingleRanking />
    <AlbumRanking />
    <PickupEdition />
    <BreakThrough />
    <SpecialPrice />
    <BestAlbumList />
    <FamousSongList />
    <CompilationAlbumList />
    <GenreSelection />
  </div>
);

export default Body;

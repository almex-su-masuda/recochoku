// libs
import React from "react";
// components
import MoreButton from "./components/MoreButton";
import RankingTitle from "./components/RankingTitle";
import SongList from "./main/SongList";
// others
import "./style.scss";

const RankingContainer = ({ rankingTitle, songList }) => (
  <div className="ranking-container-wrapper">
    <RankingTitle rankingTitle={rankingTitle} />
    <MoreButton />
    <SongList songList={songList} />
  </div>
);

export default RankingContainer;

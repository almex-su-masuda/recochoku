// libs
import React from "react";
// components
import MoreButton from "./components/MoreButton";
import RankingTitle from "./components/RankingTitle";
import SongList from "./main/SongList";

// const songTitle = ["裸の心", "群青", "夜に駆ける", "紅蓮歌", "感電", "香水"];

const SingleRanking = () => (
  <div className="ranking-container">
    <MoreButton />
    <RankingTitle />
    <SongList />
  </div>
);

export default SingleRanking;

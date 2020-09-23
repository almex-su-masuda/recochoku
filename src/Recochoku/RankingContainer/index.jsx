// libs
import React from "react";
// components
import MoreButton from "./components/MoreButton";
import RankingTitle from "./components/RankingTitle";
import SongList from "./main/SongList";

/* const rankNumber = ["1", "2", "3", "4", "5", "6"];
const songTitle = ["裸の心", "群青", "夜に駆ける", "紅蓮歌", "感電", "香水"];
const singerName = ["あいみょん", "YOASOBI", "YOASOBI", "LISA", "米津玄師", "瑛人"]; */

/* const SingleRanking = () => (
  <div className="ranking-container">
    <MoreButton />
    <RankingTitle />
    <SongList rankNumber={rankNumber} songTitle={songTitle} singerName={singerName} />
  </div>
); */

const SingleRanking = () => (
  <div className="ranking-container">
    <MoreButton />
    <RankingTitle />
    <SongList />
  </div>
);

export default SingleRanking;

// libs
import React from "react";
// components
import RankingContainer from "../../../../commons/RankingContainer";
// others
import "./style.scss";

const songList = [
  {
    rankNumber: "1",
    songTitle: "裸の心",
    singerName: "あいみょん"
  },
  {
    rankNumber: "2",
    songTitle: "群青",
    singerName: "YOASOBI"
  },
  {
    rankNumber: "3",
    songTitle: "夜に駆ける",
    singerName: "YOASOBI"
  },
  {
    rankNumber: "4",
    songTitle: "紅蓮歌",
    singerName: "LISA"
  },
  {
    rankNumber: "5",
    songTitle: "感電",
    singerName: "米津玄師"
  },
  {
    rankNumber: "6",
    songTitle: "香水",
    singerName: "瑛人"
  }
];

const SingleRanking = () => (
  <RankingContainer rankingTitle="シングルランキング" songList={songList} />
);

export default SingleRanking;

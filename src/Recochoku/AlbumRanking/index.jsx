// libs
import React from "react";
// components
import RankingContainer from "../../commons/RankingContainer";
// others
import "./style.scss";

const songList = [
  {
    rankNumber: "1",
    songTitle: "おいしいパスタがあると聞いて",
    singerName: "あいみょん"
  },
  {
    rankNumber: "2",
    songTitle: "STRAY SHEEP",
    singerName: "米津玄師"
  },
  {
    rankNumber: "3",
    songTitle: "ひなたざか(Complete Edition)",
    singerName: "日向坂46"
  },
  {
    rankNumber: "4",
    songTitle: "Surper One - The 1st Album",
    singerName: "SuperM"
  },
  {
    rankNumber: "5",
    songTitle: "Make you happy",
    singerName: "NiziU"
  },
  {
    rankNumber: "6",
    songTitle: "Traveler",
    singerName: "Official髭男dism"
  }
];

const AlbumRanking = () => (
  <RankingContainer rankingTitle="アルバムランキング" songList={songList} />
);

export default AlbumRanking;

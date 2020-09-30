// libs
import React from "react";
// components
import RecommendSongContainer from "../../../commons/RecommendSongContainer";
// others
import "./style.scss";

const recommendSongList = [
  {
    recommendSongTitle: "夏恋バスケット♪",
    recommendSongSinger: "V.A."
  },
  {
    recommendSongTitle: "ワッツアップ～ザ・ベスト・ミックス 2020-2010～",
    recommendSongSinger: "ヴァリアス・アーティスト"
  },
  {
    recommendSongTitle: "夏!王道ベストヒッツ",
    recommendSongSinger: "V.A."
  },
  {
    recommendSongTitle: "Love Bouquet",
    recommendSongSinger: "ヴァリアス・アーティスト"
  },
  {
    recommendSongTitle: "I Love R&B -Brighten Up Your Day!-",
    recommendSongSinger: "ヴァリアス・アーティスト"
  },
  {
    recommendSongTitle: "プッチベスト20 2020",
    recommendSongSinger: "ハロー!プロジェクト"
  }
];

const FamousSongList = () => (
  <RecommendSongContainer
    recommendEditionTitle="夜空を歌った名曲集"
    recommendSongList={recommendSongList}
  />
);

export default FamousSongList;

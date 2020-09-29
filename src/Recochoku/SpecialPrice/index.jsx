// libs
import React from "react";
// components
import RecommendSongContainer from "../../commons/RecommendSongContainer";
// others
import "./style.scss";

const recommendSongList = [
  {
    recommendSongTitle: "ACOMPLETE~ALL SINGLES~",
    recommendSongSinger: "浜崎あゆみ",
    recommendSongPrice: "916"
  },
  {
    recommendSongTitle: "ACOMPLETE~ALL SINGLES~",
    recommendSongSinger: "浜崎あゆみ",
    recommendSongPrice: "916"
  },
  {
    recommendSongTitle: "ACOMPLETE~ALL SINGLES~",
    recommendSongSinger: "浜崎あゆみ",
    recommendSongPrice: "916"
  },
  {
    recommendSongTitle: "ACOMPLETE~ALL SINGLES~",
    recommendSongSinger: "浜崎あゆみ",
    recommendSongPrice: "916"
  },
  {
    recommendSongTitle: "ACOMPLETE~ALL SINGLES~",
    recommendSongSinger: "浜崎あゆみ",
    recommendSongPrice: "916"
  },
  {
    recommendSongTitle: "ACOMPLETE~ALL SINGLES~",
    recommendSongSinger: "浜崎あゆみ",
    recommendSongPrice: "916"
  }
];

const SpecialPrice = () => (
  <RecommendSongContainer
    recommendEditionTitle="スペシャルプライス"
    recommendSongList={recommendSongList}
  />
);

export default SpecialPrice;

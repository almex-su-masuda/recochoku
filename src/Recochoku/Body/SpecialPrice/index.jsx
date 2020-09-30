// libs
import React from "react";
// components
import RecommendSongContainer from "../../../commons/RecommendSongContainer";
// others
import "./style.scss";

const recommendSongList = [
  {
    recommendSongTitle: "ACOMPLETE~ALL SINGLES～",
    recommendSongSinger: "浜崎あゆみ",
    recommendSongPrice: "916"
  },
  {
    recommendSongTitle:
      "TRF 20th Anniversary BEST SINGLE Colletion × EZ DO DANCERCIZE",
    recommendSongSinger: "TRF",
    recommendSongPrice: "916"
  },
  {
    recommendSongTitle: "15YEARS-BEST HIT SELECTION-",
    recommendSongSinger: "globe",
    recommendSongPrice: "916"
  },
  {
    recommendSongTitle: "Fun! Fun! Fun!-The Best Drive Music 2-",
    recommendSongSinger: "ヴァリアス・アーティスト",
    recommendSongPrice: "917"
  },
  {
    recommendSongTitle: "Every Best Single ～COMPLETE～",
    recommendSongSinger: "Every Little Thing",
    recommendSongPrice: "2,037"
  },
  {
    recommendSongTitle: "30 y/o",
    recommendSongSinger: "絢香",
    recommendSongPrice: "1,069"
  },
  {
    recommendSongTitle: "MF10 -10th ANNIVERSARY BEST-",
    recommendSongSinger: "m-flo",
    recommendSongPrice: "1,222"
  },
  {
    recommendSongTitle: "BEST～third universe～ & 8th AL UNIVERSE",
    recommendSongSinger: "倖田來未",
    recommendSongPrice: "916"
  },
  {
    recommendSongTitle: "WHAT'S UP -VERY BEST OF SUMMER-",
    recommendSongSinger: "ヴァリアス・アーティスト",
    recommendSongPrice: "1,018"
  },
  {
    recommendSongTitle: "元気が出て家事もはかどる洋楽Best25",
    recommendSongSinger: "ヴァリアス・アーティスト",
    recommendSongPrice: "1,018"
  },
  {
    recommendSongTitle: "平成ヒット～洋楽オールスターズ～",
    recommendSongSinger: "ヴァリアス・アーティスト",
    recommendSongPrice: "1,223"
  }
];

const SpecialPrice = () => (
  <RecommendSongContainer
    recommendEditionTitle="スペシャルプライス"
    recommendSongList={recommendSongList}
  />
);

export default SpecialPrice;

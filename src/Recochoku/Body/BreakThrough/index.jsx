// libs
import React from "react";
// components
import RecommendSongContainer from "../../../commons/RecommendSongContainer";
// others
import "./style.scss";

const recommendSongList = [
  {
    recommendSongTitle: "君はさせてくれる",
    recommendSongSinger: "BBHF"
  },
  {
    recommendSongTitle: "僕らの生活",
    recommendSongSinger: "BBHF"
  },
  {
    recommendSongTitle: "涙の階段",
    recommendSongSinger: "BBHF"
  },
  {
    recommendSongTitle: "TIGHT ROPE",
    recommendSongSinger: "climbgrow"
  },
  {
    recommendSongTitle: "極彩色の夜へ",
    recommendSongSinger: "climbgrow"
  },
  {
    recommendSongTitle: "BLOOD MONDAY",
    recommendSongSinger: "climbgrow"
  }
];

const BreakThrough = () => (
  <RecommendSongContainer
    recommendEditionTitle="BreakThrough 2020年9月"
    recommendSongList={recommendSongList}
  />
);

export default BreakThrough;

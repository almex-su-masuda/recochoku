// libs
import React from "react";
// components
import RecommendSongContainer from "../../../../commons/RecommendSongContainer";
// others
import "./style.scss";

const recommendSongList = [
  {
    recommendSongTitle: "SKY-HI's THE BEST -COLLABORATION BEST-",
    recommendSongSinger: "SKY-HI"
  },
  {
    recommendSongTitle: "SKY-HI's THE BEST -POPS BEST-",
    recommendSongSinger: "SKY-HI"
  },
  {
    recommendSongTitle: "#TWICE3",
    recommendSongSinger: "TWICE"
  },
  {
    recommendSongTitle: "4",
    recommendSongSinger: "ヒトリエ"
  },
  {
    recommendSongTitle: "MAN WITH A BEST MISSION (Deluxe Edition)",
    recommendSongSinger: "MAN WITH A MISSION"
  },
  {
    recommendSongTitle: "TDF LIVE BEST",
    recommendSongSinger: "ももいろクローバーZ"
  }
];

const BestAlbum = () => (
  <RecommendSongContainer
    recommendEditionTitle="ベストアルバム一覧Pickup"
    recommendSongList={recommendSongList}
  />
);

export default BestAlbum;

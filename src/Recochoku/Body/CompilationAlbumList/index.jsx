// libs
import React from "react";
// components
import RecommendSongContainer from "../../../commons/RecommendSongContainer";
// others
import "./style.scss";

const recommendSongList = [
  {
    recommendSongTitle: "夜に駆ける",
    recommendSongSinger: "YOASOBI"
  },
  {
    recommendSongTitle: "星影のエール",
    recommendSongSinger: "GReeeeN"
  },
  {
    recommendSongTitle: "見上げてごらん夜の星を",
    recommendSongSinger: "坂本　九"
  },
  {
    recommendSongTitle: "アンドロメダ",
    recommendSongSinger: "aiko"
  },
  {
    recommendSongTitle: "You're My only Shinin' Star",
    recommendSongSinger: "中島美穂"
  },
  {
    recommendSongTitle: "星のファンファーレ",
    recommendSongSinger: "新しい地図join ミュージック"
  }
];

const CompilationAlbumList = () => (
  <RecommendSongContainer
    recommendEditionTitle="コンピレーションアルバム一覧"
    recommendSongList={recommendSongList}
  />
);

export default CompilationAlbumList;

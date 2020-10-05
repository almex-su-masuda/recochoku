// libs
import React from "react";
// components
import RecommendSongImage from "./RecommendSongImage";
import RecommendSongPrice from "./RecommendSongPrice";
import RecommendSongSinger from "./RecommendSongSinger";
import RecommendSongTitle from "./RecommendSongTitle";
// others
import "./style.scss";

const RecommendSongItem = ({
  recommendSongTitle,
  recommendSongSinger,
  recommendSongPrice
}) => (
  <div className="recommend-song-item-wrapper">
    <RecommendSongImage />
    <RecommendSongTitle recommendSongTitle={recommendSongTitle} />
    <RecommendSongSinger recommendSongSinger={recommendSongSinger} />
    <RecommendSongPrice recommendSongPrice={recommendSongPrice} />
  </div>
);

export default RecommendSongItem;

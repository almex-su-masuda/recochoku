// libs
import React from "react";
// components
import RecommendSongItem from "../../components/RecommendSongItem";
// others
import "./style.scss";

const RecommendSongList = ({ recommendSongList }) => (
  <div className="recommend-song-list-wrapper">
    {recommendSongList.map(recommendSongItem => (
      <RecommendSongItem
        key={recommendSongItem.recommendSongTitle}
        {...recommendSongItem}
      />
    ))}
  </div>
);

export default RecommendSongList;

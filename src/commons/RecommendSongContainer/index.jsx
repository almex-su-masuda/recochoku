// libs
import React from "react";
// components
import MoreButton from "./components/MoreButton";
import RecommendEditonTitle from "./components/RecommendEditionTitle";
import ReommendSongList from "./mains/RecommendSongList";
// others
import "./style.scss";

const RecommendSongContainer = ({
  recommendEditionTitle,
  recommendSongList
}) => (
  <div className="recommend-song-container-wrapper">
    <RecommendEditonTitle recommendEditionTitle={recommendEditionTitle} />
    <MoreButton />
    <ReommendSongList recommendSongList={recommendSongList} />
  </div>
);

export default RecommendSongContainer;

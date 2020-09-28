// libs
import React from "react";
// components
import RankNumber from "./RankNumber";
import SongImage from "./SongImage";
import SongSinger from "./SongSinger";
import SongTitle from "./SongTitle";
// others
import "./style.scss";

const SongItem = ({ rankNumber, singerName, songTitle }) => (
  <div className="song-item-wrapper">
    <RankNumber rankNumber={rankNumber} />
    <SongImage />
    <SongTitle songTitle={songTitle} />
    <SongSinger singerName={singerName} />
  </div>
);

export default SongItem;

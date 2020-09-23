// libs
import React from "react";
// components
import RankNumber from "./RankNumber";
import SongImage from "./SongImage";
import SongSinger from "./SongSinger";
import SongTitle from "./SongTitle";
// others
import "./style.scss";

/* function SongItem = ({ rankNumber }, { songTitle }, { singerName }) => {
  return (
    <div className="song-item-wrapper">
      <RankNumber rankNumber={rankNumber[i]} />
      <SongImage />
      <SongSinger singerName={singerName[i]} />
      <SongTitle songTitle={songTitle[i]} />
    </div>
  );
}; */

function SongItem() {
  return (
    <div className="song-item-wrapper">
      <RankNumber rankNumber="1" />
      <SongImage />
      <SongSinger singerName="a" />
      <SongTitle songTitle="b" />
    </div>
  );
}

export default SongItem;

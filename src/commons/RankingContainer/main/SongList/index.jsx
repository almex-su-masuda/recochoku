// libs
import React from "react";
// components
import SongItem from "../../components/SongItem";
// others
import "./style.scss";

const SongList = ({ songList }) => (
  <div className="song-list-wrapper">
    {songList.map(songItem => (
      <SongItem key={songItem.rankNumber} {...songItem} />
    ))}
  </div>
);

export default SongList;

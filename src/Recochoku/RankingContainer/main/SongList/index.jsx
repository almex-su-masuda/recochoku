// libs
import React from "react";
// components
import SongItem from "../../components/SongItem";
// others
import "./style.scss";

const SongList = () => (
  <div className="song-list-wrapper">
    <SongItem />
    <SongItem />
    <SongItem />
    <SongItem />
    <SongItem />
    <SongItem />
  </div>
);

export default SongList;

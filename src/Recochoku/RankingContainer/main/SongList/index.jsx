// libs
import React from "react";
// components
import SongItem from "../../components/SongItem";
// others
import "./style.scss";

/* const SongList = ({rankNumber}, {songTitle}, {singerName}) => (
  <div className="song-list-wrapper">
    <SongItem rankNumber={rankNumber} songTitle={songTitle} singerName={singerName} />
  </div>
); */

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

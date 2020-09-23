// libs
import React from "react";
// components
import SongItem from "../../components/SongItem";
// others
import "./style.scss";

/* const SongList = ({rankNumber}, {songTitle}, {singerName}) => (
  rankNumber.map((rankNumber, i) => {
    <div className="song-list-wrapper">
      <SongItem rankNumber={rankNumber[i]}, songTitle={songTitle[i]}, singerName={singerName[i]} />
    </div>
  });
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

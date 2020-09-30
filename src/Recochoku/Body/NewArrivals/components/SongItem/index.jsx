// libs
import React from "react";
// components
import SongImage from "./SongImage";
import SongInformation from "./SongInformation";
import SongSinger from "./SongSinger";
import SongTitle from "./SongTitle";
// others
import "./style.scss";

const SongItem = ({ songTitle, songSinger, songInformation }) => (
  <div className="new-arrival-song-item-wrapper">
    <SongImage />
    <SongTitle songTitle={songTitle} />
    <SongSinger songSinger={songSinger} />
    <SongInformation songInformation={songInformation} />
  </div>
);

export default SongItem;

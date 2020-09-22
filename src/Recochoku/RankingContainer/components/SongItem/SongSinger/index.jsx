// libs
import React from "react";
// others
import "./style.scss";

// arrow function
function SongSinger(props) {
  return <div className="song-singer-wrapper">{props.singerName}</div>;
}

export default SongSinger;

// libs
import React from "react";
// components
import NewArrivalSongItem from "../NewArrivalSongItem";
// others
import "./style.scss";

const songList = [
  {
    songTitle: "灯ル祈リ",
    songSinger: "コブクロ",
    songInformation: "カンテレ・フジテレビ系火曜夜9時連続ドラマ『DI......』"
  },
  {
    songTitle: "ひなたざか",
    songSinger: "日向坂46"
  },
  {
    songTitle: "Whenever You Call",
    songSinger: "嵐"
  },
  {
    songTitle: "CONTINUE?",
    songSinger: "A.B.C.Z"
  },
  {
    songTitle: "Sayonara",
    songSinger: "平井 大"
  },
  {
    songTitle: "Justice",
    songSinger: "中島美嘉"
  },
  {
    songTitle: "turn over?",
    songSinger: "Mr.Children",
    songInformation: "TBS系 火曜ドラマ「おカネの切れ目が恋のはじまり.....」"
  },
  {
    songTitle: "Time Warp",
    songSinger: "Perfume"
  }
];

const NewArrivalList = () => (
  <div className="new-arrival-list-wrapper">
    {songList.map(songItem => (
      <NewArrivalSongItem key={songItem.songTitle} {...songItem} />
    ))}
  </div>
);

export default NewArrivalList;

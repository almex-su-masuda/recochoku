// libs
import React from "react";
// components
import GenreItem from "../../components/GenreItem";
// others
import "./style.scss";

const genreName = [
  "J-POP",
  "アニメ",
  "邦楽ヒップホップ/R$B/レゲエ",
  "邦楽ロック",
  "邦楽ダンス/エレクトロニカ",
  "K-POP/ワールド・ミュージック",
  "洋楽総合",
  "洋楽ポップス",
  "洋楽ヒップホップ/R&B/レゲエ",
  "洋楽ロック",
  "洋楽ダンス/エレクトロニカ",
  "歌謡曲/演歌",
  "ジャズ",
  "クラシック"
];

const GenreList = () => (
  <div className="genre-list-wrapper">
    {genreName.map(genreName => (
      <GenreItem key={genreName} genreName={genreName} />
    ))}
  </div>
);

export default GenreList;

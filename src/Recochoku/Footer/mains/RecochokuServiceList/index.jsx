// libs
import React from "react";
// components
import FooterTitle from "../../components/FooterTitle";
import RecAppList from "../../components/RecAppList";
// others
import "./style.scss";

const recochokuService = [
  {
    recAppName: "RecMusic",
    recAppInformation: "音楽聞き放題サブスク、ミュージックビデオも見放題"
  },
  {
    recAppName: "RecTV",
    recAppInformation:
      "音楽が好きなあなたの想いを映像とメッセージでプレイリスト化できるサービス"
  },
  {
    recAppName: "WIZY",
    recAppInformation: "音楽の新しいカタチを届ける"
  },
  {
    recAppName: "Eggs",
    recAppInformation: "アーティストとリスナーを繋ぐ新しい無料音楽プレイヤー"
  },
  {
    recAppName: "PlayPASS",
    recAppInformation: "プレイパス対応音楽プレイヤー"
  },
  {
    recAppName: "レコチョク　メロディ",
    recAppInformation: "人気曲の着信メロディが全部取り放題！"
  },
  {
    recAppName: "AKB48グループ映像倉庫",
    recAppInformation: "AKB48グループ映像倉庫"
  },
  {
    recAppName: "レコチョク",
    recAppInformation: "Nintendo Switchでも音楽を楽しもう！"
  },
  {
    recAppName: "レコチョク",
    recAppInformation: "ニンテンドー3DSでも音楽を楽しもう"
  }
];

const RecochokuServiceList = () => (
  <div className="recochoku-service-list">
    <FooterTitle footerTitle="レコチョクサービス一覧" />
    <RecAppList recochokuService={recochokuService} />
  </div>
);

export default RecochokuServiceList;

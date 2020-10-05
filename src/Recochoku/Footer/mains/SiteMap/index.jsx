// libs
import React from "react";
// components
import FooterTitle from "../../components/FooterTitle";
import SiteMapItem from "../../components/SiteMapItem";
// others
import "./style.scss";

const rankingContent = [
  "シングルランキング（デイリー）",
  "シングルランキング（週間）",
  "シングルランキング（月間）",
  "アルバムランキング（デイリー）",
  "アルバムランキング（週間）",
  "アルバムランキング（月間）",
  "ビデオランキング（デイリー）",
  "ビデオランキング（週間）",
  "ビデオランキング（月間）",
  "ハイレゾシングルランキング（デイリー）",
  "ハイレゾシングルランキング（週間）",
  "ハイレゾシングルランキング（月間）",
  "ハイレゾアルバムランキング（デイリー）",
  "ハイレゾアルバムランキング（週間）",
  "ハイレゾアルバムランキング（月間）"
];

const genreContent = [
  "J-POP",
  "アニメ",
  "邦楽ヒップホップ/R&B/レゲエ",
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

const pickupContent = [
  "最新ドラマ主題歌",
  "最新アニソン",
  "街でよく聴く最新ヒット曲",
  "ジャニーズ特集",
  "ディズニー特集",
  "スタジオジブリ名曲集",
  "ベストアルバム一覧",
  "コンピレーションアルバム一覧",
  "2010年代ヒット曲",
  "2000年代ヒット曲",
  "1990年代ヒット曲",
  "1980年代ヒット曲",
  "1970年代ヒット曲",
  "1950~1960年代ヒット曲"
];

const PopularArtist = [
  "米津玄師",
  "あいみょん",
  "星野源",
  "BTS",
  "BUMP OF CHICKEN",
  "宇多田ヒカル",
  "Mr.Children",
  "B'z",
  "サザンオールスターズ",
  "松任谷由実",
  "スピッツ",
  "安室奈美恵",
  "RADWIMPS",
  "西野カナ",
  "back number",
  "乃木坂46",
  "欅坂46",
  "Aimer",
  "Lisa",
  "DREAMS COME TRUE"
];

const SiteMap = () => (
  <div className="site-map-wrapper">
    <FooterTitle footerTitle="サイトマップ" />
    <div className="site-map-wrapper-inner">
      <SiteMapItem contentTitle="レコチョク TOP" />
    </div>
    <div className="site-map-wrapper-inner">
      <SiteMapItem contentTitle="ストアからのお知らせ" />
    </div>
    <div className="site-map-wrapper-inner">
      <SiteMapItem contentTitle="ランキング" siteContent={rankingContent} />
    </div>
    <div className="site-map-wrapper-inner">
      <SiteMapItem contentTitle="ジャンル" siteContent={genreContent} />
    </div>
    <div className="site-map-wrapper-inner">
      <SiteMapItem contentTitle="特集" siteContent={pickupContent} />
    </div>
    <div className="site-map-wrapper-inner">
      <SiteMapItem
        contentTitle="話題のアーティスト"
        siteContent={PopularArtist}
      />
    </div>
    <div className="site-map-wrapper-inner">
      <SiteMapItem contentTitle="レコチョクアフィリエイトについて" />
    </div>
  </div>
);

export default SiteMap;

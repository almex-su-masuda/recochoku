// libs
import React from "react";
// components
import FooterTitle from "../../components/FooterTitle";
import SiteMapList from "../../components/SiteMapList";
// others
import "./style.scss";

const rankingContent = [
  "シングルランキング（デイリー）\n",
  "シングルランキング（週間）\n",
  "シングルランキング（月間）\n",
  "アルバムランキング（デイリー）\n",
  "アルバムランキング（週間）\n",
  "アルバムランキング（月間）\n",
  "ビデオランキング（デイリー）\n",
  "ビデオランキング（週間）\n",
  "ビデオランキング（月間）\n",
  "ハイレゾシングルランキング（デイリー）\n",
  "ハイレゾシングルランキング（週間）\n",
  "ハイレゾシングルランキング（月間）\n",
  "ハイレゾアルバムランキング（デイリー）\n",
  "ハイレゾアルバムランキング（週間）\n",
  "ハイレゾアルバムランキング（月間）\n"
];

const genreContent = [
  "J-POP\n",
  "アニメ\n",
  "邦楽ヒップホップ/R&B/レゲエ\n",
  "邦楽ロック\n",
  "邦楽ダンス/エレクトロニカ\n",
  "K-POP/ワールド・ミュージック\n",
  "洋楽総合\n",
  "洋楽ポップス\n",
  "洋楽ヒップホップ/R&B/レゲエ\n",
  "洋楽ロック\n",
  "洋楽ダンス/エレクトロニカ\n",
  "歌謡曲/演歌\n",
  "ジャズ\n",
  "クラシック\n"
];

const pickupContent = [
  "最新ドラマ主題歌\n",
  "最新アニソン\n",
  "街でよく聴く最新ヒット曲\n",
  "ジャニーズ特集\n",
  "ディズニー特集\n",
  "スタジオジブリ名曲集\n",
  "ベストアルバム一覧\n",
  "コンピレーションアルバム一覧\n",
  "2010年代ヒット曲\n",
  "2000年代ヒット曲\n",
  "1990年代ヒット曲\n",
  "1980年代ヒット曲\n",
  "1970年代ヒット曲\n",
  "1950~1960年代ヒット曲\n"
];

const PopularArtist = [
  "米津玄師\n",
  "あいみょん\n",
  "星野源\n",
  "BTS\n",
  "BUMP OF CHICKEN\n",
  "宇多田ヒカル\n",
  "Mr.Children\n",
  "B'z\n",
  "サザンオールスターズ\n",
  "松任谷由実\n",
  "スピッツ\n",
  "安室奈美恵\n",
  "RADWIMPS\n",
  "西野カナ\n",
  "back number\n",
  "乃木坂46\n",
  "欅坂46\n",
  "Aimer\n",
  "Lisa\n",
  "DREAMS COME TRUE\n"
];

const SiteMap = () => (
  <div className="site-map-wrapper">
    <FooterTitle footerTitle="サイトマップ" />
    <div className="site-map-wrapper-inner">
      <div className="saite-map-wrapper-inner-inner">
        <SiteMapList contentTitle="レコチョク TOP" />
        <SiteMapList contentTitle="ストアからのお知らせ" />
        <SiteMapList contentTitle="ランキング" siteContent={rankingContent} />
      </div>
      <div className="saite-map-wrapper-inner-inner">
        <SiteMapList contentTitle="ジャンル" siteContent={genreContent} />
        <SiteMapList contentTitle="特集" siteContent={pickupContent} />
      </div>
      <div className="saite-map-wrapper-inner-inner">
        <SiteMapList
          contentTitle="話題のアーティスト"
          siteContent={PopularArtist}
        />
        <SiteMapList contentTitle="レコチョクアフィリエイトについて" />
      </div>
    </div>
  </div>
);

export default SiteMap;

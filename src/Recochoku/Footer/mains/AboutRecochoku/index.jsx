// libs
import React from "react";
// components
import FooterRinkList from "../../components/FooterRinkList";
import FooterLogoList from "../../components/FooterLogoList";
// others
import "./style.scss";

const rinkTitle = [
  "困ったときは",
  "利用規約",
  "特定商取引法に基づく表記",
  "プライバシーポリシー",
  "会社概要",
  "採用情報",
  "法人のお客様",
  "公式Twitterアカウント"
];

const footerLogo = ["ロゴ1", "ロゴ2", "ロゴ3", "ロゴ4"];

const AboutRecochoku = () => (
  <div className="about-recochoku-wrapper">
    <FooterRinkList rinkTitle={rinkTitle} />
    <FooterLogoList footerLogo={footerLogo} />
  </div>
);

export default AboutRecochoku;

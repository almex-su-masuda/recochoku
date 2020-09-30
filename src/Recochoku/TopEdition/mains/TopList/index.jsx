// libs
import React from "react";
// components
import TopEditionImage from "../../components/TopEditionImage";
// others
import "./style.scss";

const topEditionContents = ["初回1か月無料", "コブクロ", "日向坂", "ARASHI"];

const TopList = () => (
  <div className="top-list-wrapper">
    {topEditionContents.map(topEditionContents => (
      <TopEditionImage
        key={topEditionContents}
        topEditionContents={topEditionContents}
      />
    ))}
  </div>
);

export default TopList;

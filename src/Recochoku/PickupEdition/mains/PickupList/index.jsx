// libs
import React from "react";
// components
import PickupItem from "../../components/PickupItem/index";
// others
import "./style.scss";

const pickupList = [
  "激安コンピ",
  "2020年代ドラマ主題歌",
  "花火を歌った名曲",
  "ジャニーズ特集",
  "最新ドラマ主題歌",
  "最新アニソン"
];

const PickupList = () => (
  <div className="pickup-list-wrapper">
    {pickupList.map(pickupItemName => (
      <PickupItem key={pickupItemName} keypickupItemName={pickupItemName} />
    ))}
  </div>
);

export default PickupList;

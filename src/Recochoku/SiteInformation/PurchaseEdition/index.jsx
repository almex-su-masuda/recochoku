// libs
import React from "react";
// components
import InformationContainer from "../../../commons/InformationContainer";
// others
import "./style.scss";

const informationContents = ["アルバムスマート購入対象商品はありません。"];

const PurchaseEdition = () => (
  <InformationContainer
    titleLabel="アルバムスマート購入"
    informationContents={informationContents}
  />
);

export default PurchaseEdition;

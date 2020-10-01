// libs
import React from "react";
// components
import BodyFirstEdition from "./BodyFirstEdition";
import BodySecondEdition from "./BodySecondEdition";
import BodyThirdEdition from "./BodyThirdEdition";
import BodyFourthEdition from "./BodyFourthEdition";

// others
import "./style.scss";

const Body = () => (
  <div className="body-wrapper">
    <BodyFirstEdition />
    <BodySecondEdition />
    <BodyThirdEdition />
    <BodyFourthEdition />
  </div>
);

export default Body;

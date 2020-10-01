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
    <div className="body-wrapper-inner">
      <BodyFirstEdition />
      <BodySecondEdition />
      <BodyThirdEdition />
      <BodyFourthEdition />
    </div>
  </div>
);

export default Body;

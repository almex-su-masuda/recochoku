// libs
import React from "react";
// components
import BodyFirstEdition from "./BodyFirstEdition";
import BodySecondEdition from "./BodySecondEdition";
import BodyThirdEdition from "./BodyThirdEdition";
import GenreSelection from "./GenreSelection";

// others
import "./style.scss";

const Body = () => (
  <div className="body-wrapper">
    <BodyFirstEdition />
    <BodySecondEdition />
    <BodyThirdEdition />
    <GenreSelection />
  </div>
);

export default Body;

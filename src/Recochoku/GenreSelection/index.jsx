// libs
import React from "react";
// components
import TitleLabel from "./components/TitleLabel";
import GenreList from "./mains/GenreList";
// others
import "./style.scss";

const GenreSelection = () => (
  <div className="genre-selection-wrapper">
    <TitleLabel />
    <GenreList />
  </div>
);

export default GenreSelection;

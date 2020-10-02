// libs
import React from "react";
// components
import MoreButton from "../../components/MoreButton";
import TitleLabel from "../../components/TitleLabel";
import NewArrivalList from "../../components/NewArrivalList";
// others
import "./style.scss";

const NewArrivals = () => (
  <div className="new-arrivals-wrapper">
    <TitleLabel />
    <MoreButton />
    <NewArrivalList />
  </div>
);

export default NewArrivals;

import React from "react";
import "./style.scss";
import MainTitle from "./components/MainTitle/index";
import MoreButton from "./components/MoreButton/index";
import PickupList from "./mains/PickupList";

function PickupEdition() {
  return (
    <div className="pickup-edition">
      <MainTitle />
      <MoreButton />
      <PickupList />
    </div>
  );
}

export default PickupEdition;

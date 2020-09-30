import React from "react";
import "./style.scss";

const PickupItem = ({ pickupItemName }) => (
  <div className="pickup-item-wrapper">{pickupItemName}</div>
);

export default PickupItem;

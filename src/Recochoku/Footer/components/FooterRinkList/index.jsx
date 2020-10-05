// libs
import React from "react";
// components
import FooterRinkTitle from "../FooterRinkTitle";
// others
import "./style.scss";

const FooterRinkList = ({ rinkTitle }) => (
  <div className="footer-rink-list-wrapper">
    {rinkTitle.map(footerrinkTitle => (
      <FooterRinkTitle key={footerrinkTitle} rinkTitle={footerrinkTitle} />
    ))}
  </div>
);

export default FooterRinkList;

// libs
import React from "react";
// components
import FooterLogo from "../FooterLogo";
// others
import "./style.scss";

const FooterLogoList = ({ footerLogo }) => (
  <div className="footer-logo-list-wrapper">
    {footerLogo.map(footerLogoName => (
      <FooterLogo key={footerLogoName} footerLogo={footerLogoName} />
    ))}
  </div>
);

export default FooterLogoList;

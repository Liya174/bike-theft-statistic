import React from "react";
import s from "./Footer.module.css";
import "../../App.css";

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className="container">
        <div className={s.footerContainer}>Made by Liia K, 2021</div>
      </div>
    </div>
  );
};

export default Footer;

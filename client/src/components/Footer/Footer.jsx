import React from "react";
import classNames from "classnames/bind";
import style from "./Footer.module.scss";
import Content from "./Content/Content";
import Subscribe from "./Subscribe/Subcribe";
import Payment from "./Payment/Payment";
import Copyright from "./Copyright/Copyright";
import FooterLogo from "./Logo/Logo";
const cx = classNames.bind(style);
const Footer = (props) => {
  return (
    <footer className={cx("container")}>
      <FooterLogo />
      <Content />
      <Subscribe />
      <Payment />
      <Copyright />
    </footer>
  );
};

export default Footer;

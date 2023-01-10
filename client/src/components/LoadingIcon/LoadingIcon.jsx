import React from "react";
import classNames from "classnames/bind";
import style from "./LoadingIcon.module.scss";
const cx = classNames.bind(style);
const LoadingIcon = ({ color }) => {
  return (
    <div className={cx("lds-ring")}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default LoadingIcon;

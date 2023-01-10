import React from "react";

import LoadingIcon from "~/components/LoadingIcon/LoadingIcon";

import classNames from "classnames/bind";
import style from "./LoadingPage.module.scss";
const cx = classNames.bind(style);

const LoadingPage = (props) => {
  return <div className={`${cx("loading-page-wrapper")}`}></div>;
};

export default LoadingPage;

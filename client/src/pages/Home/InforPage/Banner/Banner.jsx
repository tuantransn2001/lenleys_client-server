import React from "react";
import {
  inforBannerImg1,
  inforBannerImg2,
  inforBannerImg3,
} from "~/components/Img/Img";

import classNames from "classnames/bind";
import style from "./Banner.module.scss";
const cx = classNames.bind(style);
const renderInforImgs = () => {
  const inforImgArr = [inforBannerImg1, inforBannerImg2, inforBannerImg3];
  return inforImgArr.map((inforImgEl, index) => {
    return (
      <li className={cx("infor-banner-img-item")} key={index}>
        <a href="#" className={cx("infor-banner-img-link")}>
          {inforImgEl()}
        </a>
      </li>
    );
  });
};

const Banner = (props) => {
  return (
    <div className={`${cx("infor-banner-wrapper")} page-section-boder-bottom`}>
      <ul className={cx("infor-banner-img-list")}>{renderInforImgs()}</ul>
      <h3 className="h3-size-default text-center">
        AT LENLEYS HOME, YOU CAN FIND EVERYTHING YOU NEED TO CREATE THE HOME YOU
        HAVE ALWAYS WANTED, THE HOME YOU DESERVE.
      </h3>
    </div>
  );
};

export default Banner;

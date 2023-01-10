import React from "react";
import faceook_icon from "~/assets/img/socials/facebook_icon.png";
import instagram_icon from "~/assets/img/socials/instagram_icon.png";
import tiktok_icon from "~/assets/img/socials/tiktok_icon.png";
import copyright from "~/assets/img/Footer/copyright/copyright.png";
import classNames from "classnames/bind";
import style from "./Copyright.module.scss";
const cx = classNames.bind(style);
const data = {
  policys: ["Pravicy", "Terms"],
  socialIcons: [faceook_icon, instagram_icon, tiktok_icon],
};
const renderPrivatePolicy = () => {
  return data.policys.map((content, index) => {
    return (
      <li className={cx("private-policy-item")} key={index}>
        <a href="#" className={cx("private-policy-item-link")}>
          {content}
        </a>
      </li>
    );
  });
};
const renderSocialIconLink = () => {
  return data.socialIcons.map((icon_src, index) => {
    return (
      <li className={cx("social-icon-item")} key={index}>
        <a href="#" className={`${cx("social-icon-link-wrapper")} flex-center`}>
          <img src={icon_src} alt="Facebook" className={cx("social-icon")} />
        </a>
      </li>
    );
  });
};
const Copyright = (props) => {
  return (
    <div className={cx("container")}>
      <div className="grid wide">
        <div className="row x-center">
          <div className="c-3 gutter flex-item-horizontal-start">
            <ul className={cx("private-policy-list")}>
              {renderPrivatePolicy()}
            </ul>
          </div>
          <div className="c-6 gutter flex-center">
            <div className={cx("content-wrapper")}>
              <p className={cx("content")}>
                © 2022 Lenleys. All Rights Reserved.
              </p>
              <a href="#" className={cx("img-link-wrapper")}>
                <img src={copyright} alt="Coppy right" className={cx("img")} />
              </a>
            </div>
          </div>
          <div className="c-3 gutter flex-horizontal-flex-end">
            <ul className={cx("social-icon-list")}>{renderSocialIconLink()}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;

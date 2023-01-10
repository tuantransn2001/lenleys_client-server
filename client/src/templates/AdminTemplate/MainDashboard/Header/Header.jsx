import React from "react";
import SearchBar from "~/components/SearchBar/SearchBar";
import Button from "~/components/helpers/Button/Button";
import userAvatar from "~/assets/img/MainDashboard/profile_img.png";
import { faEnvelope, faBell } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import style from "./Header.module.scss";
const cx = classNames.bind(style);

const userActionBtnCustomStyle = {
  backgroundColor: "transparent",
};

const UserAction = (props) => {
  return (
    <div className={cx("user-action-wrapper")}>
      <Button
        size="medium"
        type="primary"
        icon={faEnvelope}
        customStyle={userActionBtnCustomStyle}
      />
      <Button
        size="medium"
        type="primary"
        icon={faBell}
        customStyle={userActionBtnCustomStyle}
      />

      <div className={cx("user-avatar-wrapper")}>
        <img src={userAvatar} alt="user avatar" />
      </div>
    </div>
  );
};

const Header = (props) => {
  return (
    <header className={cx("admin-maindashboard-header")}>
      <div className={cx("admin-maindashboard-header-left")}>
        <SearchBar />
      </div>
      <div className={cx("admin-maindashboard-header-right")}>
        <UserAction />
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import TreeView from "./TreeView/TreeView";
import Button from "~/components/helpers/Button/Button";
import { adminLogo } from "~/components/Img/Img";
import profile_img from "~/assets/img/MainDashboard/profile_img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import style from "./Sidebar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

const Header = (props) => {
  return (
    <header className={cx("sidebar-header")}>
      <div className={cx("logo-wrapper")}>{adminLogo()}</div>
      <Button size="medium" type="primary" ghost>
        <FontAwesomeIcon icon={faBars} />
      </Button>
    </header>
  );
};

const UserAction = (props) => {
  return (
    <div className={cx("user-action-wrapper")}>
      <span className={cx("user-avatar-wrapper")}>
        <img src={profile_img} alt="user avatar" />
      </span>
      <span className={cx("user-information")}>
        <span className={cx("user-name")}>Tuấn Trần</span>
        <span className={cx("user-role")}>Administrator</span>
      </span>
    </div>
  );
};

const SideBar = (props) => {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <UserAction />
      <TreeView />
    </div>
  );
};

export default SideBar;

// todo: Custom search bar

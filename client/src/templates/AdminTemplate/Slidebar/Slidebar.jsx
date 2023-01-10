import React from "react";
import Button from "~/components/helpers/Button/Button";
import { adminLogo } from "~/components/Img/Img";
import profile_img from "~/assets/img/MainDashboard/profile_img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import style from "./Slidebar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

const naviateData = [
  {
    icon: faUser,
    content: "User",
  },
  {
    icon: faCartShopping,
    content: "Product",
  },
];

const Header = (props) => {
  return (
    <header className={cx("slidebar-header")}>
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

const Navigate = (props) => {
  return "Navigate";
  // <div className={cx("navigate-list-wrapper")}>
  //   <ul className={cx("navigate-list")}>
  //     {naviateData.map(({ icon, content }) => {
  //       return (
  //         <li className={cx("navigate-item")} key={icon}>
  //           <span className={cx("navigate-item-content")}>
  //             <span className={cx("icon-wrapper")}>
  //               <FontAwesomeIcon icon={icon} />
  //             </span>

  //             <span className={cx("content")}>{content}</span>
  //           </span>
  //         </li>
  //       );
  //     })}
  //   </ul>
  // </div>
};

const SlideBar = (props) => {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <UserAction />
      <Navigate />
    </div>
  );
};

export default SlideBar;

// todo: Custom search bar

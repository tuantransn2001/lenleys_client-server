import React from "react";
// ? FontAweSomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import style from "./UserFeedBack.module.scss";

const cx = classNames.bind(style);

const UserFeedBack = ({ feedBack, index }) => {
  const { rareArr, title, content, name, time } = feedBack;
  const renderRareStars = () => {
    return rareArr.map((rare, index) => {
      return <FontAwesomeIcon icon={rare} key={index} />;
    });
  };
  return (
    <div className={cx("user-feed-back-wrapper")}>
      <ul className={cx("user-feed-back-rare-list")}>{renderRareStars()}</ul>
      <h1 className={cx("user-feed-back-title")}>{`"${title}"`}</h1>
      <p className={cx("user-feed-back-content")}>{content}</p>
      <span
        className={cx("user-feed-back-name-and-time")}
      >{`${name}-${time}`}</span>
    </div>
  );
};

export default UserFeedBack;

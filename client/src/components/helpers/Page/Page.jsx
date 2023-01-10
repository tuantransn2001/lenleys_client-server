import React from "react";

import classNames from "classnames/bind";
import style from "./Page.module.scss";

const cx = classNames.bind(style);

const Page = ({ title, children }) => {
  const renderPageHeader = () => {
    return (
      title && (
        <header className={cx("page-header")}>
          <h1 className={cx("page-title")}>{title}</h1>
        </header>
      )
    );
  };
  return (
    <div className={cx("page-container")}>
      {renderPageHeader()}

      <div className={`${cx("page-body")} grid wide`}>
        <div className="row">
          <div className="c-12 gutter">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Page;

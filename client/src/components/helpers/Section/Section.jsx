import React from "react";

import classNames from "classnames/bind";
import style from "./Section.module.scss";

const cx = classNames.bind(style);

const Section = (props) => {
  const { title, children, borderOptions } = props;
  const containerClassName = cx(
    "section-container",
    borderOptions && {
      [`border-${borderOptions.direction}`]:
        borderOptions.direction !== false ? true : false,
    }
  );
  const renderTitle = () => {
    return (
      title && (
        <div className="row">
          <div className="c-12 gutter flex-center">
            <h1 className={cx("section-title")}>{title}</h1>
          </div>
        </div>
      )
    );
  };

  return (
    <section className={containerClassName}>
      <div className={`${cx("section-content-wrapper")} grid wide`}>
        {renderTitle()}
        <div className="row">
          <div className="c-12 gutter">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default Section;

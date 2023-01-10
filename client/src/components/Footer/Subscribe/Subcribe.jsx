import classNames from "classnames/bind";
import React from "react";
import Button from "~/components/helpers/Button/Button";
import style from "./Subcribe.module.scss";
const cx = classNames.bind(style);
const Subscribe = (props) => {
  return (
    <div className={cx("container")}>
      <div className="grid wide">
        <div className="row">
          <div className="c-12 gutter flex-center">
            <div className={cx("input-wrapper")}>
              <h1 className={cx("input-content")}>
                SIGN UP FOR OFFERS AND NEWS
              </h1>
              <div className={cx("input-bar")}>
                <input
                  type="text"
                  className={cx("input")}
                  placeholder="Enter your mail"
                />
                <Button size="medium" type="primary">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

import React from "react";
import flooringDesginImg from "~/assets/img/ContactPage/contact/flooring_design_studio.png";
import interiorDesginImg from "~/assets/img/ContactPage/contact/interiors_style_studio.png";
import classNames from "classnames/bind";
import style from "./ShopAvailable.module.scss";
const cx = classNames.bind(style);
const ShopAvailable = (props) => {
  return (
    <div className="c-12">
      <div className={`${cx("available-at-our-store")} grid`}>
        <div className="row">
          <div className="c-12 gutter">
            <h3 className={cx("available-at-our-canterbury-store-title")}>
              Available at our canterbury store
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="c-6 gutter">
            <div className={cx("available-at-our-canterbury-store-col")}>
              <img
                src={flooringDesginImg}
                alt="Flooring"
                className={cx("available-at-our-canterbury-store-col-img")}
              />
              <a
                href="#"
                className={cx("available-at-our-canterbury-store-col-link")}
              >
                flooringstudio@lenleys.co.uk
              </a>
            </div>
          </div>
          <div className="c-6 gutter">
            <div className={cx("available-at-our-canterbury-store-col")}>
              <img
                src={interiorDesginImg}
                alt="Flooring"
                className={cx("available-at-our-canterbury-store-col-img")}
              />
              <a
                href="#"
                className={cx("available-at-our-canterbury-store-col-link")}
              >
                interiorstudio@lenleys.co.uk
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopAvailable;

import React from "react";
import payments from "~/assets/img/Footer/payments/payments.png";
import classNames from "classnames/bind";
import style from "./Payment.module.scss";
const cx = classNames.bind(style);
const Payment = (props) => {
  return (
    <div className={cx("container")}>
      <div className="grid wide">
        <div className="row">
          <div className="c-12 gutter flex-center">
            <a href="#" className={cx("img-link-wrapper")}>
              <img src={payments} alt="Payments" className={cx("img")} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

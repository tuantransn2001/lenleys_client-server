import React from "react";
import Button from "~/components/helpers/Button/Button";
import small_cart_icon from "~/assets/img/shoppingBasket/small_cart_icon.png";
import classNames from "classnames/bind";
import style from "./EmptyCartContent.module.scss";
const cx = classNames.bind(style);
const EmptyCartContent = (props) => {
  return (
    <>
      <div className={`${cx("cart-img-wrapper")} flex-center`}>
        <img
          src={small_cart_icon}
          alt="Small cart icon"
          className={cx("cart-img")}
        />
      </div>
      <p className={cx("cart-slider-content")}>No products in the basket</p>
      <Button size="small" type="primary">
        Continue Shopping
      </Button>
    </>
  );
};

export default EmptyCartContent;

import React, { useState, useEffect, useRef } from "react";
import LoadingPage from "~/pages/LoadingPage/LoadingPage";
import Button from "~/components/helpers/Button/Button";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useGet, fetchApi } from "~/services/utils/fetch";

import { useDispatch } from "react-redux";
import { DISPLAY_CART_MODAL } from "~/redux/constants/CartConstants/CartConstants";

import classNames from "classnames/bind";
import style from "./CartWithProductInfo.module.scss";
const cx = classNames.bind(style);

const quantityPickerBtnCustomStyle = {
  border: ".1rem solid #333",
  backgroundColor: "transparent",
  width: "2.4rem",
  height: "2.2rem",
  borderRadius: "0",
  fontSize: ".8rem",
  color: "#333",
};
const quantityContentStyle = {
  padding: "0.5rem 0.8rem",
  width: "3rem",
  height: "2.2rem",
  borderTop: ".1rem solid #333",
  borderBottom: ".1rem solid #333",
};

const CartWithProductInfo = (props) => {
  const minusButtonRef = useRef(null);
  const plusButtonRef = useRef(null);
  const { fetchResultData, isLoading } = useGet("shopping-cart");

  useEffect(() => {
    const minusButtonEl = minusButtonRef.current;
    const plusButtonEl = plusButtonRef.current;
  }, []);
  const renderCartList = () => {
    return (
      fetchResultData.data ||
      [].map((cartItem, index) => {
        return isLoading ? (
          <LoadingPage />
        ) : (
          <div className="c-12 gutter" key={index}>
            <div className={cx("cart-item-card-wrapper")}>
              <a href="#" className={cx("cart-item-img-wrapper")}>
                <img
                  src={cartItem.product_imgSrc}
                  alt={cartItem.product_name}
                />
              </a>
              <div className={cx("cart-item-content")}>
                <div className={cx("cart-item-content-top")}>
                  <span className={cx("product-name")}>
                    {cartItem.product_name}
                  </span>
                  <span className={cx("product-desc")}>medium</span>
                  <span className={cx("product-desc")}>
                    {cartItem.product_category}
                  </span>
                </div>
                <div className={cx("cart-item-content-bottom")}>
                  <div className={cx("mini-cart-quantity-picker-wrapper")}>
                    <div className="x-center">
                      <Button
                        customStyle={quantityPickerBtnCustomStyle}
                        type={null}
                        size={null}
                        icon={faMinus}
                        ref={minusButtonRef}
                      />
                      <span
                        className="flex-center"
                        style={quantityContentStyle}
                      >
                        {cartItem.quantity}
                      </span>
                      <Button
                        customStyle={quantityPickerBtnCustomStyle}
                        type={null}
                        size={null}
                        icon={faPlus}
                        ref={plusButtonRef}
                      />
                    </div>
                  </div>
                  <span className={cx("cart-item-total")}>{`£ ${
                    cartItem.quantity * 1 * (cartItem.unit_price * 1)
                  }`}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })
    );
  };

  return (
    <div className="grid">
      <div className="row">
        <div className="c-12 gutter">
          <div className={cx("cart-total-wrapper")}>
            <span className={cx("paragraph-text-style-strong")}>Subtotal:</span>
            <span className={cx("paragraph-text-style")}>£1,199.00</span>
          </div>
        </div>
      </div>

      <div className="row mt-1">
        <div className="c-12 gutter">
          <div className={cx("cart-buttons")}>
            <Button size="medium" type="view-basket" maxSize>
              View Basket
            </Button>
            <Button background="red" size="medium" type="primary" maxSize>
              Checkout
            </Button>
          </div>
        </div>
      </div>

      <div className="row mt-1">{renderCartList()}</div>
    </div>
  );
};

export default CartWithProductInfo;

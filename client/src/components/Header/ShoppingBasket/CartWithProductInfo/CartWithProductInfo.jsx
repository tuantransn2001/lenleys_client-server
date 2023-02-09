import React, { useEffect, useRef } from "react";

import QuantityPicker from "~/components/helpers/QuantityPicker/QuantityPicker";
import Button from "~/components/helpers/Button/Button";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteCartItem } from "~/routers/shopping-cart-routers";
import { DISPLAY_CART_MODAL } from "~/redux/constants/CartConstants/CartConstants";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { handleCaculateSubtotal } from "~/common/common";

import classNames from "classnames/bind";
import style from "./CartWithProductInfo.module.scss";
const cx = classNames.bind(style);

const CartWithProductInfo = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const viewBasketBtnRef = useRef(null);

  const cartList = useSelector((state) => state.CartReducer.cartList);
  const subTotal = handleCaculateSubtotal(cartList);

  useEffect(() => {
    const viewBasketBtnEl = viewBasketBtnRef.current;
    viewBasketBtnEl &&
      viewBasketBtnEl.addEventListener("click", (e) => {
        navigate("/home/basket");
        dispatch({
          type: DISPLAY_CART_MODAL,
          payload: {
            userAction: "hide",
          },
        });
      });
  }, []);

  return (
    <div className="grid">
      <div className="row">
        <div className="c-12 gutter">
          <div className={cx("cart-total-wrapper")}>
            <span className={cx("paragraph-text-style-strong")}>Subtotal:</span>
            <span className={cx("paragraph-text-style")}>£ {subTotal}</span>
          </div>
        </div>
      </div>

      <div className="row mt-1">
        <div className="c-12 gutter">
          <div className={cx("cart-buttons")}>
            <Button
              size="medium"
              type="view-basket"
              maxSize
              ref={viewBasketBtnRef}
            >
              View Basket
            </Button>
            <Button background="red" size="medium" type="primary" maxSize>
              Checkout
            </Button>
          </div>
        </div>
      </div>

      <div className="row mt-2">
        {cartList &&
          cartList.map((cartItem) => (
            <div className="c-12 gutter" key={cartItem.cart_item_id}>
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
                    <QuantityPicker
                      id={cartItem.cart_item_id}
                      quantity={cartItem.quantity}
                    />
                    <span className={cx("cart-item-total")}>{`£ ${
                      cartItem.quantity * 1 * (cartItem.unit_price * 1)
                    }`}</span>
                  </div>
                </div>

                <Button
                  ghost
                  icon={faXmark}
                  onClick={(e) => {
                    deleteCartItem(cartItem.cart_item_id, dispatch);
                  }}
                  customStyle={{
                    height: "max-content",
                    fontSize: "11px",
                    color: "#c20114",
                  }}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CartWithProductInfo;

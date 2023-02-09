import React, { useState, useEffect } from "react";

import EmptyCartContent from "./EmptyCartContent/EmptyCartContent";
import CartWithProductInfo from "./CartWithProductInfo/CartWithProductInfo";
import Button from "~/components/helpers/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSetCartList } from "~/routers/shopping-cart-routers";

import { DISPLAY_CART_MODAL } from "~/redux/constants/CartConstants/CartConstants";
import { useSelector, useDispatch } from "react-redux";

import classNames from "classnames/bind";
import style from "./ShoppingBasket.module.scss";

const cx = classNames.bind(style);

const ShoppingCart = (props) => {
  const dispatch = useDispatch();

  const cartList = useSelector((state) => state.CartReducer.cartList);
  const isCartModalOn = useSelector((state) => state.CartReducer.isCartModalOn);

  useSetCartList();
  const renderCartSection = () => {
    const isCartEmpty = cartList.length === 0;
    if (isCartEmpty) {
      return <EmptyCartContent />;
    }
    return <CartWithProductInfo />;
  };

  return (
    <div
      className={cx("cart-slidebar-wrapper", {
        show: isCartModalOn,
      })}
    >
      <>
        <header className={cx("cart-slidebar-header")}>
          <>
            <h1 className={cx("cart-slidebar-title")}>Shopping Basket</h1>
            <span className={`${cx("shop-cart-count")} flex-center`}>
              {cartList.length}
            </span>
          </>
          <Button
            type="close-shopping-basket"
            size={null}
            ghost
            onClick={(e) => {
              dispatch({
                type: DISPLAY_CART_MODAL,
                payload: {
                  userAction: "hide",
                },
              });
            }}
          >
            <FontAwesomeIcon icon={faXmark} />
          </Button>
        </header>
        <section className={cx("cart-slider-body")}>
          {renderCartSection()}
        </section>
      </>
    </div>
  );
};

export default ShoppingCart;

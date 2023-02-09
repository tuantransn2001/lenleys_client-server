import React, { useState, useEffect, useRef } from "react";

import QuantityPicker from "~/components/helpers/QuantityPicker/QuantityPicker";
import Page from "~/components/helpers/Page/Page";
import Button from "~/components/helpers/Button/Button";
import { trunc } from "~/common/common";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { fetchApi } from "~/services/utils/fetch";
import { useTitle } from "~/customizes/hooks";
import { useSelector, useDispatch } from "react-redux";
import { DELETE_ITEM } from "~/redux/constants/CartConstants/CartConstants";

import className from "classnames/bind";
import style from "./ViewBasketPage.module.scss";
const cx = className.bind(style);

const BasketInformation = () => {
  const dispatch = useDispatch();

  const cartList = useSelector((state) => state.CartReducer.cartList);

  const tableHead = ["", "Product", "Price", "Quantity", "Subtotal"];

  const handleDeleteCartItem = async (id) => {
    const fetchResultData = await fetchApi.delete(`shopping-cart/by_id/${id}`);

    if (fetchResultData.data.status === "success") {
      dispatch({
        type: DELETE_ITEM,
        payload: {
          id,
        },
      });
    } else {
      console.log("Handle Delete Cart Item is working wrong !");
    }
  };

  const renderTableRow = () => {
    return cartList.map((cartItem) => {
      return (
        <tr
          className={cx("view-basket-body-head-row")}
          key={cartItem.product_id}
        >
          <td style={{ marginRight: "2rem" }}>
            <div className="x-center">
              <Button
                icon={faXmark}
                ghost
                onClick={(e) => {
                  handleDeleteCartItem(cartItem.cart_item_id);
                }}
              />
              <img
                style={{ marginLeft: "0.4rem" }}
                src={cartItem.product_imgSrc}
                alt={cartItem.product_name}
                width="70"
                height="70"
              />
            </div>
          </td>

          <td style={{ width: "19.5rem", marginRight: "4rem" }}>
            <div className={cx("product-information-column")}>
              <span className={cx("product-name")}>
                {trunc(cartItem.product_name, 28)}
              </span>
              <span className={cx("product-desc")}>
                {cartItem.product_category}
              </span>
            </div>
          </td>
          <td
            className={cx("product-price-subtotal")}
            style={{ marginRight: "13rem" }}
          >
            £ {cartItem.unit_price}
          </td>
          <td style={{ marginRight: "13rem" }}>
            <QuantityPicker
              quantity={cartItem.quantity}
              id={cartItem.cart_item_id}
            />
          </td>
          <td className={cx("product-price-subtotal")}>
            £ {cartItem.unit_price * cartItem.quantity}
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <table className={cx("view-basket-table-wrapper")}>
        <thead>
          <tr className={cx("view-basket-table-head-row")}>
            {tableHead.map((el) => (
              <td>{el}</td>
            ))}
          </tr>
        </thead>
        <tbody>{renderTableRow()}</tbody>
      </table>
      <div className={`${cx("promo-updateTable-wrapper")} grid`}>
        <div className="row">
          <div className="c-6 gutter flex-item-horizontal-start">
            <div className={cx("apply-promo-wrapper")}>
              <input type="text" placeholder="Promo Code" />
              <Button type="primary" size="small">
                Apply Promo
              </Button>
            </div>
          </div>
          <div className="c-6 gutter flex-item-horizontal-end">
            <Button type="primary" size="small">
              Update Basket
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

const BasketCheckoutBox = () => {
  return (
    <div className={cx("basket-checkout-wrapper")}>
      <h4 className={cx("basket-title")}>Basket Totals</h4>
      <div className={cx("basket-content-line-1-wrapper")}>
        <span className={cx("basket-cart-strong-text")}>Subtotal:</span>
        <span className={cx("basket-cart-default-text")}>£ 1,293.75</span>
      </div>
      <div className={cx("basket-content-line-2-wrapper")}>
        <span className={cx("basket-cart-strong-text")}>Shipping:</span>
        <span className={cx("basket-cart-default-text")}>
          Enter your address to view shipping options
        </span>
        <Button linkDirection="#">Calculate shipping</Button>
      </div>
      <div className={cx("basket-content-line-3-wrapper")}>
        <span className={cx("basket-cart-strong-text")}>Total:</span>
        <span className={cx("basket-cart-default-text")}>
          £ 1,293.75{" "}
          <span style={{ fontSize: "1.3rem", fontWeight: 500 }}>
            (include 20,0 VAT)
          </span>
        </span>
      </div>
      <Button type="primary" size="medium" maxSize>
        CHECK OUT
      </Button>
    </div>
  );
};

const ViewBasketPage = (props) => {
  useTitle("Complete Your Orders - Lenleys");

  return (
    <Page title="Complete your order">
      <div className="grid wide">
        <div className="row">
          <div className="c-7 gutter">
            <BasketInformation />
          </div>

          <div className="c-5 gutter">
            <BasketCheckoutBox />
          </div>
        </div>
      </div>
    </Page>
  );
};

export default ViewBasketPage;

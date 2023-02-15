import React from "react";

import Button from "~/components/helpers/Button/Button";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { DELETE_ITEM } from "~/redux/constants/CartConstants/CartConstants";
import { fetchApi } from "~/services/utils/fetch";

import classNames from "classnames/bind";
import style from "./CartList.module.scss";
const cx = classNames.bind(style);

const deleteItem = (id, dispatch) => {
  fetchApi.delete(`shopping-cart/by_id/${id}`).then((response) => {
    if (response.data.status === "success") {
      dispatch({
        type: DELETE_ITEM,
        payload: {
          id,
        },
      });
    }
  });
};

const CartList = (props) => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.CartReducer.cartList);

  return (
    <div className="row mt-2">
      {cartList.map((productItem) => {
        return (
          <div className="c-12 gutter" key={productItem.cart_item_id}>
            <div className={cx("cart-item-card-wrapper")}>
              <a href="#" className={cx("cart-item-img-wrapper")}>
                <img
                  src={productItem.product_imgSrc}
                  alt={productItem.product_name}
                />
              </a>

              <div className={cx("cart-item-content")}>
                <div className={cx("cart-item-content-top")}>
                  <span className={cx("product-name")}>
                    {productItem.product_name}
                  </span>
                  <span className={cx("product-desc")}>medium</span>
                  <span className={cx("product-desc")}>
                    {productItem.product_category}
                  </span>
                </div>
                <div className={cx("cart-item-content-bottom")}>
                  <span className={cx("cart-item-total")}>{`£ ${
                    productItem.quantity * 1 * (productItem.unit_price * 1)
                  }`}</span>
                </div>
              </div>

              <Button
                ghost
                icon={faXmark}
                onClick={(e) => {
                  deleteItem(productItem.cart_item_id, dispatch);
                }}
                customStyle={{
                  height: "max-content",
                  fontSize: "11px",
                  color: "#c20114",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartList;

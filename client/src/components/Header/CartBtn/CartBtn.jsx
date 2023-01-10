import React from "react";
import Button from "~/components/helpers/Button/Button";
import ShoppingBasket from "../ShoppingBasket/ShoppingBasket";
import { cartIcon } from "~/components/Img/Img";

import { DISPLAY_CART_MODAL } from "~/redux/constants/CartConstants/CartConstants";
import { useDispatch } from "react-redux";

const CartBtn = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      <Button
        type="widget-elementor"
        ghost
        size={null}
        onClick={(e) => {
          dispatch({
            type: DISPLAY_CART_MODAL,
            payload: {
              userAction: "show",
            },
          });
        }}
      >
        {cartIcon()}
      </Button>
      <ShoppingBasket />
    </>
  );
};
export default CartBtn;

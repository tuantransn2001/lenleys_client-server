import {
  DISPLAY_CART_MODAL,
  ADD_PRODUCT_TO_CART,
} from "~/redux/constants/CartConstants/CartConstants";

const initialState = {
  isCartModalOn: false,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_CART_MODAL: {
      if (action.payload.userAction === "show") {
        state.isCartModalOn = true;
      } else {
        state.isCartModalOn = false;
      }
      return { ...state };
    }
    case ADD_PRODUCT_TO_CART: {
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

export default CartReducer;

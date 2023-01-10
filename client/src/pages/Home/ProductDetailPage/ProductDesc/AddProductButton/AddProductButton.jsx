import React, { useState, useEffect, useRef } from "react";
import Button from "~/components/helpers/Button/Button";

import { fetchApi } from "~/services/utils/fetch";
import { useDispatch } from "react-redux";
import { DISPLAY_CART_MODAL } from "~/redux/constants/CartConstants/CartConstants";

const AddProductButton = (props) => {
  const dispatch = useDispatch();
  const addProductButtonRef = useRef(null);
  const { product_id, product_name, unit_price } = props.productDetail;
  const [buttonStatus, setButtonStatus] = useState(null);

  useEffect(() => {
    const handleAddProductToCart = async () => {
      setButtonStatus("loading");
      const fetchResultData = await fetchApi("shopping-cart", {
        product_id,
        product_name,
        unit_price,
      });
      const isFetchSuccess = fetchResultData.status === 200;
      if (isFetchSuccess) {
        dispatch({
          type: DISPLAY_CART_MODAL,
          payload: { userAction: "show" },
        });
        setButtonStatus("success");
      } else {
        setButtonStatus("fail");
      }
    };
    const addProductButtonEl = addProductButtonRef.current;

    addProductButtonEl &&
      addProductButtonEl.addEventListener("click", handleAddProductToCart);

    return () => {
      addProductButtonEl &&
        addProductButtonEl.removeEventListener("click", handleAddProductToCart);
    };
  }, []);

  return (
    <Button
      type="primary"
      size="medium"
      status={buttonStatus}
      maxSize
      ref={addProductButtonRef}
    >
      Add to basket
    </Button>
  );
};

export default AddProductButton;

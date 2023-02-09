import React from "react";

import Button from "~/components/helpers/Button/Button";

import { useDispatch } from "react-redux";
import { UPDATE_ITEM } from "~/redux/constants/CartConstants/CartConstants";

import { fetchApi } from "~/services/utils/fetch";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import style from "./QuantityPicker.module.scss";
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

const handleUpdateProductQuantity = async (direction, id, dispatch) => {
  const fetchResultData = await fetchApi.put(
    `shopping-cart/${direction}/${id}}`
  );
  const { data, status } = fetchResultData;
  if (status === 201) {
    const productUpdate = data.data;
    dispatch({
      type: UPDATE_ITEM,
      payload: {
        updateData: {
          updateItemId: id,
          updateItemData: { quantity: productUpdate.quantity },
        },
      },
    });
  } else {
    // ! Alert
  }
};
const QuantityPicker = (props) => {
  const dispatch = useDispatch();
  const { quantity, id } = props;

  // ? Quantity get from cart item data
  return (
    <div className={cx("mini-cart-quantity-picker-wrapper")}>
      <div className="x-center">
        <Button
          customStyle={quantityPickerBtnCustomStyle}
          type={null}
          size={null}
          icon={faMinus}
          onClick={(e) => {
            handleUpdateProductQuantity("minus", id, dispatch);
          }}
        />
        <span className="flex-center" style={quantityContentStyle}>
          {quantity}
        </span>
        <Button
          customStyle={quantityPickerBtnCustomStyle}
          type={null}
          size={null}
          icon={faPlus}
          onClick={(e) => {
            handleUpdateProductQuantity("plus", id, dispatch);
          }}
        />
      </div>
    </div>
  );
};

export default QuantityPicker;

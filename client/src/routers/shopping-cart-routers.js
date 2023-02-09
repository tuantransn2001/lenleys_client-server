import { useEffect } from "react";
import { fetchApi } from "~/services/utils/fetch";

import { useDispatch } from "react-redux";
import {
  SET_CART_LIST,
  DELETE_ITEM,
} from "~/redux/constants/CartConstants/CartConstants";

export const useSetCartList = async () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchApi
      .get("shopping-cart")
      .then((response) => {
        dispatch({
          type: SET_CART_LIST,
          payload: {
            data: response.data,
          },
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
};

export const deleteCartItem = async (id, dispatch) => {
  fetchApi
    .delete(`shopping-cart/by_id/${id}`)
    .then((response) => {
      console.log(response);
      dispatch({
        type: DELETE_ITEM,
        payload: {
          id,
        },
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

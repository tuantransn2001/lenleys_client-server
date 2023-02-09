import React from "react";
import { fetchApi } from "~/services/utils/fetch";
const handleDeleteProduct = async (event, id) => {
  const fetchResult = await fetchApi.post(`product/${id}`);

  try {
    const { status } = fetchResult;
    if (status === 201) {
      window.location.reload();
    } else {
      console.log("Fetch Api - Delete user is working wrong!!");
    }
  } catch (err) {
    console.log(err);
  }
};
const DeleteProductButton = (props) => {
  const { configType, id } = props;
  return <></>;
};

export default DeleteProductButton;

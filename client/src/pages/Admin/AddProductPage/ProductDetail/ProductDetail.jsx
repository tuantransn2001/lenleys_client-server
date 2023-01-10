import React, { useState, useEffect } from "react";

import Button from "~/components/helpers/Button/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

import { fetchApi } from "~/services/utils/fetch";

import classNames from "classnames/bind";
import style from "./ProductDetail.module.scss";

const cx = classNames.bind(style);

const handleMakeRequest = async (setState) => {
  const fetchResult = await fetchApi.get("product/2");
  try {
    const { data, status } = fetchResult;
    if (status === 200) {
      setState((prevState) => {
        return {
          ...prevState,
          ...data,
        };
      });
    } else {
      console.log("HandleMakeRequest is working wrong!!");
    }
  } catch (err) {
    console.log(err);
  }
};
const ProductDetail = (props) => {
  const [currentProduct, setCurrentProduct] = useState({
    id: 1,
    name: "Not found",
    description: "Not found",
    price: "Not found",
    imgSrc: "Not found",
    category: "Not found",
    subCategory: "Not found",
  });

  useEffect(() => {
    handleMakeRequest(setCurrentProduct);
  }, []);

  return (
    <div className={cx("product-detail-wrapper")}>
      <div className={cx("product-img-wrapper")}>
        <img
          src={currentProduct.imgSrc}
          alt={currentProduct.name}
          className={cx("product-img")}
        />
      </div>
      <div className={cx("product-info")}>
        <span className={cx("product-name")}>Pooma</span>
        <span className={cx("product-category")}>Skate shoes</span>
      </div>
      <div className={cx("product-rare-and-price")}>
        <span className={cx("product-rare")}>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </span>

        <span className={cx("product-price")}>
          <span>${currentProduct.price} </span> $99,99
        </span>
      </div>
      <div className={cx("product-description")}>
        <span className={cx("product-description-label")}>Description</span>
        <span className={cx("product-description-content")}>
          {currentProduct.description}
        </span>
      </div>
      <div className={cx("product-controller-btns")}>
        <div className="grid">
          <div className="row">
            <div className="c-6 gutter">
              <Button size="small" type="primary" maxSize>
                Edit
              </Button>
            </div>
            <div className="c-6 gutter">
              <Button size="small" type="primary" maxSize>
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

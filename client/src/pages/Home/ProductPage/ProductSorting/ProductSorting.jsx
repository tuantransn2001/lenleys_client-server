import React from "react";
import DropDown from "~/components/helpers/DropDown/DropDown";
import classNames from "classnames/bind";
import style from "./ProductSorting.module.scss";
const cx = classNames.bind(style);

const sortingDropDownData = [
  {
    value: "default",
    content: "default sorting",
  },
  {
    value: "popular",
    content: "sort by popularity",
  },
  {
    value: "lastest",
    content: "sort by lastest",
  },
  {
    value: "low2high",
    content: "sort by price: low to high",
  },
  {
    value: "high2low",
    content: "sort by price: high to low",
  },
];

const ProductSorting = (props) => {
  return (
    <div className={cx("products-sorting-wrapper")}>
      <span className={cx("products-result-count")}>
        Showing 1-18 of 205 results
      </span>
      <div className={cx("products-sorting-dropdown-wrapper")}>
        <DropDown options={sortingDropDownData} />
      </div>
    </div>
  );
};

export default ProductSorting;

import React from "react";
import Button from "~/components/helpers/Button/Button";
import { fetchApi, useGet } from "~/services/utils/fetch";
import classNames from "classnames/bind";
import style from "./CategoryQuickView.module.scss";
const cx = classNames.bind(style);

const data = [
  "interest free credit",
  "interior design",
  "delivery services",
  "customer reviews",
];

const renderServiceBtn = () => {
  return data.map((service, index) => {
    return (
      <div className="c-3 gutter" key={index}>
        <Button type="category-quick-view" size={null} maxSize>
          {service}
        </Button>
      </div>
    );
  });
};

const ServicesList = (props) => {
  return (
    <div className={cx("wrapper")}>
      <div className="grid wide">
        <div className="row">{renderServiceBtn()}</div>
      </div>
    </div>
  );
};

export default ServicesList;

// todo: Link most popular category -> view category products

import React from "react";
import product_1 from "~/assets/img/HomePage/productDelivery/product_delivery_1.png";
import product_2 from "~/assets/img/HomePage/productDelivery/product_delivery_2.png";
import product_3 from "~/assets/img/HomePage/productDelivery/product_delivery_3.png";
import product_4 from "~/assets/img/HomePage/productDelivery/product_delivery_4.png";

import Section from "~/components/helpers/Section/Section";

import classNames from "classnames/bind";
import style from "./ProductDelivery.module.scss";

const cx = classNames.bind(style);

const data = [
  {
    img: product_1,
    name: "BOUTIQUE TEAL 2 SEATER SOFA",
    price: "1,479.00",
  },
  {
    img: product_2,
    name: "MADDOX CHAISE END RECLINER SOFA",
    price: "3,060.00",
  },
  {
    img: product_3,
    name: "BOUTIQUE ROYAL BLUE LOUNGE CHAIR",
    price: "1,015.00",
  },
  {
    img: product_4,
    name: "SKETCH FABRIC OCCASIONAL CHAIR",
    price: "699.00",
  },
];
const ProductDelivery = (props) => {
  return (
    <Section
      title="Ready for delivery"
      borderOptions={{
        direction: "bottom",
      }}
    >
      <div className={`${cx("products-delivery-list")} grid wide`}>
        <div className="row">
          {data.map((product, index) => {
            const { img, name, price } = product;
            return (
              <div className="c-3 gutter" key={index}>
                <div className={cx("product-delivery-wrapper")}>
                  <a href="#" className={cx("product-delivery-img-wrapper")}>
                    <img
                      src={img}
                      alt={name}
                      className={cx("product-delivery-img")}
                    />
                  </a>
                  <a href="#" className={cx("product-delivery-name-link")}>
                    {name}
                  </a>
                  <span
                    className={cx("product-delivery-price")}
                  >{`£${price}`}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default ProductDelivery;

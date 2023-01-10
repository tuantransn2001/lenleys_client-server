import React from "react";
import { useTitle } from "~/customizes/hooks";
import CategoryQuickView from "./CategoryQuickView/CategoryQuickView";
import CategoryView from "./CategoryView/CategoryView";
import ServiceReview from "./ServiceReview/ServiceReview";
import ShopAddress from "./ShopAddress/ShoppAddress";
import ProductDelivery from "./ProductDelivery/ProductDelivery";
import AboutShop from "./AboutShop/AboutShop";
import ShopInstagram from "./ShopInstagram/ShopInstagram";
import banner from "~/assets/img/HomePage/banner/banner.png";

import classNames from "classnames/bind";
import style from "./HomePage.module.scss";

const cx = classNames.bind(style);

const HomePage = (props) => {
  useTitle("Luxury Sofas, Beds & Furniture Canterbury - Lenleys");
  return (
    <>
      <div className={cx("wrapper")}>
        <img src={banner} alt="banner" className={cx("img")} />
      </div>
      <CategoryQuickView />
      <CategoryView />
      <ServiceReview />
      <ShopAddress />
      <ProductDelivery />
      <AboutShop />
      <ShopInstagram />
    </>
  );
};

export default HomePage;

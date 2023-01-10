import React from "react";
import SwiperCarousel from "~/components/SwipperCarousel/SwiperCarousel";
import Brand from "./Brand/Brand";
// ? --- Assets ----
import Asiatic from "~/assets/img/Brands/Asiatic.png";
import Bronte from "~/assets/img/Brands/Bronte.png";
import CrucialTrading from "~/assets/img/Brands/CrucialTrading.png";
import Jacaranda from "~/assets/img/Brands/Jacaranda.png";
import Karndean from "~/assets/img/Brands/Karndean.png";
import Ulster from "~/assets/img/Brands/Ulster.png";
import classNames from "classnames/bind";
import style from "./Brands.module.scss";
const cx = classNames.bind(style);
const brandsImgSrc = [
  Asiatic,
  Bronte,
  CrucialTrading,
  Jacaranda,
  Karndean,
  Ulster,
];

const brandImgEls = () => {
  return brandsImgSrc.map((imgSrc, index) => (
    <Brand imgSrc={imgSrc} key={index} />
  ));
};

const Brands = (props) => {
  return (
    <div className={cx("category-brands-wrapper")}>
      <div className={`${cx("category-brands")} grid wide`}>
        <div className="row">
          <div className="c-12 gutter flex-center">
            <h3 className="h3-size-default">Brands with lenleys</h3>
          </div>
        </div>
        <div className="row">
          <div className="c-12 gutter">
            <SwiperCarousel
              slidesPerView={5}
              spaceBetween={30}
              slidesPerGroup={1}
              isLoop
              swiperSlidesData={brandImgEls()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;

import React from "react";
import { inforStoryImg1 } from "~/components/Img/Img";
import classNames from "classnames/bind";
import style from "./ShopStory.module.scss";
const cx = classNames.bind(style);
const ShopStory = (props) => {
  const { direction, paragraphObj, imgEl, slogan } = props;

  const isReverse = direction === "row-reverse" ? true : false;

  const renderParagraphs = () => {
    return paragraphObj.sections.map((content, index) => {
      return (
        <p className="paragraph-text-style" key={index}>
          {content}
        </p>
      );
    });
  };
  const renderSlogan = () => {
    if (slogan) {
      return (
        <div className="row infor-story-row">
          <div className="c-12 infor-story-gutter flex-center">
            <h4 className="h4-size-xl text-center">
              “WE’RE PROOF THAT LOCAL FAMILY-RUN <br></br> BUSINESSES CAN STILL
              THRIVE.”
            </h4>
          </div>
        </div>
      );
    }
  };
  return (
    <div
      className={`${cx(
        "shop-story-wrapper"
      )} grid wide page-section-boder-bottom`}
    >
      <div
        style={{ flexDirection: `${isReverse ? "row-reverse" : "row"}` }}
        className="row infor-story-row"
      >
        <div className="c-6 infor-story-gutter">
          <div className={cx("shop-story-content-wrapper")}>
            <p className="paragraph-text-style-strong">
              {paragraphObj.heading}
            </p>

            {renderParagraphs()}
          </div>
        </div>

        <div className="c-6 infor-story-gutter">
          <div className={cx("shop-story-img-wrapper")}>{imgEl}</div>
        </div>
      </div>
      {renderSlogan()}
    </div>
  );
};

export default ShopStory;

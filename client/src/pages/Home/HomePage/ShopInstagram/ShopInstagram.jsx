import React from "react";
// ? Components
import Button from "~/components/helpers/Button/Button";
import Section from "~/components/helpers/Section/Section";
// ? Assets
import linkImg1 from "~/assets/img/HomePage/shopInstagram/sbi_1.png";
import linkImg2 from "~/assets/img/HomePage/shopInstagram/sbi_2.png";
import linkImg3 from "~/assets/img/HomePage/shopInstagram/sbi_3.png";
import linkImg4 from "~/assets/img/HomePage/shopInstagram/sbi_4.png";
import { instagramIcon } from "~/components/Img/Img";
import classNames from "classnames/bind";
import style from "./ShopInstagram.module.scss";
const cx = classNames.bind(style);
// ? Data
const data = [
  { img: linkImg1, link: "https://www.instagram.com/p/Ce1XzmDs1w1/" },
  { img: linkImg2, link: "https://www.instagram.com/p/CeyzA8OoHWw/" },
  { img: linkImg3, link: "https://www.instagram.com/p/CevXTVqofcV/" },
  { img: linkImg4, link: "https://www.instagram.com/p/Ceq1LadFZCh/" },
];

const sbiBntContentStyle = {
  display: "flex",
  alignItems: "center",
  gap: ".6rem",
  textTransform: "none",
};

const SBInstagram = (props) => {
  const renderInstagramImgLink = () => {
    return data.map(({ img, link }, index) => {
      return (
        <div className="c-3 gutter mb-3" key={index}>
          <a
            href={link}
            className={cx("sb-instagram-img-link-wrapper")}
            target="blank"
          >
            <div className={cx("sb-instagram-img-wrapper")}>
              <img
                src={img}
                alt={`Instagram ${index}`}
                className={cx("sb-instagram-img")}
              />
            </div>
          </a>
        </div>
      );
    });
  };

  return (
    <Section title="Follow us on instagram">
      <div className={`${cx("sb-instagram")} grid wides`}>
        <div className="row">{renderInstagramImgLink()}</div>
        <div className="row mt-2">
          <div className="c-12 gutter flex-center">
            <a href="https://www.instagram.com/lenleyshome/" target="blank">
              <Button size="small" type="sbiFollow">
                <span className="flex-center" style={{ gap: "0.4rem" }}>
                  {instagramIcon("#fff")}
                  Follow on instagram
                </span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SBInstagram;

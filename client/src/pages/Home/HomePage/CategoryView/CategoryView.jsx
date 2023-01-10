import React from "react";
import { useNavigate } from "react-router-dom";
import Section from "~/components/helpers/Section/Section";
import { useGet } from "~/services/utils/fetch";
import classNames from "classnames/bind";
import style from "./CategoryView.module.scss";
const cx = classNames.bind(style);

const Categories = ({ categoriesData }) => {
  const navigate = useNavigate();

  const handleSwitchToCategoryPage = (name, id) => {
    navigate(`home/c/${name}/${id}`);
  };

  return (
    categoriesData &&
    categoriesData.map((category, index) => {
      return (
        <div className="c-4 gutter mb-3" key={category.name}>
          <div
            className={cx("popular-product-wrapper")}
            onClick={(e) => {
              handleSwitchToCategoryPage(category.name, category.id);
            }}
          >
            <a href="#" className={cx("popular-product-img-link-wrapper")}>
              <div className={cx("popular-product-img-wrapper")}>
                <img
                  src={category.imgSrc}
                  alt={category.name}
                  className={cx("popular-product-img")}
                />
              </div>
            </a>
            <a href="#" className={cx("product-title-link")}>
              {category.name}
            </a>
          </div>
        </div>
      );
    })
  );
};

const CategoryView = (props) => {
  const { fetchResultData, isLoading } = useGet("category");
  return (
    <Section title="Shop by department">
      <div className="grid wide">
        <div className="row">
          <Categories categoriesData={fetchResultData.data} />
        </div>
      </div>
    </Section>
  );
};

export default CategoryView;

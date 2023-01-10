import React from "react";
import { BrandsImgWrapperStyled, BrandsImgStyled } from "./BrandStyled";

const Brand = (props) => {
  const { imgSrc } = props;
  return (
    <BrandsImgWrapperStyled>
      <BrandsImgStyled src={imgSrc} />
    </BrandsImgWrapperStyled>
  );
};

export default Brand;

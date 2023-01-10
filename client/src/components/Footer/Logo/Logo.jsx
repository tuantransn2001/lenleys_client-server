import React from "react";
import { footerLogo } from "~/components/Img/Img";
import Button from "~/components/helpers/Button/Button";

const FooterLogo = (props) => {
  return (
    <div className="grid wide mb-block">
      <div className="row">
        <div className="c-12 gutter flex-center">
          <Button type={null} size={null} linkDirection="/">
            {footerLogo()}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FooterLogo;

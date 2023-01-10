import React from "react";
import Paginate from "~/components/helpers/Paginate/Paginate";
import Product from "~/components/Product/Product";
const ProductList = (props) => {
  return (
    <div className="grid">
      <div className="row">
        {props.itemsPerPageData &&
          props.itemsPerPageData.map((productInfo) => {
            return (
              <div className="c-4 gutter" key={productInfo.id}>
                <Product {...productInfo} />
              </div>
            );
          })}
      </div>
      <div className="row">
        <div className="c-12 gutter">
          <Paginate
            pageCount={props.pageCount}
            handlePageOnChange={props.handlePageOnChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductList;

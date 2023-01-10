import React from "react";
import ReactPaginate from "react-paginate";
import Button from "~/components/helpers/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import style from "./Paginate.module.scss";
const cx = classNames.bind(style);
const directionIconStyle = {
  fontSize: "1.4rem",
  color: "#000",
};
const Paginate = (props) => {
  const { pageCount, handlePageOnChange } = props;
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={
        <Button size="small" type={null}>
          <FontAwesomeIcon style={directionIconStyle} icon={faArrowRight} />
        </Button>
      }
      onPageChange={handlePageOnChange}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel={
        <Button size="small" type={null}>
          <FontAwesomeIcon style={directionIconStyle} icon={faArrowLeft} />
        </Button>
      }
      renderOnZeroPageCount={null}
      containerClassName={cx("paginate-wrapper")}
      pageClassName={null}
      pageLinkClassName={cx("dot-item")}
    />
  );
};

export default Paginate;

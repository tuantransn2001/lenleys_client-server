import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Button from "~/components/helpers/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import style from "./ItemListWithPaginate.module.scss";
const cx = classNames.bind(style);

const Items = ({ currentItems, gridColumn, children }) => {
  return (
    currentItems &&
    currentItems.map((itemData) => {
      return gridColumn ? (
        <div className={`c-${gridColumn} gutter`} key={itemData.id}>
          {React.cloneElement(children, { ...itemData })}
        </div>
      ) : (
        <>{React.cloneElement(children, { ...itemData })}</>
      );
    })
  );
};

const Paginate = ({ pageCount, itemsPerPage, itemList, setItemOffset }) => {
  const handlePageOnChange = (event) => {
    const newOffset = (event.selected * itemsPerPage) % itemList.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  const renderPaginateClassNames = (type) => {
    return cx(type);
  };

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
      containerClassName={renderPaginateClassNames("paginate-wrapper")}
      pageClassName={null}
      pageLinkClassName={renderPaginateClassNames("dot-item")}
    />
  );
};
const ItemListWithPaginate = ({ paginateOptions, children }) => {
  const { itemsPerPage, itemList, gridColumn } = paginateOptions;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = itemList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(itemList.length / itemsPerPage);

  if (gridColumn) {
    return (
      <div className="grid">
        <div className="row">
          <Items currentItems={currentItems} gridColumn={gridColumn}>
            {children}
          </Items>
        </div>
        <div className="row">
          <div className="c-12 gutter flex-center">
            <Paginate
              pageCount={pageCount}
              itemsPerPage={itemsPerPage}
              setItemOffset={setItemOffset}
              itemList={itemList}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <Items currentItems={currentItems} gridColumn={gridColumn}>
          {children}
        </Items>

        <tr>
          <td
            style={{
              position: "relative",
            }}
          >
            <Paginate
              pageCount={pageCount}
              itemsPerPage={itemsPerPage}
              setItemOffset={setItemOffset}
              itemList={itemList}
            />
          </td>
        </tr>
      </>
    );
  }
};
export default ItemListWithPaginate;

import React from "react";
import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";
import Paginate from "~/components/helpers/Paginate/Paginate";
import { usePaginate } from "~/customizes/hooks";
import classNames from "classnames/bind";
import style from "./Table.module.scss";

const cx = classNames.bind(style);

const Table = (props) => {
  const { tableHead, tableBody, paginateOptions, actionOptions } = props;
  const paginateData = usePaginate(paginateOptions.itemsPerPage, tableBody);

  return (
    <div className="grid">
      <div className="row">
        <div className="c-12 gutter">
          <table className={cx("table")}>
            <TableHead tableHead={tableHead} />
            <TableBody
              itemsPerPageData={paginateData.itemsPerPageData}
              actionOptions={actionOptions}
            />
          </table>
        </div>
      </div>
      <div className="row mt-2">
        <div className="c-12 gutter flex-center">
          <Paginate
            pageCount={paginateData.pageCount}
            handlePageOnChange={paginateData.handlePageOnChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Table;

// todo: Handle code with paginate or none-paginate

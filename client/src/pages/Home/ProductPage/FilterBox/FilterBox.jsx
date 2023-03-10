import React from "react";
import DropDown from "~/components/helpers/DropDown/DropDown";
import DragAndDrop from "~/components/helpers/DragAndDrop/DragAndDrop";
import classNames from "classnames/bind";
import style from "./FilterBox.module.scss";
const cx = classNames.bind(style);
const filterDropDownData = [
  {
    label: "size",
    options: [
      {
        value: "showAll",
        content: "show all",
      },
      {
        value: "double",
        content: "double 135mm",
      },
      {
        value: "king",
        content: "king 150mm",
      },
      {
        value: "single",
        content: "single 90mm",
      },
      {
        value: "super",
        content: "super king 18mm",
      },
    ],
  },
  {
    label: "size",
    options: [
      {
        value: "showAll",
        content: "show all",
      },
      {
        value: "double",
        content: "double 135mm",
      },
      {
        value: "king",
        content: "king 150mm",
      },
      {
        value: "single",
        content: "single 90mm",
      },
      {
        value: "super",
        content: "super king 18mm",
      },
    ],
  },
  {
    label: "size",
    options: [
      {
        value: "showAll",
        content: "show all",
      },
      {
        value: "double",
        content: "double 135mm",
      },
      {
        value: "king",
        content: "king 150mm",
      },
      {
        value: "single",
        content: "single 90mm",
      },
      {
        value: "super",
        content: "super king 18mm",
      },
    ],
  },
];

const renderDropDownFilter = () => {
  return filterDropDownData.map((data, index) => {
    return (
      <div className="c-3 gutter" key={index}>
        <DropDown label={data.label} options={data.options} />
      </div>
    );
  });
};

const renderDragAndDrop = () => {
  return (
    <div className="c-3 gutter">
      <DragAndDrop label="Price" range={{ from: 300, to: 2000 }} />
    </div>
  );
};

const FilterBox = (props) => {
  return (
    <div className={`${cx("product-filter-wrapper")} grid`}>
      <div className="row">
        {renderDropDownFilter()}
        {renderDragAndDrop()}
      </div>
    </div>
  );
};

export default FilterBox;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import style from "./Content.module.scss";
const cx = classNames.bind(style);
const data = {
  informations: [
    {
      title: "DEPARTMENTS",
      body: [
        "Sofas & chairs",
        "Bed & Bedroom",
        "Dining",
        "Living Room",
        "Flooring",
        "Interiors",
        "Accessories",
        "Clearance",
      ],
    },
    {
      title: "INFORMATIONS",
      body: [
        "About lenleys",
        "Customer Reviews",
        "Delivery Services",
        "Cusomer Services",
        "FAQ's",
        "Contact Us",
        "Inerest Free Credit",
        "Furniture Protection",
      ],
    },
    {
      title: "SHOPPING",
      body: [
        "Shop online",
        "My account",
        "Shopping basket",
        "Checkout",
        "Retrieve a quote",
      ],
    },
  ],
  contacts: [
    {
      title: "OPENING TIMES",
      body: [
        "Monday to Saturday: 9:30am to 5:30pm",
        "Sunday: 10:30am to 4:30pm",
        "Bank Holidays: 10:00am to 5:00pm",
      ],
    },
  ],
};
const renderInformationCol = () => {
  return data.informations.map((information, index) => {
    return (
      <div className="c-3 gutter" key={index}>
        <div className={cx("information")}>
          <h1 className="primary-title-text-style">{information.title}</h1>
          <ul className={cx("information-col-list")}>
            {information.body.map((col, index) => {
              return (
                <li className={cx("information-col-item")} key={index}>
                  <a href="#" className="primary-text-style">
                    {col}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  });
};
const renderContactCol = () => {
  return data.contacts.map((contact, index) => {
    return (
      <div className="c-3 gutter" key={index}>
        <div className={cx("contact")}>
          <h1 className="primary-title-text-style">{contact.title}</h1>
          <ul className={cx("contact-col-list")}>
            {contact.body.map((col, index) => {
              return (
                <li className={cx("contact-col-item")} key={index}>
                  <div className={cx("contact-col-item-icon-wrapper")}>
                    <FontAwesomeIcon icon={faClock} />
                  </div>

                  <span className="primary-text-style">{col}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  });
};
const Content = (props) => {
  return (
    <div className={`${cx("wrapper")}`}>
      <div className="grid wide">
        <div className="row">
          {renderInformationCol()}
          {renderContactCol()}
        </div>
      </div>
    </div>
  );
};

export default Content;

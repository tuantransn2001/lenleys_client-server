import React from "react";
import Lift from "~/assets/img/ContactPage/contact/amenities/Lift.png";
import Park from "~/assets/img/ContactPage/contact/amenities/Parking.png";
import Wifi from "~/assets/img/ContactPage/contact/amenities/WiFi.png";
import Toilets from "~/assets/img/ContactPage/contact/amenities/Toilets.png";
import Dogs from "~/assets/img/ContactPage/contact/amenities/Dogs.png";
import Amenity from "~/assets/img/ContactPage/contact/amenities/Amenity_Icons.png";
import classNames from "classnames/bind";
import style from "./ContactInfor.module.scss";
const cx = classNames.bind(style);
const amentiesData = [
  {
    img: Lift,
    content: "Lift",
  },
  {
    img: Park,
    content: "Free Customer Parking",
  },
  {
    img: Wifi,
    content: "Free Wi-Fi",
  },
  {
    img: Toilets,
    content: "Customer Toilets",
  },
  {
    img: Dogs,
    content: "Dogs Friendly",
  },
  {
    img: Amenity,
    content: "Disabled Access",
  },
];
const ContactInfor = (props) => {
  const renderAmentites = () => {
    return amentiesData.map((amentity, index) => {
      return (
        <div className="c-4 gutter" key={index}>
          <div
            className={cx("contact-shop-information-row-desc-amenities-item")}
          >
            <img src={amentity.img} alt={amentity.content} />
            <span>{amentity.content}</span>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="c-6 gutter">
      <div className={`${cx("contact-shop-information")} grid`}>
        <div className="row">
          <div className="c-12 gutter">
            <div className={`${cx("contact-shop-information-row")} grid`}>
              <div className="row">
                <div className="c-12 gutter">
                  <h4 className={cx("contact-shop-information-row-title")}>
                    Opening hours
                  </h4>
                  <div className={cx("contact-shop-information-row-desc")}>
                    <ul
                      className={cx("contact-shop-information-row-desc-list")}
                    >
                      <li
                        className={`${cx(
                          "contact-shop-information-row-desc-item"
                        )} grid`}
                      >
                        <div className="row">
                          <div className="c-6 gutter">
                            <span
                              className={cx(
                                "contact-shop-information-row-desc-item-content"
                              )}
                            >
                              Monday to saturday
                            </span>
                          </div>
                          <div className="c-6 gutter">
                            <span
                              className={cx(
                                "contact-shop-information-row-desc-item-content"
                              )}
                            >
                              9:30 - 17:30
                            </span>
                          </div>
                        </div>
                      </li>
                      <li
                        className={`${cx(
                          "contact-shop-information-row-desc-item"
                        )} grid`}
                      >
                        <div className="row">
                          <div className="c-6 gutter">
                            <span
                              className={cx(
                                "contact-shop-information-row-desc-item-content"
                              )}
                            >
                              Sunday
                            </span>
                          </div>
                          <div className="c-6 gutter">
                            <span
                              className={cx(
                                "contact-shop-information-row-desc-item-content"
                              )}
                            >
                              10:30 - 16:30
                            </span>
                          </div>
                        </div>
                      </li>
                      <li
                        className={`${cx(
                          "contact-shop-information-row-desc-item"
                        )} grid`}
                      >
                        <div className="row">
                          <div className="c-6 gutter">
                            <span
                              className={cx(
                                "contact-shop-information-row-desc-item-content"
                              )}
                            >
                              Bank holidays
                            </span>
                          </div>
                          <div className="c-6 gutter">
                            <span
                              className={cx(
                                "contact-shop-information-row-desc-item-content"
                              )}
                            >
                              10:00 - 17:00
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="c-12 gutter">
                  <h4 className={cx("contact-shop-information-row-title")}>
                    Amenities
                  </h4>
                  <div className={cx("contact-shop-information-row-desc")}>
                    <div
                      className={`${cx(
                        "contact-shop-information-row-desc-amenities-list"
                      )} grid`}
                    >
                      <div className="row">{renderAmentites()}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfor;

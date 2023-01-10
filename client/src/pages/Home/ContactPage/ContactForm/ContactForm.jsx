import React from "react";
import FormGroup from "~/components/helpers/FormGroup/FormGroup";
import classNames from "classnames/bind";
import style from "./ContactForm.module.scss";
const cx = classNames.bind(style);
const contactFieldsData = [
  {
    columnNum: 6,
    label: "For attention of",
    placeholder: "Centerbury Store",
    fieldName: "attention",
    type: "text",
    regex_check_type: "string",
  },
  {
    columnNum: 6,
    label: "Name",
    placeholder: "Name",
    fieldName: "name",
    type: "text",
    regex_check_type: "string",
  },
  {
    columnNum: 6,
    label: "Email",
    placeholder: "Email address",
    fieldName: "email",
    type: "text",
    regex_check_type: "email",
  },
  {
    columnNum: 6,
    label: "Phone No.",
    placeholder: "Phone number",
    fieldName: "phoneNumber",
    type: "text",
    regex_check_type: "number",
  },
  {
    columnNum: 12,
    label: "Message",
    placeholder: "Enter your message",
    fieldName: "message",
    type: "text-area",
    regex_check_type: "string",
  },
];
const ContactForm = (props) => {
  return (
    <div className="c-6 gutter x-center">
      <div className={cx("contact-shop-information grid")}>
        <div className="row">
          <div className="c-12 gutter">
            <div className={`${cx("contact-shop-form-wrapper")} grid`}>
              <div className="row">
                <div className="c-12 gutter">
                  <h1 className={cx("contact-shop-form-title")}>Enquiries</h1>
                </div>
              </div>
              <div className="row">
                <FormGroup formFieldsData={contactFieldsData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

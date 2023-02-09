import React from "react";
import Page from "~/components/helpers/Page/Page";
import FormGroup from "~/components/helpers/FormGroup/FormGroup";
import { useTitle } from "~/customizes/hooks";
import CheckoutReviewOrder from "./CheckoutReviewOrder/CheckoutReviewOrder";
const requirementData = [
  {
    columnNum: 12,
    label: "Full name",
    fieldName: "fullName",
    isRequire: true,
    type: "text",
    regex_check_type: "string",
  },
  {
    columnNum: 4,
    label: "Phone number",
    isRequire: true,
    fieldName: "phoneNumber",
    type: "text",
    regex_check_type: "string",
  },
  {
    columnNum: 4,
    label: "Email",
    isRequire: true,
    fieldName: "email",
    type: "email",
    regex_check_type: "string",
  },
  {
    columnNum: 4,
    label: "Promo",
    fieldName: "promoCode",
    type: "text",
    description: "Enter Promo Manually",
    regex_check_type: "string",
    placeholder: "Use Promo Code",
  },
  {
    columnNum: 12,
    label: "Address",
    isRequire: true,
    fieldName: "address",
    type: "text",
    regex_check_type: "string",
  },
  {
    columnNum: 12,
    label: "Order notes (optional)",
    fieldName: "note",
    placeholder: "Anything else we need to know about your order!",
    type: "text",
    regex_check_type: "string",
  },
];
const checkoutPageWide = { width: "1100px" };
const CheckoutPage = (props) => {
  useTitle("Lenleys - Checkout");

  return (
    <Page title="Checkout">
      <div className="grid wide" style={checkoutPageWide}>
        <div className="row">
          <div className="c-8 gutter">
            <FormGroup
              formFieldsData={requirementData}
              action="Place Order"
              customSubmitBtnStyle={{}}
            />
          </div>

          <div className="c-4 gutter">
            <CheckoutReviewOrder />
          </div>
        </div>
      </div>
    </Page>
  );
};

export default CheckoutPage;

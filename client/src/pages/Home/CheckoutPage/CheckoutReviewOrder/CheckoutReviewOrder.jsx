import React from "react";
import { useSelector } from "react-redux";
import { handleCaculateSubtotal } from "~/common/common";
import classNames from "classnames/bind";
import style from "./CheckoutReviewOrder.scss";
const cx = classNames.bind(style);

const PaymentMethod = (props) => {
  return (
    <div className={cx("payment-method-wrapper")}>
      <ul>
        <li>
          <input type="radio" name="" id="" />
          <span>Credit or debit card</span>
        </li>
        <li>
          <input type="radio" name="" id="" />
          <span>Paypal</span>
        </li>
        <li>
          <input type="radio" name="" id="" />
          <span>Apply For Finance</span>
        </li>
      </ul>
    </div>
  );
};

const TermAndCondition = (props) => {
  return (
    <div className={cx("terms-conditions-wrapper")}>
      <ul>
        <li>
          <input type="checkbox" name="" id="" />
          <span>
            I have read and agree to the website terms and conditions{" "}
            <span>*</span>
          </span>
        </li>
        <li>
          <input type="checkbox" name="" id="" />
          <span>I have read and agree to the website terms and conditions</span>
        </li>
      </ul>
    </div>
  );
};

const CheckoutReviewOrder = (props) => {
  const cartList = useSelector((state) => state.CartReducer.cartList);
  const subTotal = handleCaculateSubtotal(cartList);
  const vat = subTotal * 0.015;
  const renderTableRow = () => {
    return (
      <>
        {cartList.map((cartItem) => {
          const { product_name, unit_price, quantity } = cartItem;
          return (
            <tr
              className={cx("table-body-row-cart-list-wrapper")}
              key={product_name}
            >
              <td className={cx("table-column-text-bold-style")}>
                {product_name}
              </td>
              <td className={cx("table-column-text-default-style")}>
                £{unit_price * quantity}
              </td>
            </tr>
          );
        })}

        <tr style={{ borderTop: "1px dashed #272525", marginTop: "6px" }}>
          <td className={cx("table-column-text-bold-style")}>Subtotal:</td>
          <td className={cx("table-column-text-default-style")}>£{subTotal}</td>
        </tr>

        <tr
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            alignItems: "start",
          }}
        >
          <td className={cx("table-column-text-bold-style")}>
            <span>Shipping</span>
          </td>
          <td className={cx("table-column-text-default-style")}>
            <span>Enter your address to view shipping options</span>
          </td>
          <td>
            <a
              link="*"
              className={cx("table-column-text-bold-style")}
              style={{ textDecoration: "underline" }}
            >
              Caculate shipping method
            </a>
          </td>
        </tr>
      </>
    );
  };

  return (
    <div className={cx("checkout-review-order-box-wrapper")}>
      <table className={cx("checkout-review-order-table-wrapper")}>
        <thead className={cx("checkout-review-order-table-head")}>
          <tr className={cx("checkout-review-order-table-head-row")}>
            <td
              style={{
                fontSize: "12.6px",
              }}
              className={cx("table-column-text-bold-style")}
            >
              Product
            </td>
            <td
              style={{
                fontSize: "12.6px",
              }}
              className={cx("table-column-text-bold-style")}
            >
              Subtotal
            </td>
          </tr>
        </thead>
        <tbody className={cx("checkout-review-order-body")}>
          {renderTableRow()}
        </tbody>
        <tfoot className={cx("checkout-review-order-footer")}>
          <tr>
            <td
              style={{ fontSize: "18px" }}
              className={cx("table-column-text-bold-style")}
            >
              Total
            </td>
            <td
              style={{ fontSize: "14px" }}
              className={cx("table-column-text-bold-style")}
            >
              £{subTotal}
              <span
                className={cx("table-column-text-default-style")}
              >{`(includes £${vat} VAT)`}</span>
            </td>
          </tr>
        </tfoot>
      </table>

      <PaymentMethod />
      <TermAndCondition />
    </div>
  );
};

export default CheckoutReviewOrder;

import React, { forwardRef } from "react";
import LoadingIcon from "~/components/LoadingIcon/LoadingIcon";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "./Button.module.scss";
import classnames from "classnames/bind";
const cx = classnames.bind(styles);

const Button = forwardRef((props, ref) => {
  const {
    size,
    type,
    status,
    maxSize,
    linkDirection,
    children,
    icon,
    customStyle,
    background,
    ghost,
    onClick,
  } = props;
  const btnClassName = cx(
    "btn",
    size,
    type,
    status,
    { isDisable: status === "disable" },
    { isTransparent: ghost },
    { isMaxSize: maxSize }
  );
  const renderContent = () => {
    switch (status) {
      case "success": {
        return (
          <span className={cx("content-on-handle-success")}>
            <FontAwesomeIcon icon={faCircleCheck} />
            Done
          </span>
        );
      }
      case "loading": {
        return (
          <span className={cx("btn-content-wrapper-with-icon")}>
            <LoadingIcon />
            {children}
          </span>
        );
      }
      default: {
        if (icon && children) {
          return (
            <span className={cx("btn-content-wrapper-with-icon")}>
              <FontAwesomeIcon icon={icon} />
              {children}
            </span>
          );
        } else if (icon && !children) {
          return (
            <span className={cx("btn-content-wrapper-with-icon-only")}>
              <FontAwesomeIcon icon={icon} />
            </span>
          );
        } else if (!icon && children) {
          return (
            <span className={cx("btn-content-with-text-only")}>{children}</span>
          );
        }
      }
    }
  };

  if (linkDirection) {
    return (
      <Link
        to={{
          pathname: linkDirection,
        }}
        onClick={onClick}
      >
        {renderContent()}
      </Link>
    );
  } else {
    return (
      <button
        ref={ref}
        data-background={background}
        className={btnClassName}
        style={customStyle}
        onClick={onClick}
      >
        {renderContent()}
      </button>
    );
  }
});
export default Button;

/*
 * 1.Size: default,small,medium,large
 * 2.Type: primary,React-router-link
 * 3.Loading: add Icon Loading components,
 * 4.Status: change background && content => success style,
 * 5.Shape: Circle , default ( with border-radius ) , round
 * 6.Icon: with fa-Icon props -> children node

 */

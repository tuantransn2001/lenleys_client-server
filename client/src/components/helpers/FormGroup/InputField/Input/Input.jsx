import React, { useState, useContext, forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import SeekPasswordButton from "../SeekPasswordButton/SeekPasswordButton";
import InputContext from "../InputFieldContext";
import classNames from "classnames/bind";
import style from "./Input.module.scss";
import FormGroupContext from "../../FormGroupContext";
import { useEffect } from "react";
const cx = classNames.bind(style);

const Input = (props, ref) => {
  const { setInputType, description, onChange } = props;
  const { type, inputType, placeholder, fieldName } = useContext(InputContext);
  const { inCorrectFieldList, userInputComplete } =
    useContext(FormGroupContext);
  const [isCorrectOnChange, setIsCorrectOnChange] = useState(null);

  const handleInPutOnChange = (e) => {
    if (userInputComplete.hasOwnProperty(fieldName)) {
      const isUserInputCorrect = userInputComplete[fieldName].isCorrect;
      setIsCorrectOnChange(isUserInputCorrect);
    }

    // ? Get from Parent: FormGroup Component -> [ handle get data on change ]
    onChange(e);
  };

  useEffect(() => {
    if (inCorrectFieldList.includes(fieldName)) {
      setIsCorrectOnChange(false);
    }
  }, [inCorrectFieldList]);

  const handleInputOnBlur = (e) => {
    const userInput = e.target.value;
    if (userInput === "") {
      setIsCorrectOnChange(null);
    }
  };

  const renderInputTagClassName = () => {
    switch (type) {
      case "text": {
        return cx("input-tag");
      }
      case "file": {
        return cx("input-tag", "file");
      }
      default: {
        return cx("input-tag");
      }
    }
  };

  // ? RenderComponent
  const renderStatusValidateIcon = () => {
    return (
      type !== "password" && (
        <div className={cx("status-validate-icon-wrapper")}>
          <FontAwesomeIcon
            className={cx("status-validate-icon", "check")}
            icon={faCheck}
          />
          <FontAwesomeIcon
            className={cx("status-validate-icon", "exclamation")}
            icon={faTriangleExclamation}
          />
        </div>
      )
    );
  };

  const renderSeekPasswordButton = () => {
    return (
      type === "password" && <SeekPasswordButton setInputType={setInputType} />
    );
  };

  return (
    <div
      className={cx("input-tag-wrapper", {
        correct: isCorrectOnChange,
        ["in-correct"]: !isCorrectOnChange && isCorrectOnChange !== null,
      })}
    >
      <input
        ref={ref}
        type={inputType}
        onChange={handleInPutOnChange}
        onBlur={handleInputOnBlur}
        className={renderInputTagClassName()}
        placeholder={placeholder && placeholder}
        required
      />
      {renderStatusValidateIcon()}
      {renderSeekPasswordButton()}
      {description && (
        <span className={cx("input-field-desc")}>{description}</span>
      )}
    </div>
  );
};

export default forwardRef(Input);

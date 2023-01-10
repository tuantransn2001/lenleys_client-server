import React, { useRef, useEffect, useContext } from "react";
import FormGroupContext from "../FormGroupContext";
import InputField from "~/components/helpers/FormGroup/InputField/InputField";
import { validateUserInputByRegex } from "~/common/common";
const FormField = (props) => {
  const inputTagsRef = useRef([]);
  // ? UserInput && getUserInput <=> Global state
  const { formFieldsData, getUserInputComplete } = useContext(FormGroupContext);

  // ? userDetailComplete = { data , isCorrect }
  useHandleFieldOnChange(inputTagsRef, getUserInputComplete);

  return formFieldsData.map((fieldData, index) => {
    const {
      columnNum,
      label,
      type,
      fieldName,
      placeholder,
      description,
      options,
      customStyle,
      regex_check_type,
    } = fieldData;
    return (
      <div className={`c-${columnNum} gutter`} key={index}>
        <InputField
          {...{
            label,
            type,
            fieldName,
            placeholder,
            description,
            options,
            customStyle,
            regex_check_type,
          }}
          ref={(inputEl) => {
            const inputElObj = {
              element: inputEl,
              data: fieldData,
            };
            inputTagsRef.current.push(inputElObj);
          }}
        />
      </div>
    );
  });
};

export default FormField;

// ? Handle get and format complete data from input
const useHandleFieldOnChange = (
  inputTagsRef,

  getUserInputComplete
) => {
  useEffect(() => {
    const inputTagsEl = inputTagsRef.current;
    // ? Component logic
    const handleOnChange = (event, data) => {
      const { regex_check_type, fieldName } = data;
      // ? User input
      let userDataOnChange = event.target.value;

      let isCorrect = validateUserInputByRegex(
        regex_check_type,
        userDataOnChange
      );

      getUserInputComplete((prev) => {
        return {
          ...prev,
          [fieldName]: {
            isCorrect,
            data: userDataOnChange,
          },
        };
      });
    };

    inputTagsEl &&
      inputTagsEl.map((inputElObj) => {
        inputElObj.element &&
          inputElObj.element.addEventListener("change", (event) => {
            handleOnChange(event, inputElObj.data);
          });
      });
    // ? Clean up
    return () => {
      inputTagsEl &&
        inputTagsEl.map((inputElObj) => {
          inputElObj.element &&
            inputElObj.element.removeEventListener("change", (event) => {
              handleOnChange(event, inputElObj.data);
            });
        });
    };
  }, []);
};

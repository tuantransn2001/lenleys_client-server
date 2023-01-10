import React, { useRef, useEffect } from "react";
import Button from "~/components/helpers/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
const ConfigBtn = (props) => {
  const configBtnRef = useRef(null);

  useEffect(() => {
    const configBtnEl = configBtnRef.current;

    configBtnEl &&
      configBtnEl.addEventListener("click", (e) => {
        props.handler(props.id);
      });
    return () =>
      configBtnEl &&
      configBtnEl.removeEventListener("click", (e) => {
        props.handler(props.id);
      });
  }, []);

  return (
    <Button size={null} type="action-btn" ref={configBtnRef}>
      {props.type === "edit" ? (
        <FontAwesomeIcon icon={faPenToSquare} />
      ) : (
        <FontAwesomeIcon icon={faTrashAlt} />
      )}
    </Button>
  );
};

export default ConfigBtn;

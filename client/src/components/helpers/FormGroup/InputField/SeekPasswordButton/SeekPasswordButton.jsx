import React, { useState } from "react";
import Button from "~/components/helpers/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const SeekPasswordButton = (props) => {
  const { type, setInputType } = props;
  const [isSeek, setIsSeek] = useState(type === "password" ? true : false);
  const handleSeekPassword = () => {
    const isSeekUpdated = isSeek ? false : true;
    const inputTypeUpdated = isSeek ? "text" : "password";
    setIsSeek(isSeekUpdated);
    setInputType(inputTypeUpdated);
  };

  return (
    <Button ghost size={null} type="seek-password" onClick={handleSeekPassword}>
      <FontAwesomeIcon
        className="seek-password-icon"
        icon={isSeek ? faEye : faEyeSlash}
      />
    </Button>
  );
};

export default SeekPasswordButton;

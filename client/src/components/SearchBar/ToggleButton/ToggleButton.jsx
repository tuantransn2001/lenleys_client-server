import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "~/components/helpers/Button/Button";
import LoadingIcon from "~/components/LoadingIcon/LoadingIcon";
import classNames from "classnames/bind";
import style from "./ToggleButton.module.scss";
import SearchBoxContext from "../SearchBoxContext";
const cx = classNames.bind(style);
const ToggleButton = (props) => {
  const { isSearching } = useContext(SearchBoxContext);

  return (
    <div className={cx("toogle-btn-wrapper")}>
      {isSearching ? (
        <LoadingIcon />
      ) : (
        <Button size={null} type="header-search-box">
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      )}
    </div>
  );
};

export default ToggleButton;

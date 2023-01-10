import React, { useState } from "react";
import Button from "~/components/helpers/Button/Button";
import ToggleButton from "./ToggleButton/ToggleButton";
import SearchBoxContext from "./SearchBoxContext";
import classNames from "classnames/bind";
import style from "./SearchBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(style);

const SearchBar = (props) => {
  const [isSearching, setIsSearching] = useState(true);

  const SearchBoxContextProps = {
    isSearching,
    setIsSearching,
  };

  const renderClearBtn = () => {
    return (
      isSearching && (
        <div className={cx("clear-btn-wrapper")}>
          <Button size={null} type="header-search-box-clear">
            <FontAwesomeIcon icon={faXmark} />
          </Button>
        </div>
      )
    );
  };

  return (
    <SearchBoxContext.Provider value={SearchBoxContextProps}>
      <div className={cx("searchBox-wrapper")}>
        {/* LoadingIcon & Toggle Button */}
        <ToggleButton />
        {/* Input */}
        <input placeholder="Search" className={cx("searchBox-input")} />
        {/* Clear btn */}
        {renderClearBtn()}
      </div>
    </SearchBoxContext.Provider>
  );
};

export default SearchBar;

// todo: Build Search ( Btn toggle : Modal )
// Modal with auto search with

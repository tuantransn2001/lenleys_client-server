import React, { useState } from "react";

const tabListStyle = {
  display: "flex",
  alignItems: "center",
  gap: "4rem",
};

const tabItemStyle = {
  cursor: "pointer",
};
const tabContentStyleDefault = {
  fontSize: "1.7rem",
  fontWeight: "500",
  letterSpacing: ".1rem",
  textTransform: "uppercase",
  color: "#a9a9a9",
};

const tabContentStyleActive = {
  ...tabContentStyleDefault,
  color: "#262626",
};

const Tab = (props) => {
  const { setCurrentTab, tabContentList } = props;
  const [indexActive, setIndexActive] = useState(0);

  return (
    <ul style={tabListStyle}>
      {tabContentList.map((tabContent, index) => {
        return (
          <li
            style={tabItemStyle}
            key={tabContent}
            onClick={(e) => {
              setCurrentTab(tabContent);
              setIndexActive(index);
            }}
          >
            <span
              style={
                indexActive === index
                  ? tabContentStyleActive
                  : tabContentStyleDefault
              }
            >
              {tabContent}
            </span>
          </li>
        );
      })}
    </ul>
  );
};
export default Tab;

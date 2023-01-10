import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const filterIconWrapperStyle = { marginLeft: ".6rem", opacity: ".6" };

const TableHead = (props) => {
  const { filter, data } = props.tableHead;

  const renderContent = (content) => {
    if (filter) {
      return (
        <>
          {content}
          <span style={filterIconWrapperStyle}>
            <FontAwesomeIcon icon={faArrowUp} />
          </span>
        </>
      );
    } else {
      return <>{content}</>;
    }
  };

  return (
    <thead>
      <tr>
        {data &&
          data.map((content) => {
            return <th key={content}>{renderContent(content)}</th>;
          })}
        <th>Action</th>
      </tr>
    </thead>
  );
};

export default TableHead;

// todo: Handle logic filter from a-z <-> z-a

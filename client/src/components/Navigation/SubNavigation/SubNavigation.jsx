import React from "react";

const SubNavigation = (props) => {
  const { subnav } = props;
  try {
    return (
      <div className="sub-nav-bg">
        <div className="grid wide">
          <div className="row">
            {subnav.map((row, index) => {
              return (
                <div className="c-3 gutter" key={index}>
                  <div className="sub-nav-col">
                    <h1 className="sub-nav-col-title">{row.title}</h1>
                    <ul className="sub-nav-col-list">
                      {row.body.map((col, index) => {
                        return (
                          <li className="sub-nav-col-item" key={index}>
                            <a href="#" className="sub-nav-col-item-link">
                              {col}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } catch (err) {
    return <></>;
  }
};

export default SubNavigation;

import React, { useRef, useEffect } from "react";
import classNames from "classnames/bind";
import style from "./DragAndDrop.module.scss";
const cx = classNames.bind(style);
const DragAndDrop = ({ label, range }) => {
  const barRef = useRef(null);
  const slideDotRef = useRef(null);
  // ? Drag and drop event variable
  let isDrag = false;
  useEffect(() => {
    const barWidth = barRef.current.offsetWidth;
    const barEl = barRef.current;
    const slideDotEl = slideDotRef.current;
    const handleOnMouseMove = (e) => {
      if (isDrag) {
        const currentPoint = e.offsetX;
        const barPercentOnUserAction = (currentPoint / barWidth) * barWidth;
        if (barPercentOnUserAction > 0 && barPercentOnUserAction <= barWidth) {
          slideDotEl.style = `left: ${barPercentOnUserAction}px;`;
        }
      }
    };
    if (barEl) {
      barEl.addEventListener("mousedown", (e) => {
        isDrag = true;
      });

      barEl.addEventListener("mouseup", (e) => {
        isDrag = false;
      });
      barEl.addEventListener("mousemove", handleOnMouseMove);
    }
    return () => {
      if (barEl) {
        barEl.removeEventListener("mousedown", (e) => {
          isDrag = true;
        });

        barEl.removeEventListener("mouseup", (e) => {
          isDrag = false;
        });
        barEl.removeEventListener("mousemove", handleOnMouseMove);
      }
    };
  }, []);

  return (
    <div className={cx("drag-and-drop-wrapper")}>
      {label && (
        <label htmlFor="" className={cx("drag-and-drop-label")}>
          {label}
        </label>
      )}
      <div className={cx("bar-wrapper")}>
        <div className={cx("bar")} ref={barRef}>
          <div className={cx("slide-handle")} ref={slideDotRef} />
        </div>
        <div
          className={cx("range-wrapper")}
        >{`Price: £${range.from} — £${range.to}`}</div>
      </div>
    </div>
  );
};

export default DragAndDrop;

import * as React from "react";
const Minus = (props) => (
  <svg
    fill={props.color}
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    id="minus"
    data-name="Line Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon line-color"
    {...props}
  >
    <line
      id="primary"
      x1={19}
      y1={12}
      x2={5}
      y2={12}
      style={{
        fill: "none",
        stroke: "rgb(0, 0, 0)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
  </svg>
);
export default Minus;

import * as React from "react";
const ArrowUp = (props) => (
  <svg
    fill={props.color}
    width={props.width}
    height={props.height}
    viewBox="-1 0 19 19"
    xmlns="http://www.w3.org/2000/svg"
    className="cf-icon-svg"
    {...props}
  >
    <path d="M15.3 15.32a1.026 1.026 0 0 1-.727-.302L8.5 8.946l-6.073 6.072a1.03 1.03 0 0 1-1.456-1.455l6.801-6.8a1.03 1.03 0 0 1 1.456 0l6.8 6.8a1.03 1.03 0 0 1-.727 1.757z" />
  </svg>
);
export default ArrowUp;

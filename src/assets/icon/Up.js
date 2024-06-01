import * as React from "react";
const Up = (props) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 48 48"
    fill={props.color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={48} height={48} fill="white" fillOpacity={0.01} />
    <path
      d="M13 30L25 18L37 30"
      stroke="#000000"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Up;

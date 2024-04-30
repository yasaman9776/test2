import * as React from "react";
const SaveIcon = (props) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 1.5C0 0.671573 0.671573 0 1.5 0H10.0858C10.4836 0 10.8651 0.158035 11.1464 0.43934L14.5607 3.85355C14.842 4.13486 15 4.51639 15 4.91421V13.5C15 14.3284 14.3284 15 13.5 15H11V11.5C11 10.6716 10.3284 10 9.5 10H5.5C4.67157 10 4 10.6716 4 11.5V15H1.5C0.671573 15 0 14.3284 0 13.5V1.5Z"
      fill={props.color}
    />
    <path
      d="M5 15H10V11.5C10 11.2239 9.77614 11 9.5 11H5.5C5.22386 11 5 11.2239 5 11.5V15Z"
      fill={props.color}
    />
  </svg>
);
export default SaveIcon;
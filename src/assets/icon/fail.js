import * as React from "react";
const FailIcon = (props) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 16 16"
    fill={props.color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_3351_805)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.618 2.39701C10.513 -0.707994 5.48201 -0.712994 2.38301 2.38601C-0.717988 5.48801 -0.714988 10.517 2.39201 13.622C5.49701 16.727 10.529 16.731 13.627 13.632C16.727 10.533 16.724 5.50201 13.618 2.39701ZM9.61501 11.351L7.92701 9.66301L6.23901 11.351C5.55001 12.04 5.03201 12.64 4.21001 11.819C3.39001 10.998 3.98701 10.48 4.67901 9.79001L6.36701 8.10301L4.67901 6.41501C3.98901 5.72601 3.39001 5.20801 4.21001 4.38601C5.03201 3.56601 5.55001 4.16501 6.23901 4.85501L7.92701 6.54101L9.61501 4.85501C10.305 4.16601 10.82 3.56501 11.642 4.38601C12.464 5.20801 11.865 5.72601 11.175 6.41501L9.48701 8.10201L11.175 9.78901C11.864 10.48 12.464 10.998 11.642 11.819C10.822 12.64 10.305 12.04 9.61501 11.351Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_3351_805">
        <rect width={16} height={16} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default FailIcon;

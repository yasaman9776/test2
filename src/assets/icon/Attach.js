import * as React from "react";
const Attach = (props) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_3365_272)">
      <path
        d="M4.3097 8.95521L9.9253 3.20343C9.98546 3.1418 10.4668 2.64879 11.2289 2.38174C12.2919 2.03253 13.3749 2.32012 14.2373 3.20343C15.1197 4.08674 15.3805 5.17547 15.0395 6.2642C14.7988 7.0448 14.2974 7.57889 14.2373 7.64052L8.20051 13.8237C7.15761 14.8919 4.55037 16.2682 2.14368 13.8237C-0.242948 11.3792 1.12084 8.68816 2.14368 7.64052L8.62168 0.984882C8.86234 0.738377 9.2434 0.738377 9.48407 0.984882C9.72474 1.23139 9.72474 1.62169 9.48407 1.86819L3.02613 8.52383C2.92585 8.60599 0.900228 10.7629 3.02613 12.9404C5.09187 15.0562 7.1175 13.1663 7.33811 12.9404L13.3749 6.73667C13.3749 6.73667 13.7158 6.38745 13.8763 5.89444C14.0768 5.23709 13.9364 4.66191 13.3749 4.08674C12.1715 2.85421 11.0083 3.88132 10.7877 4.08674L5.17209 9.81798C4.97154 10.0234 4.83115 10.3726 5.17209 10.7218C5.51304 11.071 5.83393 10.9067 6.03449 10.7218L9.9253 6.73667C10.166 6.5107 10.5671 6.5107 10.7877 6.73667C11.0284 6.98317 11.0284 7.39401 10.7877 7.64052L6.89688 11.6051C6.35538 12.1392 5.25232 12.5706 4.3097 11.6051C3.34702 10.6397 3.76819 9.4893 4.3097 8.95521Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_3365_272">
        <rect width={16} height={16} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default Attach;
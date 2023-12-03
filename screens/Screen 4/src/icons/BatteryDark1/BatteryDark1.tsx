/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const BatteryDark1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`battery-dark-1 ${className}`}
      fill="none"
      height="12"
      viewBox="0 0 25 12"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M24 4C24.5523 4 25 4.44772 25 5V7C25 7.55228 24.5523 8 24 8V4Z"
        fill="#EBEBF5"
        fillOpacity="0.3"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M3 0H20C21.6569 0 23 1.34315 23 3V9C23 10.6569 21.6569 12 20 12H3C1.34315 12 0 10.6569 0 9V3C0 1.34315 1.34315 0 3 0ZM3 1C1.89543 1 1 1.89543 1 3V9C1 10.1046 1.89543 11 3 11H20C21.1046 11 22 10.1046 22 9V3C22 1.89543 21.1046 1 20 1H3Z"
        fill="#EBEBF5"
        fillOpacity="0.3"
        fillRule="evenodd"
      />
      <rect className="rect" fill="white" height="8" rx="1" width="19" x="2" y="2" />
    </svg>
  );
};

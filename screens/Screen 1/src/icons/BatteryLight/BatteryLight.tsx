/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const BatteryLight = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`battery-light ${className}`}
      fill="none"
      height="14"
      viewBox="0 0 25 14"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M24 5C24.5523 5 25 5.44772 25 6V8C25 8.55228 24.5523 9 24 9V5Z"
        fill="#3C3C43"
        fillOpacity="0.6"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M3 1H20C21.6569 1 23 2.34315 23 4V10C23 11.6569 21.6569 13 20 13H3C1.34315 13 0 11.6569 0 10V4C0 2.34315 1.34315 1 3 1ZM3 2C1.89543 2 1 2.89543 1 4V10C1 11.1046 1.89543 12 3 12H20C21.1046 12 22 11.1046 22 10V4C22 2.89543 21.1046 2 20 2H3Z"
        fill="#3C3C43"
        fillOpacity="0.6"
        fillRule="evenodd"
      />
      <rect className="rect" fill="black" height="8" rx="1" width="19" x="2" y="3" />
    </svg>
  );
};

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
        d="M8.43814 8.07668H11.5825L9.93814 12.32C9.70103 12.9319 10.3454 13.2505 10.7629 12.76L15.8454 6.70609C15.9485 6.5847 16 6.46332 16 6.33183C16 6.09918 15.8144 5.92722 15.5619 5.92722H12.4175L14.0567 1.67889C14.2938 1.07198 13.6495 0.7483 13.2371 1.23888L8.14948 7.29276C8.04639 7.4192 8 7.53552 8 7.66702C8 7.90472 8.18557 8.07668 8.43814 8.07668Z"
        fill="white"
      />
      <path
        className="path"
        d="M11.2913 2H3C1.89543 2 1 2.89543 1 4V10C1 11.1046 1.89543 12 3 12H8.9903C8.87448 12.3232 8.85634 12.6779 8.94958 13H3C1.34315 13 0 11.6569 0 10V4C0 2.34315 1.34315 1 3 1H12.1317L11.2913 2Z"
        fill="#EBEBF5"
        fillOpacity="0.3"
      />
      <path
        className="path"
        d="M12.7066 12H20C21.1046 12 22 11.1046 22 10V4C22 2.89543 21.1046 2 20 2H15.0042C15.1211 1.67563 15.1385 1.3213 15.045 1H20C21.6569 1 23 2.34315 23 4V10C23 11.6569 21.6569 13 20 13H11.8671L12.7066 12Z"
        fill="#EBEBF5"
        fillOpacity="0.3"
      />
      <path
        className="path"
        d="M24 5C24.5523 5 25 5.44772 25 6V8C25 8.55228 24.5523 9 24 9V5Z"
        fill="#3C3C43"
        fillOpacity="0.6"
      />
      <path
        className="path"
        d="M7.37915 6.65512L10.4509 3H3C2.44772 3 2 3.44772 2 4V10C2 10.5523 2.44771 11 3 11H9.3772L10.1225 9.07672H8.43814C7.70024 9.07672 7 8.52171 7 7.66706C7 7.25458 7.16151 6.92205 7.37446 6.66088L7.37915 6.65512Z"
        fill="#34C759"
      />
      <path
        className="path"
        d="M13.8754 4.92727L14.619 3H20.0002C20.5525 3 21.0002 3.44772 21.0002 4V10C21.0002 10.5523 20.5525 11 20.0002 11H13.5464L16.6099 7.35091C16.8246 7.09729 17.0002 6.75553 17.0002 6.33187C17.0002 5.47437 16.2915 4.92727 15.5621 4.92727H13.8754Z"
        fill="#34C759"
      />
      <path
        className="path"
        d="M10.4509 3L7.37915 6.65512L7.37446 6.66088C7.16151 6.92205 7 7.25458 7 7.66706C7 8.52171 7.70024 9.07672 8.43814 9.07672H10.1225L9.3772 11H3C2.44771 11 2 10.5523 2 10V4C2 3.44772 2.44772 3 3 3H10.4509Z"
        fill="#34C759"
      />
      <path className="path" d="M5 3H3C2.44772 3 2 3.44772 2 4V10C2 10.5523 2.44771 11 3 11H5V3Z" fill="#FFD60A" />
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

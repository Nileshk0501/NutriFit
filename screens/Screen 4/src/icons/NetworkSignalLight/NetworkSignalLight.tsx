/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  opacity: string;
  fill: string;
  className: any;
}

export const NetworkSignalLight = ({
  color = "#3C3C43",
  opacity = "0.18",
  fill = "black",
  className,
}: Props): JSX.Element => {
  return (
    <svg
      className={`network-signal-light ${className}`}
      fill="none"
      height="14"
      viewBox="0 0 20 14"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M12 4H13C13.5523 4 14 4.44772 14 5V11C14 11.5523 13.5523 12 13 12H12C11.4477 12 11 11.5523 11 11V5C11 4.44772 11.4477 4 12 4Z"
        fill="#D1D1D6"
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M7.5 6H8.5C9.05228 6 9.5 6.44772 9.5 7V11C9.5 11.5523 9.05228 12 8.5 12H7.5C6.94772 12 6.5 11.5523 6.5 11V7C6.5 6.44772 6.94772 6 7.5 6Z"
        fill="#D1D1D6"
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M3 7.5H4C4.55228 7.5 5 7.94772 5 8.5V11C5 11.5523 4.55228 12 4 12H3C2.44772 12 2 11.5523 2 11V8.5C2 7.94772 2.44772 7.5 3 7.5Z"
        fill="#D1D1D6"
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M16.5 2H17.5C18.0523 2 18.5 2.44772 18.5 3V11C18.5 11.5523 18.0523 12 17.5 12H16.5C15.9477 12 15.5 11.5523 15.5 11V3C15.5 2.44772 15.9477 2 16.5 2Z"
        fill={color}
        fillOpacity={opacity}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M12 4H13C13.5523 4 14 4.44772 14 5V11C14 11.5523 13.5523 12 13 12H12C11.4477 12 11 11.5523 11 11V5C11 4.44772 11.4477 4 12 4Z"
        fill={fill}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M7.5 6H8.5C9.05228 6 9.5 6.44772 9.5 7V11C9.5 11.5523 9.05228 12 8.5 12H7.5C6.94772 12 6.5 11.5523 6.5 11V7C6.5 6.44772 6.94772 6 7.5 6Z"
        fill={fill}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M3 7.5H4C4.55228 7.5 5 7.94772 5 8.5V11C5 11.5523 4.55228 12 4 12H3C2.44772 12 2 11.5523 2 11V8.5C2 7.94772 2.44772 7.5 3 7.5Z"
        fill={fill}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M16.5 2H17.5C18.0523 2 18.5 2.44772 18.5 3V11C18.5 11.5523 18.0523 12 17.5 12H16.5C15.9477 12 15.5 11.5523 15.5 11V3C15.5 2.44772 15.9477 2 16.5 2Z"
        fill="black"
        fillRule="evenodd"
      />
    </svg>
  );
};

NetworkSignalLight.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
  fill: PropTypes.string,
};

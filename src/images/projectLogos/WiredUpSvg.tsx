import React from "react";

function WiredUpSvg(props: any) {
  return (
    <svg
      width={`${props?.width ? props?.width : 24}`}
      height={`${props?.height ? props?.height : 25}`}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12.5938" cy="13" r="12.5938" fill="#2176FF" />
      <path
        d="M5.19095 12.7116L8.4639 12.7116L9.24644 14.775L7.63551 17.7633L5.19095 12.7116Z"
        fill="#D3E4FF"
      />
      <path
        d="M10.0217 10.439L13.303 10.4391L10.9548 17.764L7.64636 17.764L10.0217 10.439Z"
        fill="white"
      />
      <path
        d="M10.0278 10.4445L13.3008 10.4445L15.5109 16.205L13.8999 19.1934L10.0278 10.4445Z"
        fill="#D3E4FF"
      />
      <path
        d="M17.1321 7.53091L20.4845 7.53089L17.2115 19.1851L13.9031 19.1851L17.1321 7.53091Z"
        fill="white"
      />
    </svg>
  );
}

export default WiredUpSvg;

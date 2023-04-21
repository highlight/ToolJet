import React from 'react';

const Logout = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
  <svg
    width={width}
    height={width}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.4697 13.4697C17.1768 13.7626 17.1768 14.2374 17.4697 14.5303C17.7626 14.8232 18.2374 14.8232 18.5303 14.5303L19.8232 13.2374C20.5066 12.554 20.5066 11.446 19.8232 10.7626L18.5303 9.46967C18.2374 9.17678 17.7626 9.17678 17.4697 9.46967C17.1768 9.76256 17.1768 10.2374 17.4697 10.5303L18.1893 11.25L13 11.25C12.5858 11.25 12.25 11.5858 12.25 12C12.25 12.4142 12.5858 12.75 13 12.75L18.1893 12.75L17.4697 13.4697Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 4.51611L14 4.51611C15.5188 4.51611 16.75 5.74733 16.75 7.26611C16.75 7.68033 16.4142 8.01611 16 8.01611C15.5858 8.01611 15.25 7.68033 15.25 7.26611C15.25 6.57576 14.6904 6.01611 14 6.01611H11V4.51611ZM16 16.5161C16.4142 16.5161 16.75 16.8519 16.75 17.2661C16.75 18.7849 15.5188 20.0161 14 20.0161H11V18.5161H14C14.6904 18.5161 15.25 17.9565 15.25 17.2661C15.25 16.8519 15.5858 16.5161 16 16.5161Z"
      fill={fill}
    />
    <path
      opacity="0.4"
      d="M3 5.99676C3 5.27511 3.38195 4.60121 4.01783 4.20091L7.44642 2.36612C8.9654 1.40989 11 2.43812 11 4.16198V19.838C11 21.5619 8.9654 22.5901 7.44642 21.6339L4.01785 19.7959C3.38196 19.3956 3.00002 18.7217 3.00002 18L3 5.99676Z"
      fill={fill}
    />
  </svg>
);

export default Logout;

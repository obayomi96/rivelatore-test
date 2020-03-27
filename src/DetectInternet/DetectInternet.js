import React from "react";

const DetectInternet = ({ message, style }) => {
  const connected = navigator.onLine;
  return (
    <div>
      {
        !connected ?
        <div style={style}>
          { message }
      </div> : ''
      }
    </div>
  );
};
export default DetectInternet;

import React from "react";

const DetectInternet = ({ message, style }) => {
  const internetConnection = navigator.onLine;
  return (
    <div style={style}
    >
      {!internetConnection ? message : ""}
    </div>
  );
};
export default DetectInternet;

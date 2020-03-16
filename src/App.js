import React from "react";


const App = () => {
  return (
    <div>
      <DetectInternet
        message="Not connected.. Please check your internet connection"
        style={{
          display: 'flex',
          flexDirection: 'column',
          color: "#fff",
          background: "red",
          textAlign: "center",
          height: "3em",
          alignItems: "center",
          justifyContent: 'center',
        }}
      />
    </div>
  );
};

export default App;

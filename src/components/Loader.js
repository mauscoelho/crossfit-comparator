import React from "react";
import ReactLoader from "react-loader-spinner";

export const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <ReactLoader
        type="Ball-Triangle"
        color="#00BFFF"
        height="90"
        width="60"
      />
    </div>
  );
};

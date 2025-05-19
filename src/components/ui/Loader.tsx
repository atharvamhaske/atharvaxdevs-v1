import React from "react";

const Loader = ({ text = "loading projects data..." }: { text?: string }) => {
  return (
    <div
      style={{
        background: "#000",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
    >
      <span
        style={{
          fontFamily: '"Fira Mono", "Consolas", "Menlo", monospace',
          fontSize: "1.5rem",
          color: "#ff3c3c",
          background: "#000",
        }}
      >
        <span style={{ color: "#b6faff" }}>$</span> {text}
      </span>
    </div>
  );
};

export default Loader; 
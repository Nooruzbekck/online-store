import React from "react";

export const Input = ({ value, onChange, type = "text", ...props }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      {...props}
      style={{
        padding: "20px",
        margin: "10px 0",
        border: "2px solid #ccc",
        borderRadius: "4px",
        width: "100%",
      }}
      
    />
  );
};

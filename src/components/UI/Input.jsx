import React, { useState } from "react";

const Input = ({ value, onChange, placeholder, type = "text", ...props }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
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

export default Input

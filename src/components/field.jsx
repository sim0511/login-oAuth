import React from "react";
import Typography from "./typography";

const FormField = ({
  label,
  labelStyle,
  labelSize = "medium",
  labelColor = "inherit",
  labelAlign = "left",
  placeholder,
  inputStyle = {},
  ...inputProps
}) => {
  return (
    <div className="inputContainer" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      {/* Use Typography for the label */}
      <Typography
        size={labelSize}
        color={labelColor}
        align={labelAlign}
        style={labelStyle}
      >
        {label}
      </Typography>

      {/* Input field */}
      <input
        type="text"
        placeholder={placeholder}
        className="inputField"
        style={{
          padding: "0.5rem",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "1rem",
          color: "white",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          ...inputStyle,
        }}
        {...inputProps}
      />
      <style>
        {`
          input::placeholder {
            color: white; 
            opacity: 1; 
          }
        `}
      </style>
    </div>
  );
};

export default FormField;


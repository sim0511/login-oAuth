import React from "react";
import Typography from "./typography";

const Button = ({
  label = "Click Me", 
  size = "medium", 
  color = "white",
  backgroundColor = "blue", 
  border = "none", 
  borderRadius = "4px", 
  padding = "0.5rem 1rem", 
  hoverColor = "#003366",
  typographySize = "medium", 
  typographyColor = "inherit",
  typographyAlign = "center", 
  style = {}, // Custom styles for the button
  onClick, // Click event handler
}) => {
  const buttonStyle = {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor,
    color,
    border,
    borderRadius,
    padding,
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    ...style, 
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = hoverColor;
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = backgroundColor;
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Use Typography for the label */}
      <Typography
        size={typographySize}
        color={typographyColor}
        align={typographyAlign}
        style={{ margin: 0 }} 
      >
        {label}
      </Typography>
    </button>
  );
};

export default Button;

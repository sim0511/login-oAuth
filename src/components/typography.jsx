import PropTypes from "prop-types";
import React from "react";

// Default sizes, colors, and fonts
const Typography = ({
  size = "medium", 
  fontFamily = "Arial, sans-serif", 
  color = "inherit", 
  align = "left", 
  children,
  style = {}, 
}) => {
  
  const sizeStyles = {
    small: "0.8rem",
    medium: "1rem",
    large: "1.5rem",
    xlarge: "2rem",
  };

  // Combine base styles with additional styles
  const combinedStyles = {
    fontSize: sizeStyles[size] || sizeStyles.medium,
    fontFamily,
    color,
    textAlign: align,
    margin: 0,
    ...style, // Override or add custom styles
  };

  return <p style={combinedStyles}>{children}</p>;
};

// Prop validation
Typography.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large", "xlarge"]),
  fontFamily: PropTypes.string,
  color: PropTypes.string,
  align: PropTypes.oneOf(["left", "center", "right", "justify"]),
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

export default Typography;


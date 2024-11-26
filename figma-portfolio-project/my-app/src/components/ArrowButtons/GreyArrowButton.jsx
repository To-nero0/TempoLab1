import React from "react";

const GreyArrowButton = () => {
  // Styles for the button
  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "60px", // Circle size
    height: "60px", // Circle size
    borderRadius: "50%", // Circular shape
    backgroundColor: "#4a4a4a", // grey background
    border: "none", // No border
    cursor: "pointer", // Pointer cursor on hover
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)", // Subtle shadow
    transition: "transform 0.2s ease-in-out", // Smooth hover animation
  };

  // SVG arrow styles
  const svgStyle = {
    width: "24px", // Adjust width
    height: "24px", // Adjust height
   
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")} // Scale up on hover
      onMouseLeave={(e) => (e.target.style.transform = "scale(1)")} // Scale back on leave
    >
      {/* Custom SVG for arrow tilted at 45 degrees (North East) */}
      <svg
        style={svgStyle}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="3" // Increased thickness for both tail and head
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Shorter Tail and Bigger Arrowhead for 45-degree tilt */}
        <line x1="2" y1="12" x2="19" y2="12" /> {/* Shortened Tail */}
        <polyline points="12 6 19 12 12 18" /> {/* Bigger Arrowhead */}
      </svg>
    </button>
  );
};

export default GreyArrowButton;

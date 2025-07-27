import React from "react";

const Star = ({
  size,
  color,
  filled,
  onClick,
  onMouseEnter,
  onMouseLeave,
  pointerEvents,
}) => {
  const starStyle = {
    display: "block",
    width: `${size}px`,
    height: `${size}px`,
    cursor: "pointer",
    pointerEvents: `${pointerEvents}`,
  };

  return (
    <span
      style={starStyle}
      role="button"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {filled ? (
        <svg
          id="Icons"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill={color}
        >
          <defs>
            <style>.cls-1</style>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="linear-gradient"
              x1="12"
              x2="12"
              y1="1.755"
              y2="23.076"
            >
              <stop offset="0" stopColor="#fff650" />
              <stop offset="1" stopColor="#ffab17" />
            </linearGradient>
          </defs>
          <path
            className="cls-1"
            d="M12.992,20.912l3.5,1.838A2.131,2.131,0,0,0,19.58,20.5l-.667-3.893a2.129,2.129,0,0,1,.613-1.887l2.828-2.757a2.131,2.131,0,0,0-1.181-3.635l-3.909-.568a2.133,2.133,0,0,1-1.6-1.166L13.911,3.056a2.131,2.131,0,0,0-3.822,0L8.341,6.6a2.133,2.133,0,0,1-1.6,1.166l-3.909.568a2.131,2.131,0,0,0-1.181,3.635l2.828,2.757a2.129,2.129,0,0,1,.613,1.887L4.42,20.5A2.131,2.131,0,0,0,7.512,22.75l3.5-1.838A2.135,2.135,0,0,1,12.992,20.912Z"
          />
        </svg>
      ) : (
        <svg
          viewBox="0 0 576 512"
          xmlns="http://www.w3.org/2000/svg"
          fill={color}
        >
          <path d="M528.5 171.5l-146.4-21.29l-65.43-132.4C310.9 5.971 299.4-.002 287.1 0C276.6 0 265.1 5.899 259.3 17.8L193.8 150.2L47.47 171.5C21.2 175.3 10.68 207.6 29.72 226.1l105.9 102.1L110.6 474.6C107 495.3 123.6 512 142.2 512c4.932 0 10.01-1.172 14.88-3.75L288 439.6l130.9 68.7c4.865 2.553 9.926 3.713 14.85 3.713c18.61 0 35.21-16.61 31.65-37.41l-25.05-145.5l105.9-102.1C565.3 207.6 554.8 175.3 528.5 171.5zM390.2 320.6l22.4 130.1l-117.2-61.48c-4.655-2.442-10.21-2.442-14.87 .0001L163.4 450.7l22.4-130.1C186.7 315.4 184.1 310.1 181.2 306.4l-94.7-92.09l130.9-19.04C222.6 194.5 227.1 191.2 229.4 186.5L288 67.99l58.59 118.5c2.331 4.717 6.833 7.986 12.04 8.744l130.9 19.04l-94.7 92.09C391 310.1 389.3 315.4 390.2 320.6z" />
        </svg>
      )}
    </span>
  );
};

export default Star;

import React from 'react';

export default function WaveDivider({ 
  flip = false, 
  bgColor = "white", 
  height = "60px",
  className = ""
}) {
  return (
    <div className={`wave-divider ${className}`} style={{ height }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 120"
        className={`absolute w-full h-full ${flip ? 'transform rotate-180' : ''}`}
        preserveAspectRatio="none"
      >
        <path
          fill={bgColor}
          fillOpacity="1"
          d="M0,64L80,64C160,64,320,64,480,69.3C640,75,800,85,960,80C1120,75,1280,53,1360,42.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
        ></path>
      </svg>
    </div>
  );
} 
import React from "react";

export function RadialProgress({
  radius,
  stroke,
  percent,
  label,
  color = "#3498db"
}) {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2}>
      <g id="radial-progress">
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          style={{
            strokeDashoffset: offset,
            transition: "stroke-dashoffset 0.35s",
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%"
          }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {label && (
          <text x="50%" y="50%" textAnchor="middle">
            {label}
          </text>
        )}
      </g>
    </svg>
  );
}

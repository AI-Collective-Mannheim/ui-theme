import React from "react";

interface CollectiveLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  showWordmark?: boolean;
}

export function CollectiveLogo({
  size = 32,
  showWordmark = true,
  className = "",
  ...props
}: CollectiveLogoProps) {
  if (!showWordmark) {
    return (
      <svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        <path
          d="M16 2 L28 9 L28 23 L16 30 L4 23 L4 9 Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
          fill="none"
          opacity="0.9"
        />
        <path d="M16 8 L23 12 L23 20 L16 24 L9 20 L9 12 Z" fill="#fa7526" />
        <circle cx="16" cy="16" r="2.5" fill="#ffffff" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 170 34"
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g transform="translate(1, 1)">
        <path
          d="M16 2 L28 9 L28 23 L16 30 L4 23 L4 9 Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
          fill="none"
          opacity="0.9"
        />
        <path d="M16 8 L23 12 L23 20 L16 24 L9 20 L9 12 Z" fill="#fa7526" />
        <circle cx="16" cy="16" r="2.5" fill="#ffffff" />
      </g>
      <text
        x="42"
        y="22"
        fontFamily="Inter, -apple-system, BlinkMacSystemFont, sans-serif"
        fontSize="15"
        fontWeight="800"
        letterSpacing="0.12em"
        fill="currentColor"
      >
        AI COLLECTIVE
      </text>
    </svg>
  );
}

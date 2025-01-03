interface SvgProps {
  color?: string;
  height?: string | number;
  width?: string | number;
}

const Logo = ({ color = "#000000", height = 80, width = 300 }: SvgProps) => {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width={width}
    //   height={height}
    //   viewBox="0 0 200 60"
    // >
    //   <rect width="200" height="60" fill="none" />
    //   <text
    //     x="50%"
    //     y="50%"
    //     text-anchor="middle"
    //     dominant-baseline="central"
    //     font-family="Arial, sans-serif"
    //     font-size="36"
    //     fill={color}
    //     font-weight="bold"
    //   >
    //     <tspan style={{ letterSpacing: "5px" }}>V</tspan>
    //     <tspan style={{ letterSpacing: "2px" }}>E</tspan>
    //     <tspan style={{ letterSpacing: "5px" }}>L</tspan>
    //     <tspan style={{ letterSpacing: "2px" }}>V</tspan>
    //     <tspan style={{ letterSpacing: "5px" }}>O</tspan>
    //   </text>
    //   <line x1="25" y1="55" x2="175" y2="55" stroke={color} stroke-width="2" />
    // </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 80"
      width={width}
      height={height}
    >
      <rect x="0" y="0" width="300" height="80" fill="none" />

      <text
        x="20"
        y="55"
        font-family="Roboto, sans-serif"
        font-size="50"
        fill="#333"
        font-weight="bold"
        letter-spacing="3"
      >
        Velvo
      </text>

      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#333", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#aa8f66", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <text
        x="20"
        y="55"
        font-family="Roboto, sans-serif"
        font-size="50"
        fill="url(#grad1)"
        font-weight="bold"
        letter-spacing="3"
      >
        Velvo
      </text>
    </svg>
  );
};

export default Logo;

interface ArrowProps {
  color?: string;
  height?: string;
  width?: string;
  rotation?: number;
}

const Arrow = ({
  color = "#282828",
  height = "6",
  width = "10",
  rotation = 0,
}: ArrowProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <path
        d="M9.06543 0.905151L5.06543 4.90515L1.06543 0.905151"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Arrow;

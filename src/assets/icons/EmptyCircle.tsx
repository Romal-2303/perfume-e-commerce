interface SvgProps {
  strokeWidth?: number;
  color?: string;
}

const EmptyCircle = ({ strokeWidth = 0.1, color = "#aa8f66" }: SvgProps) => {
  return (
    <svg viewBox="0 0 2 2">
      <circle
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth} // Reduced stroke width
        cx="1"
        cy="1"
        r={1 - strokeWidth / 2} // Adjusted radius to fit within the stroke
      />
    </svg>
  );
};

export default EmptyCircle;

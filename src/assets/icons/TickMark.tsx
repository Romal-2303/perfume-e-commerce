interface SvgProps {
  color?: string;
  height?: string;
  width?: string;
}

const TickMark = ({
  color = "#000000",
  height = "10px",
  width = "12px",
}: SvgProps) => {
  return (
    <svg
      fill={color}
      width={width}
      height={height}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      enable-background="new 0 0 512 512"
    >
      <polygon points="437.3,30 202.7,339.3 64,200.7 0,264.7 213.3,478 512,94 " />
    </svg>
  );
};

export default TickMark;

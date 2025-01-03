interface SvgProps {
  color?: string;
}

const FilledCircle = ({ color = "#aa8f66" }: SvgProps) => {
  return (
    <svg
      fill={color}
      width="800px"
      height="800px"
      viewBox="0 0 15 15"
      version="1.1"
      id="circle"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14,7.5c0,3.5899-2.9101,6.5-6.5,6.5S1,11.0899,1,7.5S3.9101,1,7.5,1S14,3.9101,14,7.5z" />
    </svg>
  );
};

export default FilledCircle;

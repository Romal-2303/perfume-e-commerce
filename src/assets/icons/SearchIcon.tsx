interface SearchIconProps {
  color?: string;
  height?: string;
  width?: string;
}

const SearchIcon = ({
  color = "#282828",
  height = "20",
  width = "20",
}: SearchIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.6529 14.2392C18.2892 10.903 18.0672 6.04688 14.987 2.96664C11.6675 -0.352813 6.28561 -0.352814 2.96615 2.96664C-0.353302 6.2861 -0.353302 11.668 2.96615 14.9875C6.04639 18.0677 10.9025 18.2897 14.2387 15.6534L17.8154 19.2301C18.2059 19.6206 18.8391 19.6206 19.2296 19.2301C19.6201 18.8396 19.6201 18.2064 19.2296 17.8159L15.6529 14.2392ZM13.5728 4.38086C16.1112 6.91926 16.1112 11.0348 13.5728 13.5732C11.0343 16.1117 6.91878 16.1117 4.38037 13.5732C1.84196 11.0348 1.84196 6.91926 4.38037 4.38086C6.91878 1.84245 11.0343 1.84245 13.5728 4.38086Z"
        fill={color}
      />
    </svg>
  );
};

export default SearchIcon;

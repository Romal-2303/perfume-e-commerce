import classes from "./Dropdown.module.scss";

interface DropdownProps {
  optionArr?: string[];
  dropdownClickHandler?: () => void;
  dropdownHoverHandler?: () => void;
  dropdownLeaveHandler?: () => void;
}

const Dropdown = ({
  optionArr = ["option 1", "option 2"],
  dropdownClickHandler,
  dropdownHoverHandler,
  dropdownLeaveHandler,
}: DropdownProps) => {
  return (
    <div
      className={classes["dropdown-container"]}
      onClick={dropdownClickHandler}
      onMouseEnter={dropdownHoverHandler}
      onMouseLeave={dropdownLeaveHandler}
    >
      {optionArr.map((option: string, index) => (
        <div
          className={classes["dropdown-option"]}
          style={
            index === 0
              ? { borderTopLeftRadius: "4px", borderTopRightRadius: "4px" }
              : index === optionArr.length - 1
              ? {
                  borderBottomLeftRadius: "4px",
                  borderBottomRightRadius: "4px",
                }
              : {}
          }
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;

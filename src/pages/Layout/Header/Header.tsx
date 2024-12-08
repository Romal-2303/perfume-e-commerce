import Banner from "../Banner/Banner";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <div className={classes["header-container"]}>
      <Banner />
      <div className={classes["header-strip-container"]}></div>
    </div>
  );
};

export default Header;

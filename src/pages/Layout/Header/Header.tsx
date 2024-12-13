import { useState } from "react";
import Banner from "../Banner/Banner";
import classes from "./Header.module.scss";
import SearchIcon from "../../../assets/icons/SearchIcon";
import CartIcon from "../../../assets/icons/CartIcon";
import UserIcon from "../../../assets/icons/UserIcon";
import Arrow from "../../../assets/icons/Arrow";
import Dropdown from "../../../components/Dropdown/Dropdown";

const headerArr = [
  {
    text: "Home",
    iconEnabled: false,
    options: ["Home 1", "Home 2", "Home 3"],
  },
  {
    text: "Shops",
    iconEnabled: false,
    options: ["Shops 1", "Shops 2", "Shops 3"],
  },
  {
    text: "Pages",
    iconEnabled: false,
    options: ["Pages 1", "Pages 2", "Pages 3"],
  },
  {
    text: "Blogs",
    iconEnabled: false,
    options: ["Blogs 1", "Blogs 2", "Blogs 3"],
  },
  {
    text: "About",
    iconEnabled: false,
    options: ["About 1", "About 2", "About 3"],
  },
];

const Header = () => {
  const [bannerVisibility, setBannerVisibility] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [dropdownVisiblity, setDropdownVisibility] = useState(false);

  const linkClickHandler = (receivedIndex: number) => () => {
    setSelectedIndex(receivedIndex);
    setDropdownVisibility((prevState) => !prevState);
  };

  return (
    <div className={classes["header-container"]}>
      {bannerVisibility && <Banner closeClickHandler={setBannerVisibility} />}
      <div className={classes["header-strip-container"]}>
        <div className={classes["logo-container"]}>Your Logo</div>
        <div className={classes["nav-link-container"]}>
          {headerArr.map((el, index) => (
            <p
              className={classes["arrow-container"]}
              onClick={linkClickHandler(index)}
            >
              <p className={classes["arrow-container-text"]}>{el.text} </p>
              <Arrow
                rotation={
                  dropdownVisiblity && selectedIndex === index ? 180 : 0
                }
                height="5"
                width="9"
              />
              {dropdownVisiblity && selectedIndex === index && (
                <div className={classes["dropdown-wrapper"]}>
                  <Dropdown optionArr={el.options} />
                </div>
              )}
            </p>
          ))}
        </div>
        <div className={classes["header-tools-container"]}>
          <div className={classes["input-container"]}>
            <div className={classes["search-icon-container"]}>
              <SearchIcon color="#8a8888" height="16" width="16" />
            </div>
            <input placeholder="Search" />
          </div>
          <div className={classes["cart-container"]}>
            <CartIcon color="#403f3f" />
          </div>
          <div className={classes["profile-container"]}>
            <UserIcon color="#403f3f" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
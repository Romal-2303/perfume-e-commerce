import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import classes from "./Header.module.scss";
import SearchIcon from "../../../assets/icons/SearchIcon";
import CartIcon from "../../../assets/icons/CartIcon";
import UserIcon from "../../../assets/icons/UserIcon";
import Arrow from "../../../assets/icons/Arrow";
import Dropdown from "../../../components/Dropdown/Dropdown";
import { motion, useScroll, useSpring } from "framer-motion";
import Logo from "../../../assets/icons/Logo";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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
  const navigate = useNavigate();
  const cartItems = useSelector((state: any) => state.cartData);

  const [bannerVisibility, setBannerVisibility] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [dropdownVisiblity, setDropdownVisibility] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const authTokenFlag = localStorage.getItem("authToken");

    if (authTokenFlag) {
      setBannerVisibility(false);
    }
  }, []);

  useEffect(() => {
    setTotalAmount(
      cartItems.reduce((acc: number, currValue: any) => {
        return acc + currValue.amount;
      }, 0)
    );
  }, [cartItems]);

  const linkClickHandler = (receivedIndex: number) => () => {
    setSelectedIndex(receivedIndex);
    setDropdownVisibility((prevState) => !prevState);
  };

  const profileClickHandler = () => {
    setUserDropdown((prevState) => !prevState);
  };

  const logoutClickHandler = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const loginClickHandler = () => {
    navigate("/login");
  };

  const logoClickHandler = () => {
    navigate("/");
  };

  const cartIconClickHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className={classes["header-container"]}>
      {bannerVisibility && <Banner closeClickHandler={setBannerVisibility} />}
      <div className={classes["header-strip-container"]}>
        <div className={classes["logo-container"]} onClick={logoClickHandler}>
          <Logo height={60} width={200} />
        </div>
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
          <div
            className={classes["cart-container"]}
            onClick={cartIconClickHandler}
          >
            <CartIcon color="#403f3f" />
            <div className={classes["item-number-circle"]}>
              <p>{totalAmount}</p>
            </div>
          </div>
          <div
            className={classes["profile-container"]}
            onClick={profileClickHandler}
          >
            <UserIcon color="#403f3f" />

            {userDropdown && (
              <div className={classes["user-popup-container"]}>
                {localStorage.getItem("authToken") ? (
                  <p onClick={logoutClickHandler}>Log Out</p>
                ) : (
                  <p onClick={loginClickHandler}>Log In</p>
                )}
              </div>
            )}
          </div>
        </div>
        <motion.div className={classes["progress-bar"]} style={{ scaleX }} />
      </div>
    </div>
  );
};

export default Header;

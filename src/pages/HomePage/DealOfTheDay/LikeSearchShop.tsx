import React from "react";
import classes from "./DealOfTheDay.module.scss";
import LikeIcon from "../../../assets/icons/LikeIcon";
import ShopIcon from "../../../assets/icons/ShopIcon";
import SearchIcon from "../../../assets/icons/SearchIcon";

interface LikeSearchShopProps {
  isVisible: boolean;
}

const LikeSearchShop: React.FC<LikeSearchShopProps> = ({ isVisible }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className={classes["icons"]}>
      <div>
        <LikeIcon color="white" />
      </div>
      <div>
        <SearchIcon color="white" />
      </div>
      <div>
        <ShopIcon color="white" />
      </div>
    </div>
  );
};

export default LikeSearchShop;

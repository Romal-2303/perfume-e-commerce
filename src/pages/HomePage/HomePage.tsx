import { useEffect, useRef, useState } from "react";
import BestCollections from "./BestCollections/BestCollections";
import DealOfTheDay from "./DealOfTheDay/DealOfTheDay";
import classes from "./HomePage.module.scss";
import OurLastestNews from "./OurLastestNews/OurLastestNews";
import CategorySection from "./CategorySection/CategorySection";
import PromotionStrip from "./PromotionStrip/PromotionStrip";
import ShowCase from "./ShowCase/ShowCase";
import Headphones from "../../assets/icons/Headphones";

const HomePage = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLDivElement | null>(null);
  const promotionStripRef = useRef<HTMLDivElement | null>(null);
  const [btnColor, setBtnColor] = useState("#aa8f66");

  return (
    <div className={classes["homepage-container"]}>
      <ShowCase cardRef={cardRef} />
      <DealOfTheDay />
      <BestCollections />
      <CategorySection cardRef={cardRef} />
      <PromotionStrip promotionStripRef={promotionStripRef} />
      <OurLastestNews />
      <div
        className={classes["support-btn-container"]}
        style={{ backgroundColor: btnColor }}
        ref={btnRef}
      >
        <Headphones color={"white"} />
      </div>
    </div>
  );
};

export default HomePage;

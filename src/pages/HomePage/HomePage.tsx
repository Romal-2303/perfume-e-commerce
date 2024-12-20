import { useRef } from "react";
import BestCollections from "./BestCollections/BestCollections";
import DealOfTheDay from "./DealOfTheDay/DealOfTheDay";
import classes from "./HomePage.module.scss";
import OurLastestNews from "./OurLastestNews/OurLastestNews";
import CategorySection from "./CategorySection/CategorySection";
import PromotionStrip from "./PromotionStrip/PromotionStrip";
import ShowCase from "./ShowCase/ShowCase";

const HomePage = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={classes["homepage-container"]}>
      <ShowCase cardRef={cardRef} />

      <DealOfTheDay />

      <BestCollections />

      <CategorySection cardRef={cardRef} />
      <PromotionStrip />
      <OurLastestNews />
    </div>
  );
};

export default HomePage;

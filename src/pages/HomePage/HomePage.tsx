import BestCollections from "./BestCollections/BestCollections";
import DealOfTheDay from "./DealOfTheDay/DealOfTheDay";
import classes from "./HomePage.module.scss";
import OurLastestNews from "./OurLastestNews/OurLastestNews";
import CategorySection from "./CategorySection/CategorySection";
import PromotionStrip from "./PromotionStrip/PromotionStrip";
import ShowCase from "./ShowCase/ShowCase";

const HomePage = () => {
  return (
    <div className={classes["homepage-container"]}>
      <ShowCase />

      <DealOfTheDay/>

      <BestCollections/>


      <OurLastestNews/>
      <CategorySection />
      <PromotionStrip />
    </div>
  );
};

export default HomePage;

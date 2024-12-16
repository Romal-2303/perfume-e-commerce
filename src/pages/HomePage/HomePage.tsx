import CategorySection from "./CategorySection/CategorySection";
import classes from "./HomePage.module.scss";
import PromotionStrip from "./PromotionStrip/PromotionStrip";
import ShowCase from "./ShowCase/ShowCase";

const HomePage = () => {
  return (
    <div className={classes["homepage-container"]}>
      <ShowCase />
      <CategorySection />
      <PromotionStrip />
    </div>
  );
};

export default HomePage;

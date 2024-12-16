import BestCollections from "./BestCollections/BestCollections";
import DealOfTheDay from "./DealOfTheDay/DealOfTheDay";
import classes from "./HomePage.module.scss";
import OurLastestNews from "./OurLastestNews/OurLastestNews";
import ShowCase from "./ShowCase/ShowCase";

const HomePage = () => {
  return (
    <div className={classes["homepage-container"]}>
      <ShowCase />

      <DealOfTheDay/>

      <BestCollections/>


      <OurLastestNews/>
    </div>
  );
};

export default HomePage;

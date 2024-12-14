import DealOfTheDay from "./DealOfTheDay/DealOfTheDay";
import classes from "./HomePage.module.scss";
import ShowCase from "./ShowCase/ShowCase";

const HomePage = () => {
  return (
    <div className={classes["homepage-container"]}>
      <ShowCase />

      <DealOfTheDay/>
    </div>
  );
};

export default HomePage;

import classes from "./HomePage.module.scss";
import ShowCase from "./ShowCase/ShowCase";

const HomePage = () => {
  return (
    <div className={classes["homepage-container"]}>
      <ShowCase />
    </div>
  );
};

export default HomePage;

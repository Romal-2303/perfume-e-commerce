import { useEffect } from "react";
import Carousel from "../../../components/Carousel/Carousel";
import classes from "./ShowCase.module.scss";

let priorityCard1 = [
  <>
    <p className={classes["small-text-1"]}>SALE UPTO 40% OFF!</p>
    <p className={classes["main-text"]}>Spring Summer Collection</p>
    <p className={classes["price-text"]}>
      New Price: <span>$270.00</span>
    </p>
    <div className={classes["shop-now-btn"]}>SHOP NOW</div>
  </>,
  <>
    <p className={classes["small-text-1"]}>SALE UPTO 40% OFF!</p>
    <p className={classes["main-text"]}>Spring Summer Collection</p>
    <p className={classes["price-text"]}>
      New Price: <span>$270.00</span>
    </p>
    <div className={classes["shop-now-btn"]}>SHOP NOW</div>
  </>,
  <>
    <p className={classes["small-text-1"]}>SALE UPTO 40% OFF!</p>
    <p className={classes["main-text"]}>Spring Summer Collection</p>
    <p className={classes["price-text"]}>
      New Price: <span>$270.00</span>
    </p>
    <div className={classes["shop-now-btn"]}>SHOP NOW</div>
  </>,
];

const ShowCase = () => {
  useEffect(() => {
    fetch("https://fimgs.net/mdimg/perfume/") // Example API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }

        return response.json(); // Parse the JSON from the response
      })
      .then((data) => {
        console.log("Fetched data:", data); // Handle the JSON data
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <div className={classes["showcase-container"]}>
      <div className={classes["priority-1-container"]}>
        <Carousel
          carouselArr={priorityCard1}
          carouselStyle={{ width: "850px" }}
        />
      </div>
      <div className={classes["right-cards-container"]}>
        <div className={classes["priority-2-container"]}>
          <div className={classes["card-content"]}>
            <p className={classes["card-title"]}>Pick Your Items</p>
            <p className={classes["card-desc"]}>
              Adipiscing elit curabitur senectus sem
            </p>
            <div className={classes["shop-now-btn"]}>SHOP NOW</div>
          </div>
          <div className={classes["card-image-container"]}></div>
        </div>
        <div className={classes["priority-3-container"]}>
          <div className={classes["card-content"]}>
            <p className={classes["card-title"]}>Best of products</p>
            <p className={classes["card-desc"]}>
              Cras pulvinar loresum dolor conse
            </p>
            <p className={classes["price-text"]}>$379.00</p>
          </div>
          <div className={classes["card-image-container"]}></div>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;

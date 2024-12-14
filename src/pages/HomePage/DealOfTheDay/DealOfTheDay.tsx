import React, { useState } from "react";
import classes from "./DealOfTheDay.module.scss";
import { DealtOfTheDayData } from "./data";
import LikeSearchShop from "./LikeSearchShop";

const DealOfTheDay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const itemsPerPage = 4;

  const totalDots = DealtOfTheDayData.length - itemsPerPage + 1;

  const handleDotClick = (index: number) => {
    if (index >= 0 && index < totalDots) {
      setCurrentIndex(index);
    }
  };

  return (
    <div className={classes["deal-of-the-day-container"]}>
      <div className={classes["heading"]}>DEAL OF THE DAY</div>
      <div className={classes["underline-container"]}>
        <div className={classes["underline"]}></div>
      </div>
      <div className={classes["deal-of-the-day-slider"]}>
        <div
          className={classes["deal-of-the-day-card-container"]}
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {DealtOfTheDayData.map((item, index) => (
            <div
              className={classes["deal-of-the-day-card"]}
              key={index}
              style={{ flex: `0 0 ${100 / itemsPerPage}%` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={classes["image-container"]}
                style={{
                  backgroundImage: `url('${item.imageUrl}')`,
                }}
              >
                <div className={classes["new-label"]}>New</div>

                <LikeSearchShop isVisible={hoveredIndex === index} />
              </div>

              <div className={classes["product-details"]}>
                <div className={classes["timer-container"]}>
                  <div className={classes["circle"]}>
                    <span className={classes["black-text"]}>00</span>
                    <span className={classes["grey-text"]}>Days</span>
                  </div>
                  <div className={classes["circle"]}>
                    <span className={classes["black-text"]}>00</span>
                    <span className={classes["grey-text"]}>Hours</span>
                  </div>
                  <div className={classes["circle"]}>
                    <span className={classes["black-text"]}>00</span>
                    <span className={classes["grey-text"]}>Min</span>
                  </div>
                  <div className={classes["circle"]}>
                    <span className={classes["black-text"]}>00</span>
                    <span className={classes["grey-text"]}>Sec</span>
                  </div>
                </div>

                <div className={classes["product-name"]}>{item.name}</div>
                <div className={classes["rating"]}>
                  {"⭐".repeat(parseInt(item.rateStarNo))}
                </div>
                <div className={classes["pricing"]}>
                  {item.isDiscounted && (
                    <span className={classes["previous-cost"]}>
                      ${item.previouscost}
                    </span>
                  )}
                  <span className={classes["current-cost"]}>${item.cost}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={classes["pagination-dots"]}>
        {Array.from({ length: totalDots }, (_, i) => (
          <span
            key={i}
            className={`${classes["dot"]} ${
              currentIndex === i ? classes["active"] : ""
            }`}
            onClick={() => handleDotClick(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default DealOfTheDay;

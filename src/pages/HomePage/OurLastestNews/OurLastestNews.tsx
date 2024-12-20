import React from "react";
import classes from "./OurLastestNews.module.scss";

const OurLastestNews = () => {
  return (
    <div className={classes["our-latest-news-container"]}>
      <div className={classes["heading"]}>OUR LATEST NEWS</div>
      <div className={classes["underline-container"]}>
        <div className={classes["underline"]}></div>
      </div>

      <div className={classes["our-latest-news-body"]}>
        <div className={classes["our-latest-news-card"]}>
          <div className={classes["our-latest-news-image"]}></div>
          <div className={classes["date"]}>AUGUST 17 , 09:14 AM</div>
          <div className={classes["heading"]}>We Bring you the best </div>
          <div className={classes["deatals"]}>
            Phasellus condimentum nulla a arcu lacinia, a venenatis ex congue.
            Mauris nec ante magna.
          </div>
          <div className={classes["read-more"]}>READ MORE</div>
        </div>
        <div className={classes["our-latest-news-card"]}>
          <div className={classes["our-latest-news-image"]}></div>
          <div className={classes["date"]}>AUGUST 17 , 09:14 AM</div>
          <div className={classes["heading"]}>We Bring you the best </div>
          <div className={classes["deatals"]}>
            Phasellus condimentum nulla a arcu lacinia, a venenatis ex congue.
            Mauris nec ante magna.
          </div>
          <div className={classes["read-more"]}>READ MORE</div>
        </div>
        <div className={classes["our-latest-news-card"]}>
          <div className={classes["our-latest-news-image"]}></div>
          <div className={classes["date"]}>AUGUST 17 , 09:14 AM</div>
          <div className={classes["heading"]}>We Bring you the best </div>
          <div className={classes["deatals"]}>
            Phasellus condimentum nulla a arcu lacinia, a venenatis ex congue.
            Mauris nec ante magna.
          </div>
          <div className={classes["read-more"]}>READ MORE</div>
        </div>
      </div>
    </div>
  );
};

export default OurLastestNews;

import React from "react";
import classes from "./OurLastestNews.module.scss";
import { motion } from "framer-motion";

const newsData = [
  {
    id: 1,
    date: "AUGUST 17, 09:14 AM",
    heading: "We Bring you the best",
    details: "Phasellus condimentum nulla a arcu lacinia, a venenatis ex congue. Mauris nec ante magna.",
  },
  {
    id: 2,
    date: "AUGUST 18, 10:30 AM",
    heading: "Discover the latest trends",
    details: "Etiam eget lacus at nulla facilisis posuere. Sed vitae quam id eros venenatis euismod.",
  },
  {
    id: 3,
    date: "AUGUST 19, 12:00 PM",
    heading: "Stay updated with us",
    details: "Suspendisse potenti. Ut ultrices lorem at mauris scelerisque, id tincidunt nisi venenatis.",
  },
];

const OurLastestNews = () => {
  return (
    <div className={classes["our-latest-news-container"]}>
      <div className={classes["heading"]}>OUR LATEST NEWS</div>
      <div className={classes["underline-container"]}>
        <div className={classes["underline"]}></div>
      </div>

      <div className={classes["our-latest-news-body"]}>
        {newsData.map((news) => (
          <motion.div
           key={news.id}
           className={classes["our-latest-news-card"]}
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.8, delay: news.id * 0.1 }}          
          >
            <div className={classes["our-latest-news-image"]}></div>
            <div className={classes["date"]}>{news.date}</div>
            <div className={classes["heading"]}>{news.heading}</div>
            <div className={classes["deatals"]}>{news.details}</div>
            <div className={classes["read-more"]}>READ MORE</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurLastestNews;

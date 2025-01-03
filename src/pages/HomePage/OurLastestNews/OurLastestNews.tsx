import classes from "./OurLastestNews.module.scss";
import { motion } from "framer-motion";
import Graphics from "../../../assets/Images/Graphics.webp";
import Solids from "../../../assets/Images/Solids.webp";
import StreetWear from "../../../assets/Images/StreetWear.webp";

const newsData = [
  {
    id: 1,
    date: "DECEMBER 31",
    heading: "We Bring you the best",
    details:
      "Simple yet stylish, our solid t-shirts are perfect for everyday wear, offering comfort and versatility for any occasion.",
    img: Graphics,
  },
  {
    id: 2,
    date: "DECEMBER 29",
    heading: "Discover the latest trends",
    details:
      "Express your personality with bold graphic designs that add a fun and creative touch to your wardrobe.",
    img: Solids,
  },
  {
    id: 3,
    date: "DECEMBER 28",
    heading: "Stay updated with us",
    details:
      "Stay trendy and urban with our streetwear collection, featuring edgy designs that reflect your unique style.",
    img: StreetWear,
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
            <div className={classes["our-latest-news-image"]}>
              <img src={news.img} alt="tshirt.jpg"></img>
            </div>
            <div className={classes["date"]}>{news.date}</div>
            <div className={classes["heading"]}>{news.heading}</div>
            <div className={classes["deatals"]}>{news.details}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurLastestNews;

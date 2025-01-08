import classes from "./BestCollections.module.scss";
import { motion } from "framer-motion";
import HoodieImage from "../../../assets/Images/Hoodie.png";
import ArrowWithTail from "../../../assets/icons/ArrowWithTail";

const BestCollections = () => {
  return (
    <div className={classes["best-collection-parent"]}>
      <div className={classes["hoodie-container"]}>
        <motion.div
          className={classes["hoodie-content"]}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className={classes["hoodie-text"]}>
            Looking for a <span>hoodie</span> with an amazing print? Grab yours
            now at an unbeatable <span>discount</span> don’t miss out!
          </div>
          <div className={classes["explore-more"]}> Explore More </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className={classes["image-hoodie"]}
        >
          <img src={HoodieImage} alt="" width="310px" />

          <div className={classes["off-conatiner"]}>
            <span className={classes["discount-number"]}>60%</span>
            <p className={classes["off-arrow-container"]}>
              <span>OFF</span>
              <ArrowWithTail />
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BestCollections;

import classes from "./Layout.module.scss";
import Header from "./Header/Header";
import { useScroll, useSpring, motion } from "framer-motion";

const Layout = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  console.log(scaleX);

  return (
    <div className={classes["layout-container"]}>
      <motion.div className={classes["progress-bar"]} style={{ scaleX }} />
      <Header />
    </div>
  );
};

export default Layout;

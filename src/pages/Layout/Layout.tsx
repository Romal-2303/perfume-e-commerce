import classes from "./Layout.module.scss";
import Header from "./Header/Header";
import { useScroll, useSpring, motion } from "framer-motion";
import Footer from "./Footer/Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={classes["layout-container"]}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

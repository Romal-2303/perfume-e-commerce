import LockIcon from "../../../assets/icons/LockIcon";
import Reset from "../../../assets/icons/Reset";
import Rocket from "../../../assets/icons/Rocket";
import classes from "./PromotionStrip.module.scss";

let promotionArr = [
  {
    icon: <Rocket color="white" width="65px" height="65px" />,
    title: "FREE DELIVERY",
    desc: (
      <>
        Free Delivery on all order from EU <br></br> with price more than $90.00
      </>
    ),
  },
  {
    icon: <Reset color="white" width="65px" height="65px" />,
    title: "MONEY GUARANTEE",
    desc: (
      <>
        30 Days money back guarantee <br></br> no question asked!
      </>
    ),
  },
  {
    icon: <LockIcon color="white" width="65px" height="65px" />,
    title: "ONLINE SUPPORT 24/7",
    desc: (
      <>
        We’re here to support to you.<br></br>Let’s shopping now!
      </>
    ),
  },
];

const PromotionStrip = () => {
  return (
    <div className={classes["promotion-strip-container"]}>
      {promotionArr.map((block) => (
        <>
          <div className={classes["promotion-block"]}>
            <div className={classes["icon-container"]}>{block.icon}</div>
            <div className={classes["content-container"]}>
              <p className={classes["content-title"]}>{block.title}</p>
              <p className={classes["content-desc"]}>{block.desc}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default PromotionStrip;

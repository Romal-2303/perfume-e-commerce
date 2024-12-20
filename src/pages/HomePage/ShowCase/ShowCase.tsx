import Carousel from "../../../components/Carousel/Carousel";
import classes from "./ShowCase.module.scss";
import Christmas from "../../../assets/Images/christmas.jpg";
import Gym1 from "../../../assets/Images/Gym1.jpg";
import WomanShopping from "../../../assets/Images/WomanShopping.jpg";
import Purse from "../../../assets/Images/purse.jpg";
import PinkShop from "../../../assets/Images/PinkShop.jpg";

let priorityCard1 = [
  <>
    <p className={classes["small-text-1"]}>SALE UPTO 40% OFF!</p>
    <p className={classes["main-text"]}>Christmas Winter Collection</p>
    <p className={classes["price-text-1"]}>
      New Price: <span>$270.00</span>
    </p>
    <div className={classes["shop-now-btn"]}>
      SHOP NOW <div className={classes["custom-underline"]}></div>
    </div>
  </>,
  <>
    <p className={classes["small-text-1"]}>SALE UPTO 40% OFF!</p>
    <p className={classes["main-text"]}>
      Premium <span className={classes["workout-text"]}>Workout</span>{" "}
      Collection
    </p>
    <p className={classes["price-text"]}>
      New Price: <span>$270.00</span>
    </p>
    <div className={classes["shop-now-btn"]}>
      SHOP NOW <div className={classes["custom-underline"]}></div>
    </div>
  </>,
  <>
    <p className={classes["small-text-3"]}>SALE UPTO 40% OFF!</p>
    <p className={classes["main-text"]}>Grab the Offer Now!</p>
    <p className={classes["price-text-1"]}>
      New Price: <span>$270.00</span>
    </p>
    <div className={classes["shop-now-btn"]}>
      SHOP NOW <div className={classes["custom-underline"]}></div>
    </div>
  </>,
];

interface ShowCaseProps {
  cardRef: any;
}

const ShowCase = ({ cardRef }: ShowCaseProps) => {
  const showNowClickHandler = () => {
    // cardRef.current?.scrollIntoView({ behavior: "smooth" });

    if (cardRef.current) {
      const targetPosition = cardRef.current.offsetTop; // Position to scroll to
      const startPosition = window.scrollY; // Current position
      const distance = targetPosition - startPosition; // Total distance to scroll
      const duration = 1000; // Duration in milliseconds (2 seconds)
      let startTime: number | null = null;

      const animateScroll = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;

        // Easing function for smooth scrolling
        const ease = easeInOutQuad(
          timeElapsed,
          startPosition,
          distance,
          duration
        );
        window.scrollTo(0, ease);

        if (timeElapsed < duration) {
          window.requestAnimationFrame(animateScroll);
        }
      };

      // Easing function for smooth animation
      const easeInOutQuad = (
        t: number,
        b: number,
        c: number,
        d: number
      ): number => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      window.requestAnimationFrame(animateScroll);
    }
  };

  return (
    <div className={classes["showcase-container"]}>
      <div className={classes["priority-1-container"]}>
        <Carousel
          carouselArr={priorityCard1}
          carouselStyle={{ width: "850px" }}
          imgArr={[Christmas, Gym1, WomanShopping]}
        />
      </div>
      <div className={classes["right-cards-container"]}>
        <div className={classes["priority-2-container"]}>
          <div className={classes["card-content"]}>
            <p className={classes["card-title"]}>Pick Your Items</p>
            <p className={classes["card-desc"]}>
              Adipiscing elit curabitur senectus sem
            </p>
            <div className={classes["shop-now-btn-container"]}>
              <div
                className={classes["shop-now-btn"]}
                onClick={showNowClickHandler}
              >
                SHOP NOW
                <div className={classes["custom-underline"]}></div>
              </div>
            </div>
          </div>
          <div className={classes["card-image-container"]}>
            <img src={Purse} alt="example.jpg"></img>
          </div>
        </div>
        <div className={classes["priority-3-container"]}>
          <div className={classes["card-content"]}>
            <p className={classes["card-title"]}>Best of products</p>
            <p className={classes["card-desc"]}>
              Cras pulvinar loresum dolor conse
            </p>
            <p className={classes["price-text"]}>$379.00</p>
          </div>
          <div className={classes["card-image-container"]}>
            <img src={PinkShop} alt="example.jpg"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;

import { ReactNode, act, useEffect, useRef, useState } from "react";
import classes from "./Carousel.module.scss";
import EmptyCircle from "../../assets/icons/EmptyCircle";
import FilledCircle from "../../assets/icons/FilledCircle";

interface CarouselProps {
  carouselArr: ReactNode[];
  carouselStyle?: React.CSSProperties;
}

const Carousel = ({ carouselArr, carouselStyle = {} }: CarouselProps) => {
  const intervalRef = useRef<any>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      // nextClickHandler();
    }, 2000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const nextClickHandler = () => {
    setActiveSlide((prevState) => {
      if (prevState < carouselArr.length - 1) {
        return prevState + 1;
      } else {
        return 0;
      }
    });
  };

  const circlElementClickHandler = (receviedIndex: number) => () => {
    setActiveSlide(receviedIndex);
    clearInterval(intervalRef.current);
  };

  return (
    <div className={classes["carousel-container"]} style={carouselStyle}>
      <div className={classes["circle-container"]}>
        {new Array(carouselArr.length).fill(0).map((el: number, index) => (
          <div
            className={
              activeSlide === index
                ? `${classes["circle-element"]} ${classes["circle-element-active"]}`
                : classes["circle-element"]
            }
            onClick={circlElementClickHandler(index)}
          >
            {activeSlide === index ? (
              <FilledCircle />
            ) : (
              <EmptyCircle strokeWidth={0.2} />
            )}
          </div>
        ))}
      </div>
      {carouselArr.map((ele, index) => {
        return (
          <div
            className={classes["carousel-slide"]}
            style={{ left: `${850 * (index - activeSlide)}px` }}
          >
            {ele}
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;

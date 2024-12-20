import { useState } from "react";
import classes from "./ImageGallery.module.scss";
import Arrow from "../../assets/icons/Arrow";
import { motion } from "framer-motion";

interface ImagegalleryProps {
  imageArr?: [];
}

const ImageGallery = ({ imageArr = [] }: ImagegalleryProps) => {
  const [activeScrollIndex, setActiveScrollIndex] = useState<number>(0);
  const [imageListHovered, setImageListHovered] = useState<boolean>(false);

  const mouseEnterHandler = () => {
    setImageListHovered(true);
  };

  const mouseLeaveHandler = () => {
    setImageListHovered(false);
  };

  const leftArrowClickedHandler = () => {
    setActiveScrollIndex((prevState) => {
      if (prevState > 0) {
        return prevState - 1;
      } else {
        return imageArr.length - 1;
      }
    });
  };

  const rightArrowClickedHandler = () => {
    setActiveScrollIndex((prevState) => {
      if (prevState < imageArr.length - 1) {
        return prevState + 1;
      } else {
        return 0;
      }
    });
  };

  const imageClickHandler = (receivedIndex: number) => () => {
    setActiveScrollIndex(receivedIndex);
  };

  return (
    <div className={classes["image-gallery-container"]}>
      <div className={classes["image-preview-container"]}>
        <img src={imageArr[activeScrollIndex]} alt="tshirts.jpg"></img>
      </div>
      <div
        className={classes["image-list-container"]}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        {imageArr?.map((image, index: number) => (
          <div
            className={
              activeScrollIndex === index
                ? `${classes["image-container"]} ${classes["image-container-active"]}`
                : classes["image-container"]
            }
            style={{ left: `${(160 + 20) * (index - activeScrollIndex)}px` }}
            onClick={imageClickHandler(index)}
          >
            <img src={image} alt="tshirts.jpg"></img>
          </div>
        ))}

        <div
          className={
            imageListHovered
              ? `${classes["left-arrow-container"]} ${classes["left-arrow-container-active"]}`
              : classes["left-arrow-container"]
          }
          onClick={leftArrowClickedHandler}
        >
          <Arrow height="10" width="12" rotation={90} color="white" />
        </div>
        <div
          className={
            imageListHovered
              ? `${classes["right-arrow-container"]} ${classes["right-arrow-container-active"]}`
              : classes["right-arrow-container"]
          }
          onClick={rightArrowClickedHandler}
        >
          <Arrow height="10" width="12" rotation={-90} color="white" />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;

import classes from "./ModalContent.module.scss";
import ImageGallery from "../../../../components/ImageGallery/ImageGallery";
import { StringMappingType } from "typescript";
import TickMark from "../../../../assets/icons/TickMark";
import { useState } from "react";
import HeartIcon from "../../../../assets/icons/HeartIcon";
import Ruler from "../../../../assets/icons/Ruler";
import { motion } from "framer-motion";

interface ModalContentProps {
  selectedCardData: any;
  perfumesObj: any;
  selectedBlock: string;
  clickedCardIndex: number;
}

const ModalContent = ({
  selectedCardData,
  perfumesObj = {},
  selectedBlock,
  clickedCardIndex,
}: ModalContentProps) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState<number>(0);
  const [counter, setCounter] = useState(1);

  const blockClickHandler = (receviedIndex: number) => () => {
    setSelectedColorIndex(receviedIndex);
  };

  const sizeBlockClickHandler = (receviedIndex: number) => () => {
    setSelectedSizeIndex(receviedIndex);
  };

  const counterChangeHandler = (receivedVar: string) => () => {
    if (receivedVar === "increase") {
      setCounter((prevState) => prevState + 1);
    } else {
      setCounter((prevState) => {
        if (prevState - 1 > 1) {
          return prevState - 1;
        } else {
          return 1;
        }
      });
    }
  };

  return (
    <div className={classes["modal-content-container"]}>
      <div className={classes["group-images-container"]}>
        <ImageGallery imageArr={selectedCardData.images ?? []} />
      </div>
      <div className={classes["product-info-container"]}>
        <p className={classes["product-name"]}>{selectedCardData.title}</p>
        <div className={classes["product-rating-container"]}></div>
        <p className={classes["product-availability"]}>
          Availability:{" "}
          <span>
            {perfumesObj[selectedBlock][clickedCardIndex ?? 0].availability}
          </span>
        </p>
        <p className={classes["product-discounted-price"]}>
          ${selectedCardData.price}
          <span className={classes["product-original-price"]}>
            ${(selectedCardData.price ?? 65) + 20}
          </span>
        </p>
        <p className={classes["product-color"]}>
          Color:{" "}
          <span>
            {perfumesObj[selectedBlock][clickedCardIndex ?? 0].color.join("/")}
          </span>
        </p>
        <div className={classes["color-container"]}>
          {perfumesObj[selectedBlock][clickedCardIndex ?? 0].colorCode.map(
            (el: string, index: number) => (
              <div
                className={classes["color-block"]}
                style={{ backgroundColor: el }}
                onClick={blockClickHandler(index)}
              >
                <div className={classes["tick-mark-container"]}>
                  {selectedColorIndex === index && <TickMark color="white" />}
                </div>
              </div>
            )
          )}
        </div>
        <p className={classes["product-size"]}>Pots Size:</p>
        <div className={classes["product-size-blocks-container"]}>
          {perfumesObj[selectedBlock][clickedCardIndex ?? 0].size.map(
            (el: string, index: number) => (
              <div
                className={
                  selectedSizeIndex === index
                    ? `${classes["block-container"]} ${classes["block-container-active"]}`
                    : classes["block-container"]
                }
                onClick={sizeBlockClickHandler(index)}
              >
                {el}
              </div>
            )
          )}
        </div>
        <div className={classes["card-utilities-container"]}>
          <div className={classes["wishlist-chartsize-container"]}>
            <div className={classes["wishlist-container"]}>
              <HeartIcon width="20px" height="20px" /> Add to Wishlist
            </div>
            <div className={classes["chartsize-container"]}>
              <Ruler width="20px" height="20px" /> View Size Chart
            </div>
          </div>
          <div className={classes["add-to-card-wrapper"]}>
            <div className={classes["number-controller"]}>
              <p
                onClick={counterChangeHandler("decrease")}
                className={classes["minus-container"]}
              >
                -
              </p>
              <p className={classes["counter-container"]}>{counter}</p>
              <p
                onClick={counterChangeHandler("increase")}
                className={classes["plus-container"]}
              >
                +
              </p>
            </div>
            <motion.button
              whileTap={{ scale: 0.9, rotate: 1 }}
              className={classes["add-to-cart-btn"]}
            >
              ADD TO CART
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;

import classes from "./ModalContent.module.scss";
import ImageGallery from "../../../../components/ImageGallery/ImageGallery";
import { StringMappingType } from "typescript";
import TickMark from "../../../../assets/icons/TickMark";
import { useState } from "react";

interface ModalContentProps {
  imageArr: any;
  perfumesObj: any;
  selectedBlock: string;
  clickedCardIndex: number;
}

const ModalContent = ({
  imageArr = [],
  perfumesObj = {},
  selectedBlock,
  clickedCardIndex,
}: ModalContentProps) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);

  const blockClickHandler = (receviedIndex: number) => () => {
    setSelectedColorIndex(receviedIndex);
  };

  return (
    <div className={classes["modal-content-container"]}>
      <div className={classes["group-images-container"]}>
        <ImageGallery imageArr={imageArr} />
      </div>
      <div className={classes["product-info-container"]}>
        <p className={classes["product-name"]}>
          {perfumesObj[selectedBlock][clickedCardIndex ?? 0].name}
        </p>
        <div className={classes["product-rating-container"]}></div>
        <p className={classes["product-availability"]}>
          Availability:{" "}
          <span>
            {perfumesObj[selectedBlock][clickedCardIndex ?? 0].availability}
          </span>
        </p>
        <p className={classes["product-discounted-price"]}>
          ${perfumesObj[selectedBlock][clickedCardIndex ?? 0].discountedPrice}
          <span className={classes["product-original-price"]}>
            ${perfumesObj[selectedBlock][clickedCardIndex ?? 0].originalPrice}
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
            (el: string) => (
              <div>{el}</div>
            )
          )}
        </div>
        <div className={classes["card-utilities-container"]}>
          <div className={classes["wishlist-chartsize-container"]}>
            <div className={classes["wishlist-container"]}></div>
            <div className={classes["chartsize-container"]}></div>
          </div>
          <div className={classes["add-to-card-wrapper"]}></div>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;

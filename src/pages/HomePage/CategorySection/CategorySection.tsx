import { useEffect, useState } from "react";
import classes from "./Category.module.scss";
import ShopIcon from "../../../assets/icons/ShopIcon";
import SearchIcon from "../../../assets/icons/SearchIcon";
import HeartIcon from "../../../assets/icons/HeartIcon";
import FilledHeartIcon from "../../../assets/icons/FilledHeartIcon";
import Modal from "../../../components/Modal/Modal";
import ModalContent from "./ModalContent/ModalContent";
import { imageArr, perfumesObj } from "../../../utilites/dummyData";
import { motion, useAnimation } from "framer-motion";

const CategorySection = () => {
  const [cardHoveredIndex, setCardHoveredIndex] = useState<number | null>(0);
  const [selectedBlock, setSelectedBlock] = useState<string>("Bestseller");
  const [likeHovered, setLikeHovered] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [clickedCardIndex, setClickedCardIndex] = useState<number>(0);

  const controls = useAnimation(); // Framer Motion control

  useEffect(() => {
    if (modalVisibility) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = ""; // Enable scroll
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [modalVisibility]);

  const blockCLickHandler = (receivedBlock: string) => () => {
    setSelectedBlock(receivedBlock);
  };

  const mouseEnterHandler = (receivedIndex: number) => () => {
    setCardHoveredIndex(receivedIndex);
  };

  const mouseLeaveHandler = (receivedIndex: number) => () => {
    setCardHoveredIndex(null);
  };

  const likeHoverContainer = () => {
    setLikeHovered(true);
  };

  const likeMouseLeaveHandler = () => {
    setLikeHovered(false);
  };

  const likedClickedHandler = () => {
    // <------- send request -------> //
  };

  const shopClickHandler = (receivedIndex: number) => () => {
    setModalVisibility(true);
    setClickedCardIndex(receivedIndex);
  };

  return (
    <div className={classes["category-section-container"]}>
      <div className={classes["filter-blocks-container"]}>
        {Object.keys(perfumesObj).map((block: string) => (
          <div
            className={
              selectedBlock === block
                ? `${classes["filter-block"]} ${classes["filter-block-active"]}`
                : `${classes["filter-block"]} ${classes["filter-block-inactive"]}`
            }
            onClick={blockCLickHandler(block)}
          >
            {block}
          </div>
        ))}
      </div>
      <div className={classes["perfume-cards-container"]}>
        {perfumesObj[selectedBlock].map((el: any, index: number) => (
          <motion.div
            className={classes["perfume-card"]}
            onMouseEnter={mouseEnterHandler(index)}
            onMouseLeave={mouseLeaveHandler(index)}
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <div className={classes["perfume-image-container"]}></div>
            <div className={classes["perfume-content-container"]}>
              <p>{el.name}</p>
            </div>
            <div className={classes["new-tag"]}>New</div>
            <div
              className={
                cardHoveredIndex === index
                  ? `${classes["card-utilities"]} ${classes["card-utilities-active"]}`
                  : `${classes["card-utilities"]}`
              }
            >
              <div
                className={classes["like-btn-container"]}
                onClick={likedClickedHandler}
                onMouseEnter={likeHoverContainer}
                onMouseLeave={likeMouseLeaveHandler}
              >
                {likeHovered ? (
                  <FilledHeartIcon />
                ) : (
                  <HeartIcon color="white" />
                )}
              </div>
              <div className={classes["search-btn-container"]}>
                <SearchIcon color="white" />
              </div>
              <div
                className={classes["shop-btn-container"]}
                onClick={shopClickHandler(index)}
              >
                <ShopIcon />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Modal
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
      >
        <ModalContent
          imageArr={imageArr}
          perfumesObj={perfumesObj}
          selectedBlock={selectedBlock}
          clickedCardIndex={clickedCardIndex}
        />
      </Modal>
    </div>
  );
};
export default CategorySection;

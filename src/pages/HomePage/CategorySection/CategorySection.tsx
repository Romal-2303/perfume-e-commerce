import { useEffect, useState } from "react";
import classes from "./Category.module.scss";
import ShopIcon from "../../../assets/icons/ShopIcon";
import SearchIcon from "../../../assets/icons/SearchIcon";
import HeartIcon from "../../../assets/icons/HeartIcon";
import FilledHeartIcon from "../../../assets/icons/FilledHeartIcon";
import Modal from "../../../components/Modal/Modal";
import ModalContent from "./ModalContent/ModalContent";
import { perfumesObj } from "../../../utilites/dummyData";
import { motion } from "framer-motion";
import Pagination from "../../../components/Pagination/Pagination";
import Loader from "../../../components/Loader/Loader";

interface CategorySectionProps {
  cardRef: any;
}

const CategorySection = ({ cardRef }: CategorySectionProps) => {
  const [cardHoveredIndex, setCardHoveredIndex] = useState<number | null>(0);
  const [selectedBlock, setSelectedBlock] = useState<string>("Bestseller");
  const [likeHovered, setLikeHovered] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [clickedCardIndex, setClickedCardIndex] = useState<number>(0);
  const [receivedList, setReceivedList] = useState([]);
  const [selectedCardData, setSelectedCardData] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    if (modalVisibility) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [modalVisibility]);

  useEffect(() => {
    setLoading(true);

    fetch(
      `https://api.escuelajs.co/api/v1/products?offset=${
        (pageNumber - 1) * 10
      }&limit=10`
    )
      .then((res) => res.json())
      .then((receivedClothData) => {
        setReceivedList(receivedClothData);
        setLoading(false);
      });
  }, [pageNumber]);

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

  const likedClickedHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    // <------- send request -------> //
  };

  const shopClickHandler =
    (receivedIndex: number, receivedClothData: any) => () => {
      setModalVisibility(true);
      setClickedCardIndex(receivedIndex);
      setSelectedCardData(receivedClothData);
    };

  const pageChangeHandler = (receivedVal: number) => {
    setPageNumber(receivedVal);
  };

  return (
    <div className={classes["category-section-container"]} ref={cardRef}>
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

      {loading ? (
        <div className={classes["loader-wrapper"]}>
          <Loader />
        </div>
      ) : (
        <div className={classes["perfume-cards-container"]}>
          {receivedList.slice(0, 8).map((el: any, index: number) => (
            <motion.div
              className={classes["perfume-card"]}
              onMouseEnter={mouseEnterHandler(index)}
              onMouseLeave={mouseLeaveHandler(index)}
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onClick={shopClickHandler(index, el)}
            >
              <div className={classes["perfume-image-container"]}>
                <img src={el.images[0]} alt="cloth.jpg"></img>
              </div>
              <div className={classes["perfume-content-container"]}>
                <p>{el.title}</p>
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
                <div
                  className={classes["search-btn-container"]}
                  onClick={likedClickedHandler}
                >
                  <SearchIcon color="white" />
                </div>
                <div
                  className={classes["shop-btn-container"]}
                  onClick={shopClickHandler(index, el)}
                >
                  <ShopIcon />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <Pagination
        limit={4}
        maxPage={20}
        pageChangeHandler={pageChangeHandler}
      />
      <Modal
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
      >
        <ModalContent
          selectedCardData={selectedCardData}
          perfumesObj={perfumesObj}
          selectedBlock={selectedBlock}
          clickedCardIndex={clickedCardIndex}
        />
      </Modal>
    </div>
  );
};
export default CategorySection;

import { useEffect, useState } from "react";
import Arrow from "../../assets/icons/Arrow";
import classes from "./Pagination.module.scss";

interface PaginationProps {
  limit: number;
  maxPage: number;
  pageChangeHandler: (receivedVal: number) => any;
}

const Pagination = ({
  limit = 4,
  maxPage = 10,
  pageChangeHandler,
}: PaginationProps) => {
  const [activePage, setActivePage] = useState<number>(1);

  useEffect(() => {
    pageChangeHandler?.(activePage);
  }, [activePage]);

  const actionBtnClickHandler = (receivedAction: string) => () => {
    if (receivedAction === "decrease") {
      setActivePage((prevState) => {
        if (prevState - 1 < 1) {
          return 1;
        } else {
          return prevState - 1;
        }
      });
    } else {
      setActivePage((prevState) => {
        if (prevState + 1 < maxPage) {
          return prevState + 1;
        } else {
          return maxPage;
        }
      });
    }
  };

  const numberClickHandler = (receivedIndex: number) => () => {
    setActivePage(receivedIndex);
  };

  return (
    <div className={classes["pagination-container"]}>
      <div
        className={classes["prev-btn-container"]}
        onClick={actionBtnClickHandler("decrease")}
      >
        <Arrow rotation={90} /> Prev
      </div>
      <div className={classes["pages-number-container"]}>
        {activePage < limit + 1 && (
          <>
            <p
              className={
                activePage === 1
                  ? `${classes["number-container"]} ${classes["active-page"]}`
                  : classes["number-container"]
              }
              onClick={numberClickHandler(1)}
            >
              1
            </p>
            {Array(limit - 1)
              .fill(0)
              .map((el, index) => (
                <p
                  className={
                    activePage === index + 2
                      ? `${classes["number-container"]} ${classes["active-page"]}`
                      : classes["number-container"]
                  }
                  onClick={numberClickHandler(index + 2)}
                >
                  {index + 2}
                </p>
              ))}
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p
              className={
                activePage === maxPage
                  ? `${classes["number-container"]} ${classes["active-page"]}`
                  : classes["number-container"]
              }
              onClick={numberClickHandler(maxPage)}
            >
              {maxPage}
            </p>
          </>
        )}

        {activePage > limit && (
          <>
            <p
              className={
                activePage === 1
                  ? `${classes["number-container"]} ${classes["active-page"]}`
                  : classes["number-container"]
              }
              onClick={numberClickHandler(1)}
            >
              1
            </p>
            <p>.</p>
            <p>.</p>

            {activePage + limit - 1 < maxPage - 1 ? (
              <>
                {Array(limit)
                  .fill(0)
                  .map((el, index) => (
                    <p
                      className={
                        activePage === index + activePage
                          ? `${classes["number-container"]} ${classes["active-page"]}`
                          : classes["number-container"]
                      }
                      onClick={numberClickHandler(index + activePage)}
                    >
                      {activePage + index}
                    </p>
                  ))}
                <p>.</p>
                <p>.</p>
                <p
                  className={
                    activePage === maxPage
                      ? `${classes["number-container"]} ${classes["active-page"]}`
                      : classes["number-container"]
                  }
                  onClick={numberClickHandler(maxPage)}
                >
                  {maxPage}
                </p>
              </>
            ) : (
              <>
                {Array(limit + 1)
                  .fill(0)
                  .map((el, index) => (
                    <p
                      className={
                        activePage === index + maxPage - limit
                          ? `${classes["number-container"]} ${classes["active-page"]}`
                          : classes["number-container"]
                      }
                      onClick={numberClickHandler(index + maxPage - limit)}
                    >
                      {index + maxPage - limit}
                    </p>
                  ))}
              </>
            )}
          </>
        )}
      </div>
      <div
        className={classes["next-btn-container"]}
        onClick={actionBtnClickHandler("increase")}
      >
        Next <Arrow rotation={-90} />
      </div>
    </div>
  );
};

export default Pagination;

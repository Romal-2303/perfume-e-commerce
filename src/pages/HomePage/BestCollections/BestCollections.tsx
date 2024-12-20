import classes from "./BestCollections.module.scss";

const BestCollections = () => {
  return (
    <div className={classes["best-collection-container"]}>
      <div className={classes["collections-container"]}>
        <div
          className={classes["collection"]}
          style={{
            backgroundImage: `url('https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/banner-home-2.jpg')`,
          }}
        >
          <div className={classes["collection-data"]}>
            <div className={classes["top-pick"]}>TOP STAFF PICK</div>
            <div className={classes["title"]}>Best Collection</div>
            <div className={classes["description"]}>
              Proin interdum magna primis id consequat
            </div>
            <div className={classes["shop-now"]}>SHOP NOW</div>
          </div>
        </div>

        <div
          className={classes["earned-it-conatainer"]}
          style={{
            backgroundImage: `url('https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/banner-home-3.jpg')`,
          }}
        >
          <div className={classes["earned-it-data"]}>
            <div className={classes["title"]}>Maybe You’ve</div>
            <div className={classes["subtitle"]}>Earned it</div>
            <div className={classes["description"]}>Use code: STELINA Get</div>
            <div className={`${classes["description"]} ${classes["last"]}`}>
              25% Off for all items!
            </div>
            <div className={classes["shop-now"]}>SHOP NOW</div>
          </div>
        </div>
      </div>

      <div
        className={classes["collection-arrived"]}
        style={{
          backgroundImage: `url('https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/banner-home-15.jpg')`,
        }}
      >
        <div className={classes["collection-arrived-data"]}>
          <div className={classes["title"]}>Collection Arrived</div>
          <div className={classes["description"]}>
            You have no items & Are you
          </div>
          <div className={`${classes["description"]} ${classes["last"]}`}>
            ready to use? Come & shop with us!
          </div>
          <div className={classes["price"]}>
            Price from: <span className={classes["highlight"]}>$45.00</span>
          </div>
          <div className={classes["shop-now"]}>SHOP NOW</div>
        </div>
      </div>
    </div>
  );
};

export default BestCollections;

import React from "react";
import classes from "../Checkout.module.scss";

type Item = {
  image: string;
  brandName: string;
  brandCode: string;
  cost: string;
  quantity: number;
};

type OrderSummaryProps = {
  items: Item[];
  counts: number[];
  handleIncrement: (index: number) => void;
  handleDecrement: (index: number) => void;
};

const OrderSummary: React.FC<OrderSummaryProps> = ({
  items,
  counts,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <div className={classes["right-container"]}>
      <div className={classes["heading"]}>Order Summary</div>
      <div className={classes["right-container-body"]}>
        <div className={classes["add-to-cart-container"]}>
          {items.map((item, index) => (
            <div key={index} className={classes["add-to-cart-items"]}>
              <div className={classes["left-side"]}>
                <div className={classes["add-to-cart-img"]}>
                  <img
                    src={item.image}
                    width={70}
                    height={70}
                    alt={item.brandName}
                  />
                </div>
                <div className={classes["add-to-cart-details"]}>
                  <div className={classes["brand-name"]}>{item.brandName}</div>
                  <div className={classes["brand-code"]}>{item.brandCode}</div>
                  <div className={classes["cost"]}>{item.cost}</div>
                </div>
              </div>
              <div className={classes["right-side"]}>
                <div className={classes["counter"]}>
                  <button
                    className={classes["button"]}
                    onClick={() => handleDecrement(index)}
                  >
                    -
                  </button>
                  <span className={classes["value"]}>
                    {String(counts[index] || 0).padStart(2, "0")}
                  </span>
                  <button
                    className={classes["button"]}
                    onClick={() => handleIncrement(index)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={classes["confirm-order-conatiner"]}>
          <div className={classes["divider"]}></div>
          <div className={classes["subtotal"]}>
            <span className={classes["heading"]}> Subtotal</span>
            <span className={classes["cost"]}>$999</span>
          </div>
          <div className={classes["shipping"]}>
            <span className={classes["heading"]}>Shipping</span>
            <span className={classes["cost"]}>$1</span>
          </div>
          <div className={classes["divider"]}></div>
          <div className={classes["total"]}>
            <span className={classes["heading"]}> Total (USD)</span>
            <span className={classes["cost"]}>$1000</span>
          </div>

          <div className={classes["confirm"]}> Confirm Order</div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;

import React, { useEffect, useState } from "react";
import classes from "./OrderSummary.module.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editCartItem } from "../../../redux/slices/CardData/CartDataSlice";

type OrderSummaryProps = {};

const OrderSummary: React.FC<OrderSummaryProps> = ({}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cartData);

  const [itemArr, setItemArr] = useState<any>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    setTotalAmount(
      cartItems.reduce((acc: number, currValue: any) => {
        return acc + currValue.amount * currValue.price;
      }, 0)
    );

    setItemArr(cartItems);
  }, [cartItems]);

  const handleDecrement =
    (receivedId: number, receivedAmount: number) => () => {
      dispatch(
        editCartItem({
          id: receivedId,
          updatedData: {
            amount: Math.max(1, receivedAmount - 1),
          },
        })
      );
    };
  const handleIncrement =
    (receivedId: number, receivedAmount: number) => () => {
      dispatch(
        editCartItem({
          id: receivedId,
          updatedData: {
            amount: receivedAmount + 1,
          },
        })
      );
    };

  return (
    <div className={classes["order-summary-container"]}>
      <div className={classes["heading"]}>Order Summary</div>
      <div className={classes["order-summary-body"]}>
        <div className={classes["add-to-cart-container"]}>
          {itemArr.map((item: any, index: number) => (
            <div key={index} className={classes["add-to-cart-items"]}>
              <div className={classes["left-side"]}>
                <div className={classes["add-to-cart-img"]}>
                  <img
                    src={item.images[0]}
                    width={70}
                    height={70}
                    alt={item.title}
                  />
                </div>
                <div className={classes["add-to-cart-details"]}>
                  <div className={classes["brand-name"]}>{item.title}</div>
                  <div className={classes["brand-code"]}>{item.brandCode}</div>
                  <div className={classes["cost"]}>${item.price}</div>
                </div>
              </div>
              <div className={classes["right-side"]}>
                <div className={classes["counter"]}>
                  <button
                    className={classes["button"]}
                    onClick={handleDecrement(item.id, item.amount)}
                  >
                    -
                  </button>
                  <span className={classes["value"]}>{item.amount}</span>
                  <button
                    className={classes["button"]}
                    onClick={handleIncrement(item.id, item.amount)}
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
            <span className={classes["cost"]}>${totalAmount}</span>
          </div>
          <div className={classes["shipping"]}>
            <span className={classes["heading"]}>Shipping</span>
            <span className={classes["cost"]}>$5</span>
          </div>
          <div className={classes["divider"]}></div>
          <div className={classes["total"]}>
            <span className={classes["heading"]}> Total (USD)</span>
            <span className={classes["cost"]}>${totalAmount + 5}</span>
          </div>

          <div className={classes["confirm"]}> Confirm Order</div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;

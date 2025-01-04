import classes from "./PaymentMethod.module.scss";

const PaymentMethod = () => {
  return (
    <div className={classes["payment-method-container"]}>
      <div className={classes["online-payment-container"]}>
        <div className={classes["input-container"]}>
          <input type="radio" />
          <p>UPI</p>
        </div>
      </div>
      <div className={classes["card-payment-container"]}>
        <div className={classes["input-container"]}>
          <input type="radio" />
          <p>Debit/Credit Card</p>
        </div>
      </div>
      <div className={classes["input-container"]}>
        <input type="radio" />
        <p>Cash on Delivery</p>
      </div>
    </div>
  );
};

export default PaymentMethod;

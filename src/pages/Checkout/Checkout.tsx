import classes from "./Checkout.module.scss";
import OrderSummary from "./OrderSummary/OrderSummary";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

const Checkout = () => {
  return (
    <div className={classes["checkout-container-wrapper"]}>
      <div className={classes["checkout-container"]}>
        <CheckoutForm />
        <OrderSummary />
      </div>
    </div>
  );
};

export default Checkout;

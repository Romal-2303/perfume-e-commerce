import classes from "./CheckoutForm.module.scss";
import DeliveryInfo from "./DeliveryInfo/DeliveryInfo";
import PaymentMethod from "./PaymentMethod/PaymentMethod";
import ScheduleDelivery from "./ScheduleDelivery/ScheduleDelivery";

const CheckoutForm = () => {
  return (
    <div className={classes["checkout-form-container"]}>
      <section className={classes["delivery-information-container"]}>
        <div className={classes["section-heading"]}>Delivery Information</div>
        <DeliveryInfo />
      </section>

      <section className={classes["schedule-delivery-container"]}>
        <div className={classes["section-heading"]}>Schedule Delivery</div>
        <ScheduleDelivery />
      </section>

      <section className={classes["payment-method-container"]}>
        <div className={classes["section-heading"]}>Payment Method</div>
        <PaymentMethod />
      </section>
    </div>
  );
};

export default CheckoutForm;

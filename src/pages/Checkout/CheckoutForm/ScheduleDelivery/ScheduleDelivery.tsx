import classes from "./ScheduleDelivery.module.scss";

const ScheduleDelivery = () => {
  return (
    <div className={classes["schedule-delivery-container"]}>
      <div className={classes["input-container"]}>
        <p>Delivery Date</p>
        <input placeholder="1st Jan 2025" type="date" />
      </div>
      <div className={classes["input-container"]}>
        <p>Additional Note</p>
        <input placeholder="Leave the parcel at the doorstep." type="text" />
      </div>
    </div>
  );
};

export default ScheduleDelivery;

import classes from "./DeliveryInfo.module.scss";

const DeliveryInfo = () => {
  return (
    <div className={classes["delivery-info-container"]}>
      <div className={classes["input-row"]}>
        <div className={classes["input-container"]}>
          <p>Name</p>
          <input placeholder="User Name" />
        </div>
        <div className={classes["input-container"]}>
          <p>Mobile Number</p>
          <input placeholder="9565659089" type="number" />
        </div>
      </div>
      <div className={classes["input-row"]}>
        <div className={classes["input-container"]}>
          <p>Email</p>
          <input placeholder="velvo@gmail.com" type="email" />
        </div>
        <div className={classes["input-container"]}>
          <p>Country</p>
          <input placeholder="US" type="text" />
        </div>
      </div>
      <div className={classes["input-row"]}>
        <div className={classes["input-container"]}>
          <p>State</p>
          <input placeholder="NewYork" type="text" />
        </div>
        <div className={classes["two-input-container"]}>
          <div className={classes["input-container"]}>
            <p>City</p>
            <input placeholder="NYC" type="text" />
          </div>
          <div className={classes["input-container"]}>
            <p>ZIP</p>
            <input placeholder="100111" type="number" />
          </div>
        </div>
      </div>
      <div className={classes["input-row"]}>
        <div className={classes["input-container"]}>
          <p>Address</p>
          <input placeholder="Address" type="text" />
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;

import React from 'react';
import classes from "../Checkout.module.scss";
import InputField from '../../../components/Input/Input';

const InputContainer = () => {
  const defaultStyle = {
    height: "40px",
    padding: "10px",
    border: "1px solid #e0e0e0",
  };

  const renderInputField = (label: string, placeholder: string, containerClass: string, style: React.CSSProperties = {}) => (
    <InputField
      label={label}
      style={{ ...defaultStyle, ...style }}
      containerClass={containerClass}
      placholder={placeholder}
    />
  );

  const radioInputOptions= ["Online Payment", "Cash on Delivery", "POS on Delivery"]

  return (
    <div className={classes["left-conatiner"]}>
      <section className={classes["delivery-information-container"]}>
        <div className={classes["heading"]}>Delivery Information</div>
        <div className={classes["delivery-information-body"]}>
          <div className={classes["input-conatiner-1"]}>
            {renderInputField("Name", "John Doe", classes["name-conatiner"], { width: "300px" })}
            {renderInputField("Mobile Number", "9876543210", classes["number-container"], { width: "310px" })}
          </div>
          <div className={classes["input-conatiner-2"]}>
            {renderInputField("Email", "acb@gmail.com", classes["email-container"], { width: "300px" })}
            {renderInputField("City", "Bengaluru", classes["city-container"], { width: "317px" })}
          </div>
          <div className={classes["input-conatiner-3"]}>
            {renderInputField("State", "Karnataka", classes["state-conatiner"], { width: "300px" })}
            {renderInputField("Zip Code", "123455", classes["zip-code-conatiner"], { width: "150px" })}
            {renderInputField("State Code", "KA", classes["state-code-conatiner"], { width: "150px" })}
          </div>
          {renderInputField("Address", "#3 , Chowdeshri layout", classes["input-address-4"], { width: "630px" })}
        </div>
      </section>

      <section className={classes["schedule-delivery-container"]}>
        <div className={classes["heading"]}>Schedule Delivery</div>
        <div className={classes["schedule-delivery-body"]}>
          <InputField
            label="Date"
            style={{ width: "630px", height: "40px", padding: "10px", border: "1px solid #e0e0e0 " }}
            containerClass={classes["name-conatiner"]}
            type="date"
          />
          <div className={classes["text-area-container"]}>
            <div className={classes[""]}>Note</div>
            <textarea
              name=""
              id=""
              className={classes["text-area-field"]}
            />
          </div>
        </div>
      </section>

      <section className={classes["payment-method-container"]}>
        <div className={classes["heading"]}>Payment Method</div>
        <div className={classes["payment-method-body"]}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: "1.5rem",
            }}
          >
            {radioInputOptions.map((paymentMethod, index) => (
              <div key={index}>
                <InputField
                  label={paymentMethod}
                  type="radio"
                  id={paymentMethod.toLowerCase().replace(" ", "-")}
                  name="fav_language"
                  value={paymentMethod.toLowerCase().replace(" ", "-")}
                  style={{ marginRight: "10px" }}
                  flexDirection="row"
                  gap="10px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default InputContainer;

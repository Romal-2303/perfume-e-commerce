import React, { useEffect, useState } from "react";
import classes from "./Checkout.module.scss";

type InputFieldProps = {
  label: string;
  type?: string;
  style?: React.CSSProperties;
  containerClass?: string;
  placholder?: string;
};

type Item = {
  image: string;
  brandName: string;
  brandCode: string;
  cost: string;
  quantity: number; 
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  style,
  containerClass,
  placholder,
}) => (
  <div
    style={{ display: "flex", flexDirection: "column", gap: "5px" }}
    className={containerClass}
  >
    <div>{label}</div>
    <input style={style} type={type} placeholder={placholder} />
  </div>
);

const Checkout = () => {
  const items: Item[] = [
    {
      image:
        "https://pronk.in/cdn/shop/files/49_2e3b3e43-98fa-44eb-a06a-6c6c79a43ffa.jpg?v=1708776622&width=1080",
      brandName: "Zoro Tshirt",
      brandCode: "TOASB-2S",
      cost: "$230.49",
      quantity: 1, 
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726721_1280.jpg",
      brandName: "Premium Tshirt",
      brandCode: "TOASB-2S",
      cost: "$230.49",
      quantity: 2, 
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2024/04/17/18/40/ai-generated-8702729_1280.jpg",
      brandName: "Gold Tshirt",
      brandCode: "TOASB-2S",
      cost: "$230.49",
      quantity: 3, 
    },
  ];

  const [counts, setCounts] = useState<number[]>([]);

  useEffect(() => {
    setCounts(items.map((item) => item.quantity));
  }, []);

  const handleIncrement = (index: number) => {
    setCounts((prev) =>
      prev.map((count, i) => (i === index ? count + 1 : count))
    );
  };

  const handleDecrement = (index: number) => {
    setCounts((prev) =>
      prev.map((count, i) => (i === index && count > 0 ? count - 1 : count))
    );
  };

  return (
    <div className={classes["checkout-container"]}>
      <div className={classes["left-conatiner"]}>
        <section className={classes["delivery-information-container"]}>
          <div className={classes["heading"]}>Delivery Information</div>
          <div className={classes["delivery-information-body"]}>
            <div className={classes["input-conatiner-1"]}>
              <InputField
                label="Name"
                style={{ width: "300px", height: "40px" }}
                containerClass={classes["name-conatiner"]}
                placholder="john Doe"
              />
              <InputField
                label="Mobile Number"
                style={{ width: "300px", height: "40px" }}
                containerClass={classes["number-container"]}
                placholder="9876543210"
              />
            </div>
            <div className={classes["input-conatiner-2"]}>
              <InputField
                label="Email"
                style={{ width: "300px", height: "40px" }}
                containerClass={classes["email-container"]}
                placholder="acb@gmail.com"
              />
              <InputField
                label="City"
                style={{ width: "300px", height: "40px" }}
                containerClass={classes["city-container"]}
                placholder="Bengaluru"
              />
            </div>
            <div className={classes["input-conatiner-3"]}>
              <InputField
                label="State"
                style={{ width: "300px", height: "40px" }}
                containerClass={classes["state-conatiner"]}
                placholder="Karnataka"
              />
              <InputField
                label="Zip Code"
                style={{ width: "150px", height: "40px" }}
                containerClass={classes["zip-code-conatiner"]}
                placholder="123455"
              />
              <InputField
                label="State Code"
                style={{ width: "150px", height: "40px" }}
                containerClass={classes["state-code-conatiner"]}
                placholder="KA"
              />
            </div>
            <InputField
              label="Address"
              style={{ width: "600px", height: "40px" }}
              containerClass={classes["input-address-4"]}
              placholder="#3 , chowdeshri layout "
            />
          </div>
        </section>
        <section className={classes["schedule-delivery-container"]}>
          <div className={classes["heading"]}>Schedule Delivery</div>
          <div className={classes["schedule-delivery-body"]}>
            <InputField
              label="Date"
              style={{
                width: "100%",
                height: "40px",
                padding: "10px",
                border: "1px solid #e0e0e0 ",
              }}
              containerClass={classes["name-conatiner"]}
              type="date"
            />

            <div className={classes[""]}>
              <div className={classes[""]}>Note</div>
              <textarea
                name=""
                id=""
                style={{
                  width: "100%",
                  height: "40px",
                  padding: "10px",
                  border: "1px solid #e0e0e0 ",
                }}
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
              <div>
                <input
                  type="radio"
                  id="online-payment"
                  name="fav_language"
                  value="online-payment"
                  style={{ marginRight: "10px" }}
                />
                <label htmlFor="online-payment">Online Payment</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="cash-on-delivery"
                  name="fav_language"
                  value="cash-on-delivery"
                  style={{ marginRight: "10px" }}
                />
                <label htmlFor="cash-on-delivery">Cash on Delivery</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="pos-on-delivery"
                  name="fav_language"
                  value="pos-on-delivery"
                  style={{ marginRight: "10px" }}
                />
                <label htmlFor="pos-on-delivery">POS on Delivery</label>
              </div>
            </div>
          </div>
        </section>
      </div>
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
                    <div className={classes["brand-name"]}>
                      {item.brandName}
                    </div>
                    <div className={classes["brand-code"]}>
                      {item.brandCode}
                    </div>
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
              {" "}
              <span className={classes["heading"]}> Subtotal</span>
              <span className={classes["cost"]}>$999</span>
            </div>
            <div className={classes["shipping"]}>
              <span className={classes["heading"]}>Shipping</span>
              <span className={classes["cost"]}>$1</span>{" "}
            </div>
            <div className={classes["divider"]}></div>
            <div className={classes["total"]}>
              <span className={classes["heading"]}> Total (USD)</span>
              <span className={classes["cost"]}>$1000</span>{" "}
            </div>

            <div className={classes["confirm"]}> Confirm Order</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

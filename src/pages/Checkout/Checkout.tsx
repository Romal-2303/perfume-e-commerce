import React, { useEffect, useState } from "react";
import classes from "./Checkout.module.scss";
import CheckoutInputContainer from "./CheckoutInputContainer/CheckoutInputContainer";
import OrderSummary from "./OrderSummary/OrderSummary";


type ItemType = {
  image: string;
  brandName: string;
  brandCode: string;
  cost: string;
  quantity: number; 
};


const items: ItemType[] = [
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
const Checkout = () => {

  const [productCounts, setProductCounts] = useState<number[]>([]);

  useEffect(() => {
    setProductCounts(items.map((item) => item.quantity));
  }, []);

  const handleIncrement = (index: number) => {
    setProductCounts((prev) =>
      prev.map((count, i) => (i === index ? count + 1 : count))
    );
  };

  const handleDecrement = (index: number) => {
    setProductCounts((prev) =>
      prev.map((count, i) => (i === index && count > 0 ? count - 1 : count))
    );
  };

  return (
    <div className={classes["checkout-container"]}>
    <CheckoutInputContainer />
    <OrderSummary
      items={items}
      productCounts={productCounts}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
    />
  </div>
  );
};

export default Checkout;

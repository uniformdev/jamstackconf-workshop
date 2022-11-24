import React from "react";
import { useUniformContext } from "@uniformdev/context-react";

const EventSimulator = () => {
  const { context } = useUniformContext();
  const onOrderComplete = (e) => {
    e.preventDefault();
    global.analytics.track("Order Completed", {
      product: "123",
      amount: "10000",
      category: "Coffee Machines",
    });
  };
  const onProductFavorite = (e) => {
    e.preventDefault();
    global.analytics.track("Product Favorited", {
      product: "456",
      category: "Beans",
    });
  };

  const onForgetMe = async (e) => {
    e.preventDefault();
    await context.forget(true);
  };
  return (
    <div>
      <button onClick={onProductFavorite}>Favorite Product</button>
      <button onClick={onOrderComplete}>Complete Order</button>
      <button onClick={onForgetMe}>Forget Me</button>
    </div>
  );
};

export default EventSimulator;

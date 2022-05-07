import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CartContext";

export default function Cart() {
  const { cart } = useContext(CartContext);

  let total = cart.reduce((ac, cv) => {
    return ac + cv.price;
  }, 0);

  return (
    <div>
      {cart.map((e) => {
        return <div>{e.title}</div>;
      })}
      {total}
    </div>
  );
}

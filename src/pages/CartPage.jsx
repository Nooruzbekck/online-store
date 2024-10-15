import React, { useContext } from "react";
import { ProdustsList } from "../components/Cards/ProdustsList";
import { CartContext } from "../context/CartContext";

export default function CartPage() {
  const { state } = useContext(CartContext);
  return (
    <div>
      <ProdustsList produstsCard={state} />
    </div>
  );
}

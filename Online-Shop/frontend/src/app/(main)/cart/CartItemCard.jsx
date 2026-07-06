"use client";

import { updateCart } from "@/redux/actions/user";
import Image from "next/image";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";

export default function CartItemCard({ styles, item, user }) {
  const dispatch = useDispatch();

  function handleIncrease(e) {
    e.preventDefault();

    dispatch(
      updateCart({
        userId: user.id,
        productId: item.product.id,
        operation: "increase",
      }),
    );
  }
  function handleDecrease(e) {
    e.preventDefault();

    dispatch(
      updateCart({
        userId: user.id,
        productId: item.product.id,
        operation: "reduce",
      }),
    );
  }
  function handleRemove(e) {
    e.preventDefault();

    dispatch(
      updateCart({
        userId: user.id,
        productId: item.product.id,
        operation: "remove",
      }),
    );
  }

  return (
    <div key={item.product.id} className={styles.cart_item_card}>
      <div className={styles.thumbnail_container}>
        <Image
          src={item.product.thumbnail}
          alt="image loading failed"
          className={styles.thumbnail}
          fill
        />
      </div>
      <div className={styles.product_info}>
        <h3 className={styles.title}>{item.product.title}</h3>
        <p className={styles.description}>{item.product.description}</p>
        <div className={styles.controls}>
          <p className={styles.total_price}>
            ${(item.quantity * item.product.price).toFixed(2)}
          </p>
          <div className={styles.quantity_editor}>
            <button className={styles.decrease}
              onClick={handleDecrease}
            >-</button>
            <p className={styles.quantity}>{item.quantity}</p>
            <button className={styles.increase} 
              onClick={handleIncrease}
            >+</button>
          </div>
          <button className={styles.remove} onClick={handleRemove}>
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
}

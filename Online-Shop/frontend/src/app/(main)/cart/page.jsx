'use client';

import React, { useMemo } from 'react';
import styles from './cart.module.css';

import useRequireLogin from '@/hooks/useRequireLogin';
import CartItemCard from './CartItemCard';

export default function Cart() {
  const user = useRequireLogin();
  const cartItems = user?.cart ?? [];
  const empty = cartItems == [];
  const { totalPrice, totalQuantity } = useMemo(() => {
    return cartItems.reduce(
      (res, item) => {
        res.totalPrice += item.product.price * item.quantity;
        res.totalQuantity += item.quantity;
        return res;
      },
      {
        totalPrice: 0,
        totalQuantity: 0,
      }
    );
  }, [cartItems]);

  if (!user) {
    return null;
  }

  return (
    <div className={styles.cart_container}>
      <div className={styles.cart_summary}>
        <div className={styles.cart_info}>
          <h2>Cart Summary</h2>

          <p>Total Items: <span>{totalQuantity}</span></p>
          <p>Total Price: <span>${totalPrice.toFixed(2)}</span></p>
        </div>
        <button> Confirm Purchase </button>
      </div>

      <div className={`${styles.cart_items} ${empty ? 'empty' : ''}`}>
        {empty ? (
          <p className={styles.empty_message}>Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <CartItemCard key={item.product.id} item={item} styles={styles} user={user}/>
          ))
        )}
      </div>
    </div>
  );
}
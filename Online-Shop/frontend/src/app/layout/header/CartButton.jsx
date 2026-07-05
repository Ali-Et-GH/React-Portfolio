'use client'

import request from "@/utils/request";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function CartButton({styles}) {
  
  const cart = useSelector(state => state.auth.user?.cart) || [];
  const quantity = cart.length;
  const router = useRouter();


  return (
    <div className={`${styles.cart} ${styles.icon}`}
      onClick={() => router.push('/cart')}
    >
      <FaShoppingCart />
      { quantity > 0 ?
        <div className={styles.cart_quantity}>
          {quantity}
        </div>
        : <></>
      }
    </div>
  );
}

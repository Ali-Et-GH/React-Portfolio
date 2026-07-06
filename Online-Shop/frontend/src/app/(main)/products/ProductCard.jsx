'use client'

import { enableLoginRedirect } from "@/redux/actions/navigation";
import { updateCart } from "@/redux/actions/user";
import Image from "next/image";
import React, { useState } from "react";
import { BiCheck, BiX } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

export default function ProductCard({product, styles}) {

  const [ openQuickAdd, setOpenQuickAdd ] = useState(false);
  const [ quantity, setQuantity ] = useState(1);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  function handleAdd(e){
    e.preventDefault();

    if (!user) {
      return dispatch(enableLoginRedirect());
    }
    dispatch(updateCart(
      {
        userId: user.id,
        productId: product.id,
        quantity,
        operation: 'add'
      }
    ))
    setOpenQuickAdd(false);
  }

  return (
    <div key={product.id} className={styles.product_card}>
      <div className={styles.image_container}>
        <Image
          src={product.thumbnail}
          alt="image loading failed"
          fill
          className={styles.thumbnail}
          sizes="27rem"
        />
      </div>
      <div className={styles.info_container}>
        <div className={styles.rating_and_price}>
          <div className={styles.rating}>
            <div className={styles.star}>
              <div className={styles.background}>★★★★★</div>
              <div
                className={styles.foreground}
                style={{ width: `${(product.rating / 5) * 100}%` }}
              >
                ★★★★★
              </div>
            </div>
            <p className={styles.number}>{product.rating}</p>
          </div>
          <span className={styles.price}>{product.price} $</span>
        </div>
        <div className={styles.info}>
          <p className={styles.title}>{product.title}</p>
          <p className={styles.description}>{product.description}</p>
        </div>
        <div className={styles.buttons_container}>
          {
            !openQuickAdd ? (
              <>
                <button className={styles.open}>See More</button>
                <button className={styles.add_cart}
                  onClick={() => setOpenQuickAdd(true)}
                >
                  +<FaShoppingCart />
                </button>
              </>
            ) : (
              <>
                <div className={styles.quantity_selector}>
                  <button className={styles.decrease}
                    onClick={() => setQuantity(q => (q > 1) ? (q - 1) : 1)}
                  >-</button>
                  <p className={styles.quantity}>{quantity}</p>
                  <button className={styles.increase}
                    onClick={() => setQuantity(q => q + 1)}
                  >+</button>
                </div>
                <button className={styles.close}
                  onClick={() => setOpenQuickAdd(false)}
                ><BiX/></button>
                <button className={styles.submit}
                  onClick={handleAdd}
                ><BiCheck/></button>
              </>
            )
          }
        </div>
      </div>
    </div>
  );
}

import React from 'react'
import styles from './products.module.css'
import request from '@/utils/request';
import ProductCard from './ProductCard';

export default async function ProductsPage({ searchParams }) {
  const {category, page} = await searchParams;
  

  const res = await request.get(`/products?category=${category}`);
  const products = await res.data;

    return(
      <div className={styles.products_container}>
        {
          products.map(product => (
            <ProductCard key={product.id} styles={styles} product={product}/>
          ))
        }
      </div>  
    )
}
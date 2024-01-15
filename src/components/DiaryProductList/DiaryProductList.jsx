import React from 'react';
import { useSelector } from 'react-redux';
import styles from './DiaryProductList.module.css';

import { productsList } from '../../redux/products/selectors';

import DiaryProductListItem from '../DiaryProductListItem/DiaryProductListItem';

function DiaryProductList() {
  const products = useSelector(productsList);

  return (
    <div className={styles.productListBox}>
      {products.length > 0 ? (
        <ul className={styles.productList}>
          {products.map(
            ({ _id, productName, productWeight, productCalories }) => (
              <DiaryProductListItem
                key={_id}
                _id={_id}
                productName={productName}
                productWeight={productWeight}
                productCalories={productCalories}
              />
            )
          )}
        </ul>
      ) : (
        <p className={styles.noProductsText}>No products found</p>
      )}
    </div>
  );
}

export default DiaryProductList;

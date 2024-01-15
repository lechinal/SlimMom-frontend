import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { addDiaryListItem } from '../../redux/products/operations';
import { searchProductList } from '../../helpers/searchProduct';
import useDebounce from '../../hooks/useDebounce';

import styles from './DiaryAddProductForm.module.css';
import crossIcon from '../../images/icons/close-cross.svg';

function DiaryAddProductForm({ isShowAddForm, openModal, img }) {
  const [valueToDebounce, setValueToDebounce] = useState('');
  const debouncedValue = useDebounce(valueToDebounce, 1000);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    setValue,
    reset,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      product: '',
      weight: '',
    },
  });

  const productValue = watch('product');
  const weightValue = watch('weight');
  let { date } = useParams();

  const [products, setProducts] = useState([]);
  const [productInput, setProductInput] = useState('');
  const [calories, setCalories] = useState('');

  useEffect(() => {
    setValue('product', productInput);
  }, [setValue, productInput]);

  useEffect(() => {
    if (!debouncedValue) return;

    searchProductList(debouncedValue).then(response => {
      const fetchedProducts = response.data.map(obj => {
        // console.log(obj._id);
        return { id: obj._id, title: obj.title, calories: obj.calories };
      });
      setProducts(fetchedProducts);
    });
  }, [debouncedValue]);

  const onSubmitForm = () => {
    const caloriesCounted = ((calories * weightValue) / 100).toString();
    const product = {
      productName: productValue,
      productWeight: weightValue,
      productCalories: caloriesCounted,
      date: date,
    };
    dispatch(addDiaryListItem(product));
    isShowAddForm && openModal();
    setProductInput('');
    reset();
  };

  const handleChange = value => {
    if (value.length > 1) {
      setValueToDebounce(value);
    }
    setProducts([]);
  };

  return (
    <div className={styles.addProductBox}>
      <form
        className={styles.addProductForm}
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <label className={styles.labelProduct}>
          Enter product name
          {/* <div className={styles.relativeContainer}> */}
          <input
            className={styles.inputForm}
            type="text"
            autoComplete="off"
            {...register('product', {
              required: 'Enter the name of the product/dish',
              onChange: e => handleChange(e.target.value),
            })}
          />
          {products.length > 0 && (
            <ul className={styles.productSelectList}>
              {products.map(product => (
                <li
                  key={product.title}
                  className={styles.productItem}
                  onClick={event => {
                    setProductInput(event.target.innerText);
                    setCalories(product.calories);
                    setProducts([]);
                  }}
                >
                  {product.title}
                </li>
              ))}
            </ul>
          )}
          {productValue && (
            <div
              className={styles.clearField}
              onClick={() => {
                setValue('product', '');
                setProducts([]);
              }}
            >
              <img src={crossIcon} alt="cross" />
            </div>
          )}
          {/* </div> */}
          {errors?.product && (
            <p className={styles.error}>{errors?.product?.message}</p>
          )}
        </label>
        <label className={styles.labelGrams}>
          {/* Grams */}
          <span className={styles.span}>Grams</span>
          <input
            className={styles.inputForm}
            value={weightValue}
            type="number"
            {...register('weight', {
              required: 'Enter the weight of the product',
              min: {
                value: 1,
                message: 'Enter at least 1g',
              },
              validate: value => Number.isInteger(parseFloat(value)) === true,
            })}
          />
          {errors?.weight && (
            <p className={styles.error}>{errors?.weight?.message}</p>
          )}
        </label>
        <div className={styles.addButtonBox}>
          <button
            className={`${styles.addButton} ${
              img !== 'Add' ? styles.addButtonImg : ''
            }`}
            type="submit"
            disabled={!isValid || !productInput}
          >
            {img === 'Add' ? 'Add' : <img src={img} alt="Add" />}
          </button>
        </div>
      </form>
    </div>
  );
}

export default DiaryAddProductForm;

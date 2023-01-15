import React from "react";

import generalStyles from "../styles/App.module.css";
import styles from "../styles/Card.module.css";


function Card({ paint, setPaintings }) {
  const { name, img, prise, discount, isAvailable, isInCard } = paint;
  let newPrise;

  if (discount) {
    newPrise = prise - discount;
  }

  return (
    <li className={styles.card}>
      <img className={styles.card__img} src={img} />
      <div className={styles.card__description}>
        <h3 className={styles.card__name}>{name}</h3>
        {isAvailable ? (
          <div className={styles.card__box}>
            {discount ? (
              <div>
                <p className={styles.card__oldPrice}>{prise} $</p>
                <p className={styles.card__currentPrice}>{newPrise} $</p>
              </div>
            ) : (
              <p className={styles.card__currentPrice}>{prise} $</p>
            )}
            <button className={generalStyles.btn}>Придбати</button>
          </div>
        ) : (
          <p className={styles.soldOut}>Продано</p>
        )}
      </div>
    </li>
  );
}

export default Card;

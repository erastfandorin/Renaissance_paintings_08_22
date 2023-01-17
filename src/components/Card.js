import React from "react";

import generalStyles from "../styles/App.module.css";
import styles from "../styles/Card.module.css";

function Card({ paint, setPaintings }) {
  const { name, img, prise, discount, isAvailable, isInCard } = paint;

  const priseFormat = new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "symbol",
    minimumFractionDigits: 0,
  });

  let oldPrice = priseFormat.format(prise);
  let newPrise = discount ? priseFormat.format(prise - discount) : 0;

  let btnClass = `${generalStyles.btn} ${styles.btn}`;
  if (isInCard) btnClass = btnClass + `${generalStyles.btn__inCard}`;

  return (
    <li className={styles.card}>
      <img className={styles.img} src={img} />
      <div className={styles.description}>
        <h3 className={styles.name}>{name}</h3>
        {isAvailable ? (
          <div className={styles.box}>
            {discount ? (
              <div>
                <p className={styles.oldPrice}>{oldPrice}</p>
                <p className={styles.currentPrice}>{newPrise}</p>
              </div>
            ) : (
              <p className={styles.currentPrice}>{oldPrice}</p>
            )}
            <button className={btnClass}>Придбати</button>
          </div>
        ) : (
          <p className={styles.soldOut}>Продано</p>
        )}
      </div>
    </li>
  );
}

export default Card;

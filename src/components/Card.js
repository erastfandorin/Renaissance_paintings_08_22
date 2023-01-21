import React from "react";

import generalStyles from "../styles/App.module.css";
import styles from "../styles/Card.module.css";

function Card({ paint, setPaintings }) {
  const { imgName, authorName, img, prise, discount, isAvailable, isInCard } = paint;

  const priseFormat = new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "symbol",
    minimumFractionDigits: 0,
  });

  let oldPrice = priseFormat.format(prise);
  let newPrise = discount ? priseFormat.format(prise - discount) : 0;


  return (
    <li className={styles.card}>
      <img className={styles.img} src={img} alt={imgName}/>
      <div className={styles.description}>
        <div>
          <h3 className={styles.name}>{imgName}</h3>
          <p className={styles.name}>{authorName}</p>
        </div>
        {isAvailable 
          ? <div className={styles.box}>
              {discount 
                ? <div>
                    <p className={styles.oldPrice}>{oldPrice}</p>
                    <p className={styles.currentPrice}>{newPrise}</p>
                  </div>
                : <p className={styles.currentPrice}>{oldPrice}</p>
              }
              {isInCard
                ? <button className={`${generalStyles.btn} ${styles.btn} ${generalStyles.btn__inCard}`}>В корзині</button>
                : <button className={`${generalStyles.btn} ${styles.btn}`}>Придбати</button>
              }
            </div>
          : <p className={styles.soldOut}>Продано</p>
        }
      </div>
    </li>
  );
}

export default Card;

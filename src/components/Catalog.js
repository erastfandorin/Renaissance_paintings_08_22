import React from "react";
import Card from "./Card.js";

import styles from "../styles/Catalog.module.css";

function Catalog({ paintings, setPaintings }) {
  return (
    <>
      {paintings.length > 0 ? (
        <ul className={styles.catalog}>
          {paintings.map((paint) => (
            <Card key={paint.id} paint={paint} setPaintings={setPaintings}/>
          ))}
        </ul>
      ) : (
        <p className={styles.soldOut}>Sold out</p>
      )}
    </>
  );
}

export default Catalog;

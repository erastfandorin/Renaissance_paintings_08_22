import React from "react";
import styles from "../styles/Search.module.css";
import generalStyles from "../styles/App.module.css";

function Search(props) {
  return (
    <form className={styles.search}>
      <input
        className={styles.search__input}
        placeholder="Пошук за назвою картини"
      ></input>
      <button className={`${styles.search__btn} ${generalStyles.btn}`}>
        Знайти
      </button>
    </form>
  );
}

export default Search;

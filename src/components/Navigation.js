import React from "react";

import Logo from "../assets/img/logo.svg";
import generalStyles from "../styles/App.module.css";
import styles from "../styles/Navigation.module.css";

function Navigation({ children }) {
  return (
    <div className={`${generalStyles.cont} ${styles.navigation}`}>
      <nav className={styles.navigation__menu}>
        <a href="/" className={styles.navigation__logo}>
          <img
            src={Logo}
            alt="logo"
            width="48"
            height="48"
            className={styles.navigation__image}
          />
        </a>
        <ul className={styles.navigation__list}>
          <li className={styles.navigation__listItem}>
            <a href="/">Каталог</a>
          </li>
          <li className={styles.navigation__listItem}>
            <a href="/">Доставка</a>
          </li>
          <li className={styles.navigation__listItem}>
            <a href="/">Оплата</a>
          </li>
          <li className={styles.navigation__listItem}>
            <a href="/">Контакти</a>
          </li>
          <li className={styles.navigation__listItem}>
            <a href="/">Про галерею</a>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}

export default Navigation;

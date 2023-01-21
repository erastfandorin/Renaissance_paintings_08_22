import { useState } from "react";

import styles from "../styles/MenuBurger.module.css";

function MenuBurger() {
  const [menuClass, setMenuClass] = useState(`${styles.menuBtn}`);

  const toggleMenuClass = () => {
    if (menuClass === `${styles.menuBtn}`) {
      setMenuClass(`${styles.menuBtn} ${styles.active}`);
    } else {
      setMenuClass(`${styles.menuBtn}`);
    }
    console.log(menuClass);
  };

  return (
    <>
      <button className={menuClass} onClick={toggleMenuClass}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* <div class="menu">
        <nav>
          <ul>
            <li className={}>
              <a href="/">Каталог</a>
            </li>
            <li className={}>
              <a href="/">Доставка</a>
            </li>
            <li className={}>
              <a href="/">Оплата</a>
            </li>
            <li className={}>
              <a href="/">Контакти</a>
            </li>
            <li className={}>
              <a href="/">Про галерею</a>
            </li>
          </ul>
        </nav>
      </div> */}
    </>
  );
}

// menuBtn.addEventListener('click', function(){
// 	menuBtn.classList.toggle('active');
// 	menu.classList.toggle('active');
// })

export default MenuBurger;

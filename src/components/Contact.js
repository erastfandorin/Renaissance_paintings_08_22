import React from "react";
import styles from "../styles/Contact.module.css"

function Contact(props) {
  return (
    <ul className={styles.contact}>
      <li className={styles.contact__item}>
        <a className={styles.contact__phone} href="tel:+38(044) 590 0858">+38(044)-590-0858</a>
      </li>
      <li className={styles.contact__item}>
        <address className={styles.contact__address}>
        м.Київ, вул. Велика Васильківська/Басейна 1/3-2
        </address>
      </li>
    </ul>
  );
}

export default Contact;

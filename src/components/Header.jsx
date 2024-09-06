import { useState } from "react";
import styles from "./Header.module.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Лого</div>
      <nav>
        <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
          <li>
            <a href="#about">Про мене</a>
          </li>
          <li>
            <a href="#products">Вироби</a>
          </li>
          <li>
            <a href="#contact">Контакти</a>
          </li>
        </ul>
      </nav>
      <div className={styles.burger} onClick={toggleMenu}>
        <div className={`${styles.line} ${isOpen ? styles.open : ""}`}></div>
        <div className={`${styles.line} ${isOpen ? styles.open : ""}`}></div>
        <div className={`${styles.line} ${isOpen ? styles.open : ""}`}></div>
      </div>
    </header>
  );
}

export default Header;

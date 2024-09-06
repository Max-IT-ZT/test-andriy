import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <p>© 2024 Виготовлення з дерева</p>
      <div className={styles.socialLinks}>
        {/* Можливі посилання на соцмережі */}
      </div>
    </footer>
  );
}

export default Footer;

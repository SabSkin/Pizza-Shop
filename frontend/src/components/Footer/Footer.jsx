import logo from "../../img/title/Лого.png";
import phone from "../../img/title/phone.png";
import location from "../../img/title/location.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.conteinerLogo}>
          <div className={styles.logoContent}>
            <img src={logo} alt="img"></img>
            <p>Денис Пицца</p>
          </div>
          <div className={styles.textContent}>
            <p>© Copyright 2024 — Денис Пицца</p>
          </div>
        </div>
        <div className={styles.conatcts}>
          <p>
            <strong>Контакты</strong>
          </p>
          <div className={styles.dsjc}>
            <img src={phone} alt="img" />
            <p>+7 (926) 223-10-11</p>
          </div>
          <div className={styles.dsjc}>
            <img src={location} alt="img" />
            <p>Москва, ул. Юных Ленинцев, д.99</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

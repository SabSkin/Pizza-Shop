import img from "../../../img/title/order.png";
import styles from "./Order.module.css";
const Order = () => {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <img src={img} alt="Фото" />
        <h2>Заказ принят!</h2>
        <p>
          Спасибо за заказ! <br /> Приятного аппетита! <br /> Будем ждать Вас
          снова!
        </p>
      </div>
    </main>
  );
};

export default Order;

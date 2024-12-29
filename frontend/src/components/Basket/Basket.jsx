import { useSelector } from "react-redux";
import { selectTotalPrice } from "../../redux/additivesSlice/additives";
import shopBag from "../../img/title/ShoppingBag.png";
import styles from "./Basket.module.css";

const Basket = () => {
  const totalPrise = useSelector(selectTotalPrice);
  return (
    <div className={styles.basketBtn}>
      <div className={styles.conteiner}>
        <div>
          <img src={shopBag} alt="Пицца" />
        </div>
        <div>
          <p className={styles.par}>
            <span>{totalPrise}</span>Р
          </p>
        </div>
      </div>
    </div>
  );
};

export default Basket;

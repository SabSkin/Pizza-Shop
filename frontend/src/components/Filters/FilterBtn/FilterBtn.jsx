import filterImg from "../../../img/title/Filter.png";
import styles from "./FilterBtn.module.css";

const Filter = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.btn}>
      <div className={styles.conteiner}>
        <img src={filterImg} alt="img" />
        <p>Фильтры</p>
      </div>
    </button>
  );
};

export default Filter;

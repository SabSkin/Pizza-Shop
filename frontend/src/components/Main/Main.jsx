import { useState } from "react";
import styles from "./Main.module.css";
import Card from "../cards/Card/Card";
import { pizza } from "../../data/pizzaInfo";
import FilterBtn from "../Filters/FilterBtn/FilterBtn";
import FilterPage from "../Filters/FilterPage/FilterPage";

const Main = () => {
  const [isModalOpenFilter, setIsModalOpenFilter] = useState(false);

  const openModalFilter = () => setIsModalOpenFilter(true);
  const closeModalFilter = () => setIsModalOpenFilter(false);

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <FilterPage
          isOpen={isModalOpenFilter}
          onClose={closeModalFilter}
        ></FilterPage>
        <div>
          <div className={styles.pizzaConteiner}>
            <h1 className={styles.text}>Пицца</h1>
            <FilterBtn onClick={openModalFilter} />
          </div>
          <Card pizza={pizza} onClose={closeModalFilter} />
        </div>
      </div>
    </main>
  );
};

export default Main;

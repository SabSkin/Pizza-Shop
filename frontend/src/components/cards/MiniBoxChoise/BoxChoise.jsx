import { useSelector, useDispatch } from "react-redux";
import styles from "./BoxChoise.module.css";
import chees from "../../../img/ingredients/cheese.png";
import cucumber from "../../../img/ingredients/cucumber.png";
import peperoni from "../../../img/ingredients/peperoni.png";
import souse from "../../../img/ingredients/souse.png";
import cucumberFalse from "../../../img/ingredients/cucumberFalse.png";
import grib from "../../../img/ingredients/grib.png";
import luc from "../../../img/ingredients/luc.png";
import perets from "../../../img/ingredients/perets.png";

import {
  addPrise,
  selectAdditives,
} from "../../../redux/additivesSlice/additives";
import { addAdditives } from "../../../redux/basketSlice/basket";

export const BoxChoiseDelete = ({ value }) => {
  return (
    <div className={styles.conteiner}>
      <div>
        <div className={styles.content}>
          <img src={chees} alt="Пицца"></img>
        </div>
        <p className={styles.text}>{value.structure.cheese}</p>
      </div>
      <div>
        <div className={styles.content}>
          {value.structure.cucumbers === true ? (
            <img src={cucumber} alt="Пицца"></img>
          ) : (
            <img src={cucumberFalse} alt="Пицца"></img>
          )}
        </div>
        {value.structure.cucumbers === true ? (
          <p className={styles.text}>
            Огурец <br /> Маринованный
          </p>
        ) : (
          <p className={styles.textFalse}>
            Огурец <br /> Маринованный
          </p>
        )}
      </div>
      <div>
        <div className={styles.content}>
          <img src={peperoni} alt="Пицца"></img>
        </div>
        <p className={styles.text}>{value.structure.meet}</p>
      </div>
      <div>
        <div className={styles.content}>
          <img src={souse} alt="Пицца"></img>
        </div>
        <p className={styles.text}>{value.structure.sauce}</p>
      </div>
    </div>
  );
};

export const BoxChoiseAdd = () => {
  const dispatch = useDispatch();
  const additives = useSelector(selectAdditives);

  const handleToggleAdditive = (ingredient, price) => {
    dispatch(addPrise({ ingredient, price }));
    dispatch(addAdditives({ ingredient }));
  };
  return (
    <div className={styles.conteiner}>
      <div>
        <button
          className={
            additives.includes("сыр") ? styles.contentActive : styles.content
          }
          onClick={() => handleToggleAdditive("сыр", 59)}
        >
          <img src={chees} alt="Пицца"></img>
        </button>
        <p className={styles.text}>Моцрелла</p>
        <p className={styles.priseText}>59Р</p>
      </div>
      <div>
        <button
          className={
            additives.includes("грибы") ? styles.contentActive : styles.content
          }
          onClick={() => handleToggleAdditive("грибы", 59)}
        >
          <img src={grib} alt="Пицца"></img>
        </button>
        <p className={styles.text}>Шампиньоны</p>
        <p className={styles.priseText}>59Р</p>
      </div>
      <div>
        <button
          className={
            additives.includes("лук") ? styles.contentActive : styles.content
          }
          onClick={() => handleToggleAdditive("лук", 59)}
        >
          <img src={luc} alt="Пицца"></img>
        </button>
        <p className={styles.text}>Крсный лук</p>
        <p className={styles.priseText}>59Р</p>
      </div>
      <div>
        <button
          className={
            additives.includes("перец") ? styles.contentActive : styles.content
          }
          onClick={() => handleToggleAdditive("перец", 59)}
        >
          <img src={perets} alt="Пицца"></img>
        </button>
        <p className={styles.text}>Сладкий перец</p>
        <p className={styles.priseText}>59Р</p>
      </div>
    </div>
  );
};

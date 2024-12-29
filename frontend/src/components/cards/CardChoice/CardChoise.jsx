import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { RxCross1 } from "react-icons/rx";
import { BoxChoiseAdd, BoxChoiseDelete } from "../MiniBoxChoise/BoxChoise";
import { useNavigate } from "react-router-dom";
import {
  selectTotalPrice,
  addTotalPrise,
  сhoosingDough,
  addToBasket,
} from "../../../redux/additivesSlice/additives";
import {
  addFinishPrise,
  addObjectValue,
} from "../../../redux/basketSlice/basket";
import Button from "../../UI/Button";
import styles from "./CardChoise.module.css";

const CardChoise = ({ isOpen, onClose, value }) => {
  const [isActiveDough, setIsActiveDough] = useState("button1");
  const [isActiveSize, setActiveSize] = useState("20");
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSize() {
    if (isActiveSize === "20") {
      return <p>400г</p>;
    } else if (isActiveSize === "28") {
      return <p>600г</p>;
    } else if (isActiveSize === "33") {
      return <p>900г</p>;
    }
  }

  const handleChangeSize = (size) => {
    dispatch(addTotalPrise(size));
  };

  const handleFinishPrise = () => {
    dispatch(addFinishPrise(totalPrice));
    dispatch(addObjectValue(value));
    dispatch(addToBasket({ id: uuidv4(), img: value.img, title: value.title }));
  };

  const handleNavigate = () => {
    navigate("/basket");
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <RxCross1 className={styles.icon} onClick={onClose} />
        <div className={styles.content}>
          <div>
            <img src={value.img} className={styles.pizzaImg} alt="Пицца" />
          </div>
          <div>
            <strong>
              <h2 className={styles.text}>{value.title}</h2>
            </strong>
            <div>
              <BoxChoiseDelete value={value} />
            </div>

            <div className={styles.btnConteiner}>
              <button
                className={
                  isActiveDough === "button1"
                    ? styles.bntActive
                    : styles.btnDough
                }
                onClick={() => {
                  setIsActiveDough("button1");
                  dispatch(сhoosingDough("Традиционное"));
                }}
              >
                Традиционное
              </button>
              <button
                onClick={() => {
                  setIsActiveDough("button2");
                  dispatch(сhoosingDough("Тонкое"));
                }}
                className={
                  isActiveDough === "button2"
                    ? styles.bntActive
                    : styles.btnDough
                }
              >
                Тонкое
              </button>
            </div>

            <div className={styles.btnSizeConteiner}>
              <button
                onClick={() => {
                  setActiveSize("20");
                  handleChangeSize("20");
                }}
                className={
                  isActiveSize === "20" ? styles.btnSizeActive : styles.btnSize
                }
              >
                20см
              </button>
              <button
                onClick={() => {
                  setActiveSize("28");
                  handleChangeSize("28");
                }}
                className={
                  isActiveSize === "28" ? styles.btnSizeActive : styles.btnSize
                }
              >
                28см
              </button>
              <button
                onClick={() => {
                  setActiveSize("33");
                  handleChangeSize("33");
                }}
                className={
                  isActiveSize === "33" ? styles.btnSizeActive : styles.btnSize
                }
              >
                33см
              </button>
            </div>

            <div>
              <h4 className={styles.addPizzaText}>Добавьте в пиццу</h4>
              <div>
                <BoxChoiseAdd />
              </div>

              <div className={styles.result}>
                <div className={styles.resultText}>
                  <span>
                    <h4>Итог: {totalPrice}P</h4>
                  </span>
                  <p>{handleSize()}</p>
                </div>
                <Button
                  onClick={() => {
                    handleFinishPrise();
                    handleNavigate();
                  }}
                >
                  Добавить
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardChoise;

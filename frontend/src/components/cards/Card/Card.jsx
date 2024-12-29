import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPizza } from "../../../redux/additivesSlice/additives";
import {
  selectGeneralFilter,
  selectCheeseFilter,
  selectMeetFilter,
} from "../../../redux/filterSlice/filter";
import styles from "./Card.module.css";
import Button from "../../UI/Button";
import CardChoise from "../CardChoice/CardChoise";
import smile from "../../../img/title/smile.png";

const Card = ({ pizza }) => {
  const [isModalOpenCard, setIsModalOpenCard] = useState(false);
  const [value, setValue] = useState("");

  const generalFilter = useSelector(selectGeneralFilter);
  const cheeseFilter = useSelector(selectCheeseFilter);
  const meetFilter = useSelector(selectMeetFilter);

  const dispatch = useDispatch();
  const openModalCard = () => setIsModalOpenCard(true);
  const closeModalCard = () => setIsModalOpenCard(false);

  const filteredPizza = pizza.filter((item) => {
    const matchesGeneral =
      generalFilter.length === 0 ||
      generalFilter.some((filter) => item.type.includes(filter));
    const matchesCheese =
      cheeseFilter.length === 0 ||
      cheeseFilter.some((filter) => item.structure.cheese.includes(filter));
    const matchesMeet =
      meetFilter.length === 0 ||
      meetFilter.some((filter) => item.structure.meet.includes(filter));

    return matchesGeneral && matchesCheese && matchesMeet;
  });

  function handleValueCard(item) {
    setValue(item);
    dispatch(selectPizza(item));
  }

  return (
    <div className={styles.conteiner}>
      <CardChoise
        value={value}
        isOpen={isModalOpenCard}
        onClose={closeModalCard}
      />
      {filteredPizza.length > 0 ? (
        filteredPizza.map((item) => (
          <div key={item.id} className={styles.conteinerCard}>
            <img src={item.img} alt="img" className={styles.img} />
            <div>
              <div className={styles.conteinerTitle}>
                <strong>
                  <p className={styles.title}>{item.title}</p>
                </strong>
                <div className={styles.payload}>
                  <p>{item.payload}</p>
                </div>
              </div>
              <div className={styles.btn}>
                <div className={styles.btnConteiner}>
                  <Button
                    onClick={() => {
                      openModalCard();
                      handleValueCard(item);
                    }}
                  >
                    Выбрать
                  </Button>
                  <p>от {item.basePrice}р</p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className={styles.errorpizza}>
          <img src={smile} alt="img" />
          <h3>Нет пицц, соответствующих выбранным фильтрам.</h3>
        </div>
      )}
    </div>
  );
};

export default Card;

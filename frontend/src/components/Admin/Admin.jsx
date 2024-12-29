import { useSelector, useDispatch } from "react-redux";
import styles from "./Admin.module.css";
import { RxCross1 } from "react-icons/rx";
import {
  selectNewOrder,
  orderComplited,
  deleteAllOrder,
} from "../../redux/orderSlice/orders";
import Button from "../UI/Button";

const Admin = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const order = useSelector(selectNewOrder);

  function handleDeleteOrderComplited(id) {
    dispatch(orderComplited(id));
  }
  function handleDeleteAllOrder() {
    dispatch(deleteAllOrder());
  }
  if (!isOpen) return null;
  return (
    <div className={styles.overlay}>
      <RxCross1 className={styles.icon} onClick={onClose} />
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.conteiner}>
          {order.map((item, i) => (
            <div className={styles.contentConteiner}>
              <div className={styles.contentUser}>
                <strong>
                  <p>Заказ: {++i}</p>
                </strong>
                <p>Имя:{item.userName}</p>
                <p>Телефон:{item.userPhone}</p>
                <p>Почта:{item.userEmail}</p>
                {item.buttonForm === "Самовывоз" ? (
                  <div>
                    <strong>
                      <p>Самовывоз:</p>
                    </strong>
                    <p>1.Ресторан: {item.restaurant}</p>
                  </div>
                ) : (
                  <div>
                    <strong>
                      <p>Доставка:</p>
                    </strong>
                    <p>1.Улица: {item.street}</p>
                    <p>2.Дом: {item.home}</p>
                    <p>3.Подъезд: {item.entrance}</p>
                    <p>4.Этаж: {item.floor}</p>
                    <p>5.Квартира: {item.apartment}</p>
                    <p>6.Домофон: {item.intercom}</p>
                  </div>
                )}
                <div>
                  <strong>
                    <p>Оплата:</p>
                  </strong>
                  {item.payment === "option1" ? (
                    <p>Наличными</p>
                  ) : (
                    <p>Картой</p>
                  )}
                </div>
                <div>
                  <strong>
                    <p>Время:</p>
                  </strong>
                  <p>{item.dataOrder.toString().split(" ").slice(0, 3)}</p>
                  <p>{item.dataOrderTime}</p>
                </div>
                <strong>
                  <p>Итог: {item.totalPrise}</p>
                </strong>
                <Button onClick={() => handleDeleteOrderComplited(item.id)}>
                  Завершить
                </Button>
              </div>
              <div className={styles.basketContent} key={i}>
                {item.orderBasketValue.map((el, i) => (
                  <div key={i}>
                    <div>
                      <strong>
                        <p>Название:</p>
                      </strong>
                      <p>{el.title}</p>
                    </div>
                    <div>
                      <strong>
                        <p>Тесто:</p>
                      </strong>
                      <p>{el.dough}</p>
                    </div>
                    <div>
                      <strong>
                        <p>Размер:</p>
                      </strong>
                      <p>{el.size}</p>
                    </div>
                    <strong>
                      <p>Добавить:</p>
                    </strong>
                    {el.additives.map((ing) => (
                      <p>{ing}</p>
                    ))}
                    <img src={el.img} alt="" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button onClick={handleDeleteAllOrder}>Удалить все</Button>
    </div>
  );
};

export default Admin;

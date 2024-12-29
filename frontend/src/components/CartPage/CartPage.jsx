import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { deleteObjectValue } from "../../redux/basketSlice/basket";
import { useNavigate } from "react-router-dom";
import {
  selectDough,
  selectCurrentSize,
  removeFromBasket,
  selectBasket,
  selectTotalPrice,
  clearBasket,
} from "../../redux/additivesSlice/additives";
import {
  addFinalOrderPickup,
  addFinalOrderDelivery,
  addOrderTime,
  addOrderPayment,
  addFinaleInfoUser,
  addTotalPrise,
  selectAdditives,
  selectValueBasket,
} from "../../redux/basketSlice/basket";
import {
  addNewOrder,
  addOrderBasketValue,
} from "../../redux/orderSlice/orders";
import { RxCross1 } from "react-icons/rx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./CartPage.module.css";

const CartPage = () => {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [buttonForm, setButtonForm] = useState("Доставка");
  const [restaurant, setRestaurant] = useState("");
  const [selectedOption, setSelectedOption] = useState("option1");
  const [dataOrder, setDataOrder] = useState("".toString());
  const [dataOrderTime, setDataOrderTime] = useState("");
  const [placeholderData, setPlaceholderData] = useState("Дата");
  const [payment, setPayment] = useState("option1");
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState("");

  const [street, setStreet] = useState("");
  const [home, setHome] = useState("");
  const [entrance, setEntrance] = useState("");
  const [floor, setFloor] = useState("");
  const [apartment, setApartment] = useState("");
  const [intercom, setIntercom] = useState("");

  const basketValue = useSelector(selectBasket);
  const сurrentSize = useSelector(selectCurrentSize);
  const totalPrise = useSelector(selectTotalPrice);
  const ingredient = useSelector(selectAdditives);
  const dough = useSelector(selectDough);
  const orderBasketValue = useSelector(selectValueBasket);

  const disaptch = useDispatch();
  const navigate = useNavigate();

  const copyBasketValue = () => {
    const copiedBasket = JSON.parse(JSON.stringify(basketValue));
    disaptch(addOrderBasketValue(copiedBasket));
  };

  const handleInfoOrderDilivery = () => {
    disaptch(
      addFinalOrderDelivery({
        buttonForm,
        street,
        home,
        entrance,
        floor,
        apartment,
        intercom,
      })
    );
  };
  const handleNewOrder = () => {
    disaptch(
      addNewOrder({
        restaurant,
        dataOrder,
        dataOrderTime,
        payment,
        userName,
        userPhone,
        userEmail,
        street,
        home,
        entrance,
        floor,
        apartment,
        intercom,
        totalPrise,
        ingredient,
        сurrentSize,
        dough,
        buttonForm,
        orderBasketValue,
      })
    );
  };
  const handleInfoOrderPickup = () => {
    disaptch(addFinalOrderPickup({ restaurant, buttonForm }));
  };
  const handleOrderTime = () => {
    disaptch(addOrderTime({ dataOrder, dataOrderTime, selectedOption }));
  };
  const handleOrderPayment = () => {
    disaptch(addOrderPayment({ payment }));
  };
  const handleFinaleInfoUser = () => {
    disaptch(addFinaleInfoUser({ userName, userPhone, userEmail }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (buttonForm === "Доставка" && !userName.trim()) {
      newErrors.userName = true;
    }
    if (
      (buttonForm === "Доставка" && !userPhone.trim()) ||
      userPhone.length !== 11
    ) {
      newErrors.userPhone = true;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      (buttonForm === "Доставка" && !userEmail.trim()) ||
      !emailRegex.test(userEmail)
    ) {
      newErrors.userEmail = true;
    }
    if (buttonForm === "Доставка" && !street.trim()) {
      newErrors.street = true;
    }
    if (buttonForm === "Доставка" && !home.trim()) {
      newErrors.home = true;
    }
    if (buttonForm === "Доставка" && !entrance.trim()) {
      newErrors.entrance = true;
    }
    if (buttonForm === "Доставка" && !floor.trim()) {
      newErrors.floor = true;
    }
    if (buttonForm === "Доставка" && !apartment.trim()) {
      newErrors.apartment = true;
    }
    if (buttonForm === "Доставка" && !intercom.trim()) {
      newErrors.intercom = true;
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate("/order");
      disaptch(clearBasket());
      disaptch(addTotalPrise(totalPrise));
      handleNewOrder();
      handleInfoOrderDilivery();
      handleInfoOrderPickup();
      handleOrderTime();
      handleOrderPayment();
      handleFinaleInfoUser();
      copyBasketValue();
    }
  };
  const handleDeleteValue = (id) => {
    disaptch(deleteObjectValue(id));
    disaptch(removeFromBasket(id));
  };
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handlerOrderData = (data) => {
    setDataOrder(data);
    setPlaceholderData(data);
  };
  const handlerOrdeTime = (e) => {
    setDataOrderTime(e.target.value);
  };
  const handleOptionpayment = (e) => {
    setPayment(e.target.value);
  };
  const handleComment = (e) => {
    setComment(e.target.value);
  };

  return (
    <main className={styles.main}>
      {basketValue.length === 0 ? (
        <div className={styles.basketAmply}>
          <h1>Корзина пуста</h1>
        </div>
      ) : (
        <h1 className={styles.yourOrder}>Ваш заказ</h1>
      )}
      <div className={styles.conteiner}>
        {basketValue.map((item) => (
          <div className={styles.box} key={item.id}>
            <div className={styles.content}>
              <img src={item.img} alt="Пицца" />
              <div className={styles.textContent}>
                <h4>{item.title}</h4>
                <div className={styles.dough}>
                  <p>{dough} тесто, </p>
                  <p> {сurrentSize}см</p>
                </div>
              </div>
              <p className={styles.prise}>{item.totalPrice}Р</p>
              <RxCross1 onClick={() => handleDeleteValue(item.id)} />
            </div>
          </div>
        ))}
        {basketValue.length === 0 ? (
          ""
        ) : (
          <div>
            <h1 className={styles.about}>О Вас</h1>
            <form onSubmit={handleFormSubmit}>
              <div className={styles.formConteiner}>
                <div className={styles.formContent}>
                  <label>Имя*</label>
                  <input
                    type="text"
                    placeholder="Денис"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className={errors.userName ? styles.errorInput : ""}
                  />
                </div>
                <div className={styles.formContent}>
                  <label>Номер телефона*</label>
                  <input
                    type="number"
                    placeholder="+7"
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                    className={errors.userPhone ? styles.errorInput : ""}
                  />
                </div>
                <div className={styles.formContent}>
                  <label>Почта</label>
                  <input
                    placeholder="mail@mail.ru"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className={errors.userEmail ? styles.errorInput : ""}
                  />
                </div>
              </div>
              <div className={styles.lineContent}>
                <div className={styles.line}></div>
              </div>
              <div>
                <div className={styles.btnText}>
                  <h1>Доставка</h1>
                  <div className={styles.btn}>
                    <button
                      type="button"
                      onClick={() => setButtonForm("Доставка")}
                      className={
                        buttonForm === "Доставка"
                          ? styles.btnActive
                          : styles.btnPassive
                      }
                    >
                      Доставка
                    </button>
                    <button
                      type="button"
                      onClick={() => setButtonForm("Самовывоз")}
                      className={
                        buttonForm === "Самовывоз"
                          ? styles.btnActive
                          : styles.btnPassive
                      }
                    >
                      Самовывоз
                    </button>
                  </div>
                </div>
              </div>
              {buttonForm === "Доставка" ? (
                <div className={styles.delivery}>
                  <div className={styles.street}>
                    <label>Улица*</label>
                    <input
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      placeholder="Пушкина"
                      className={errors.street ? styles.errorInput : ""}
                    />
                  </div>
                  <div className={styles.userHomeInfo}>
                    <div className={styles.userHome}>
                      <label>Дом</label>
                      <input
                        type="string"
                        value={home}
                        onChange={(e) => setHome(e.target.value)}
                        placeholder="1а"
                        className={errors.home ? styles.errorInput : ""}
                      />
                    </div>
                    <div className={styles.userHome}>
                      <label>Подъезд</label>
                      <input
                        type="number"
                        value={entrance}
                        onChange={(e) => setEntrance(e.target.value)}
                        placeholder="1"
                        className={errors.entrance ? styles.errorInput : ""}
                      />
                    </div>
                    <div className={styles.userHome}>
                      <label>Этаж</label>
                      <input
                        type="number"
                        value={floor}
                        onChange={(e) => setFloor(e.target.value)}
                        placeholder="2"
                        className={errors.floor ? styles.errorInput : ""}
                      />
                    </div>
                    <div className={styles.userHome}>
                      <label>Квартира</label>
                      <input
                        type="number"
                        value={apartment}
                        onChange={(e) => setApartment(e.target.value)}
                        placeholder="3"
                        className={errors.apartment ? styles.errorInput : ""}
                      />
                    </div>
                    <div className={styles.userHome}>
                      <label>Домофон</label>
                      <input
                        type="number"
                        value={intercom}
                        onChange={(e) => setIntercom(e.target.value)}
                        placeholder="0000"
                        className={errors.intercom ? styles.errorInput : ""}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className={styles.picup}>
                  <label>Ресторан*</label>
                  <select
                    value={restaurant}
                    onChange={(e) => setRestaurant(e.target.value)}
                    className={errors.userName ? styles.errorInput : ""}
                  >
                    <option>Улица Кирова 17б</option>
                    <option>Улица Морская 21А</option>
                    <option>Улица Ленина 3</option>
                    <option>Улица Гагрина 12/2</option>
                    <option>Улица Глинки 14</option>
                    <option>Улица Декабристов 14</option>
                  </select>
                </div>
              )}
              <div className={styles.line}></div>
              <div className={styles.timeOrder}>
                <label className={styles.timeInfo}>
                  Когда выполнить заказ?
                </label>
                <div className={styles.time}>
                  <input
                    type="radio"
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={handleChange}
                    className={errors.userName ? styles.errorInput : ""}
                  />
                  <label>Как можно скорее</label>
                  <input
                    type="radio"
                    value="option2"
                    checked={selectedOption === "option2"}
                    onChange={handleChange}
                    className={styles.timerDelivery}
                  />
                  <label>По времени</label>
                  {selectedOption === "option2" ? (
                    <div className={styles.dataOrder}>
                      <div>
                        <DatePicker
                          className={styles.dateInput}
                          placeholderText={placeholderData}
                          selected={dataOrder}
                          onChange={handlerOrderData}
                          minDate={new Date()}
                        />
                      </div>
                      <div>
                        <select
                          id="time"
                          value={dataOrderTime}
                          onChange={handlerOrdeTime}
                          className={styles.timePicker}
                        >
                          <option value="" disabled>
                            Выберите время
                          </option>
                          <option value="10:00">10:00</option>
                          <option value="12:00">12:00</option>
                          <option value="14:00">14:00</option>
                          <option value="16:00">16:00</option>
                          <option value="18:00">18:00</option>
                        </select>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className={styles.line}></div>
              <div className={styles.payment}>
                <h1>Оплата</h1>
                <div className={styles.paymentConetent}>
                  <input
                    type="radio"
                    value="option1"
                    checked={payment === "option1"}
                    onChange={handleOptionpayment}
                  />
                  <label>Наличными</label>
                  <input
                    type="radio"
                    value="option2"
                    checked={payment === "option2"}
                    onChange={handleOptionpayment}
                  />
                  <label>Картой</label>
                </div>
              </div>
              <div className={styles.line}></div>
              <div className={styles.comment}>
                <h1>Комментарий</h1>
                <textarea
                  className={styles.commentContent}
                  placeholder="Есть уточнения?"
                  value={comment}
                  onChange={handleComment}
                ></textarea>
              </div>
              <div className={styles.line}></div>
              <div className={styles.result}>
                <h1>Итог: {totalPrise}р</h1>
                <button type="submit" className={styles.btnActive}>
                  Оформить заказ
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </main>
  );
};

export default CartPage;

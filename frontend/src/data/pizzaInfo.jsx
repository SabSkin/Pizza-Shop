import { v4 as uuidv4 } from "uuid";
import gavai from "../img/cardItem/gavai.jpeg";
import margarita from "../img/cardItem/margarita.jpeg";
import ovoshi from "../img/cardItem/ovoshi.jpg";
import peperoni from "../img/cardItem/peperoni.jpeg";
import doublechicken from "../img/cardItem/duableCheaken.jpeg";
import pizzaBurger from "../img/cardItem/pizzaBurger.jpg";
import cheesChik from "../img/cardItem/cheesChik.png";
import fresh from "../img/cardItem/fresh.jpeg";

export const pizza = [
  {
    title: "Бургер-пицца",
    img: pizzaBurger,
    payload:
      "Ветчина , маринованные огурчики , томаты , красный лук , чеснок , соус бургер, моцарелла, фирменный томатный соус",
    basePrice: 399,
    id: uuidv4(),
    type: "С курицей",
    structure: {
      cheese: "Моцарелла",
      meet: "Ветчина",
      sauce: "Томатный",
      cucumbers: true,
    },
  },
  {
    title: "Сырный цыпленок",
    img: cheesChik,
    payload:
      "Цыпленок , моцарелла, сыры чеддер и пармезан , сырный соус, томаты , фирменный соус альфредо, чеснок ",
    basePrice: 430,
    id: uuidv4(),
    type: "С курицей",
    structure: {
      cheese: "Моцарелла",
      meet: "Цыпленок ",
      sauce: "Фирменный",
      cucumbers: true,
    },
  },
  {
    title: "Гавайская",
    img: gavai,
    payload: "Цыпленок , ананасы , моцарелла, фирменный соус альфредо",
    basePrice: 249,
    id: uuidv4(),
    type: "С курицей",
    structure: {
      cheese: "Моцарелла",
      meet: "Цыпленок ",
      sauce: "Фирменный",
      cucumbers: false,
    },
  },
  {
    title: "Чоризо фреш",
    img: fresh,
    payload:
      "Острые колбаски чоризо , сладкий перец , моцарелла, фирменный томатный соус",
    basePrice: 399,
    id: uuidv4(),
    type: "С курицей",
    structure: {
      cheese: "Моцарелла",
      meet: "Колбаски ",
      sauce: "Томатный",
      cucumbers: false,
    },
  },
  {
    title: "Двойной цыпленок",
    img: doublechicken,
    payload: "Цыпленок , моцарелла, фирменный соус альфредо",
    basePrice: 399,
    id: uuidv4(),
    type: "С курицей",
    structure: {
      cheese: "Чеддер",
      meet: "Цыпленок ",
      sauce: "Фирменный",
      cucumbers: true,
    },
  },
  {
    title: "Овощи и грибы",
    img: ovoshi,
    payload:
      "Шампиньоны , томаты , сладкий перец , красный лук , кубики брынзы , моцарелла, фирменный томатный соус, итальянские сыры ",
    basePrice: 399,
    id: uuidv4(),
    type: "Вегатарианская",
    structure: {
      cheese: "Смесь итальянских сыров",
      meet: "Нету",
      sauce: "Томатный",
      cucumbers: true,
    },
  },
  {
    title: "Пеперони",
    img: peperoni,
    payload:
      "Пикантная пепперони , увеличенная порция моцареллы, фирменный томатный соус",
    basePrice: 399,
    id: uuidv4(),
    type: "Пеперони",
    structure: {
      cheese: "Моцарелла",
      meet: "Пеперони ",
      sauce: "Томатный",
      cucumbers: false,
    },
  },
  {
    title: "Маргарита",
    img: margarita,
    payload:
      "Увеличенная порция моцареллы, томаты , итальянские травы , фирменный томатный соус",
    basePrice: 399,
    id: uuidv4(),
    type: "С курицей",
    structure: {
      cheese: "Моцарелла",
      meet: "Цыпленок ",
      sauce: "Томатный",
      cucumbers: false,
    },
  },
];

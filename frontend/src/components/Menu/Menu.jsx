import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Basket from "../Basket/Basket";
import imgPizza from "../../img/title/Лого.png";
import styles from "./Menu.module.css";
import { RiAccountCircleLine } from "react-icons/ri";
import { Register } from "../Register/Register";
import { selectAccess } from "../../redux/registerSlice/register";
import Admin from "../Admin/Admin";

const Menu = () => {
  const [isModalOpenCard, setIsModalOpenCard] = useState(false);
  const [isModalOpenCardAdmin, setIsModalOpenCardAdmin] = useState(false);
  const admin = useSelector(selectAccess);
  const openModalCard = () => setIsModalOpenCard(true);
  const closeModalCard = () => setIsModalOpenCard(false);
  const openModalCardAdmin = () => setIsModalOpenCardAdmin(true);
  const closeModalCardAdmin = () => setIsModalOpenCardAdmin(false);
  return (
    <header className={styles.navbar}>
      <Register isOpen={isModalOpenCard} onClose={closeModalCard} />
      <Admin isOpen={isModalOpenCardAdmin} onClose={closeModalCardAdmin} />
      <div className="navbar-left">
        <Link to="/">
          <img src={imgPizza} alt="img" />
          <span className={styles.logoText}>Денис Пицца</span>
        </Link>
      </div>
      <div className={styles.navbarCart}>
        <div className={styles.iconsContent}>
          <Link to="/basket">
            {" "}
            <Basket />
          </Link>
          {admin === false ? (
            <RiAccountCircleLine
              className={styles.profil}
              onClick={openModalCard}
            />
          ) : (
            <RiAccountCircleLine
              className={styles.profil}
              onClick={openModalCardAdmin}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Menu;

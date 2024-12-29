import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectInitialState,
  changeAccess,
  changeLoginPass,
} from "../../redux/registerSlice/register";
import { RxCross1 } from "react-icons/rx";
import styles from "./Register.module.css";
import Button from "../UI/Button";
export const Register = ({ isOpen, onClose }) => {
  const checkAdmin = useSelector(selectInitialState);
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function checkDataAdmin() {
    if (login === checkAdmin.login && password === checkAdmin.password) {
      dispatch(changeAccess(true));
      onClose();
    } else {
      alert("Неверно");
    }
  }

  if (!isOpen) return null;
  return (
    <div className={styles.overlay}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <RxCross1 className={styles.icon} onClick={onClose} />
        <div>
          <h1>Вход в админ панель</h1>
          <div className={styles.content}>
            <div>
              <label>Логин</label>
              <input
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </div>
            <div>
              <label>Пароль</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <Button onClick={checkDataAdmin}>Войти</Button>
        </div>
      </div>
    </div>
  );
};

export const ChangePassword = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function handleAdminData() {
    dispatch(changeLoginPass({ login, password }));
    onClose();
  }
  if (!isOpen) return null;
  return (
    <div className={styles.overlay}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <RxCross1 className={styles.icon} onClick={onClose} />
        <div>
          <h1>Изменение логин/пароль</h1>
          <div className={styles.content}>
            <div>
              <label>Логин</label>
              <input
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </div>
            <div>
              <label>Пароль</label>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <Button onClick={handleAdminData}>Изменить</Button>
        </div>
      </div>
    </div>
  );
};

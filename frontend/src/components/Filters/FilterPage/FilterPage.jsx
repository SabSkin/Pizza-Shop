import { useState } from "react";
import { useDispatch } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import styles from "./FilterPage.module.css";
import {
  filterInfoGeneral,
  filterInfoChees,
  filterInfoMeet,
} from "../../../data/filterInfo";
import {
  addGeneralFilter,
  addCheesFilter,
  addMeetFilter,
  resetFilters,
} from "../../../redux/filterSlice/filter";

const FilterPage = ({ isOpen, onClose }) => {
  const [selectGeneral, setSelectGeneral] = useState([]);
  const [selectChees, setSelectsChees] = useState([]);
  const [selectMeet, setSelectMeet] = useState([]);
  const dispatch = useDispatch();
  if (!isOpen) return null;

  function handleApplyFilters() {
    dispatch(addGeneralFilter(selectGeneral));
    dispatch(addCheesFilter(selectChees));
    dispatch(addMeetFilter(selectMeet));
    onClose();
  }

  function handleFilterReset() {
    setSelectGeneral([]);
    setSelectsChees([]);
    setSelectMeet([]);
    dispatch(resetFilters());
  }

  function handleFilterTitleGeneral(item) {
    if (selectGeneral.includes(item)) {
      setSelectGeneral(selectGeneral.filter((el) => el !== item));
    } else {
      setSelectGeneral([...selectGeneral, item]);
    }
  }

  function handleFilterTitleChees(item) {
    if (selectChees.includes(item)) {
      setSelectsChees(selectChees.filter((el) => el !== item));
    } else {
      setSelectsChees([...selectChees, item]);
    }
  }

  function handleFilterTitleMeet(item) {
    if (selectMeet.includes(item)) {
      setSelectMeet(selectMeet.filter((el) => el !== item));
    } else {
      setSelectMeet([...selectMeet, item]);
    }
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h1>Фильтры</h1>
          <RxCross1 onClick={onClose} className={styles.closeIcon} />
        </div>
        <div className={styles.filterContainer}>
          <p className={styles.filterTitle}>Общее</p>
          <div className={styles.optionsContainer}>
            {filterInfoGeneral.map((title, index) => (
              <button
                key={index}
                className={`${styles.optionButton} ${
                  selectGeneral.includes(title) ? styles.isActive : ""
                }`}
                onClick={() => handleFilterTitleGeneral(title)}
              >
                <p className={styles.contentFilter}>{title}</p>
              </button>
            ))}
          </div>
        </div>
        <div className={styles.filterContainer}>
          <p className={styles.filterTitle}>Сыр</p>
          <div className={styles.optionsContainer}>
            {filterInfoChees.map((title, index) => (
              <button
                key={index}
                className={`${styles.optionButton} ${
                  selectChees.includes(title) ? styles.isActive : ""
                }`}
                onClick={() => handleFilterTitleChees(title)}
              >
                <p className={styles.contentFilter}>{title}</p>
              </button>
            ))}
          </div>
        </div>
        <div className={styles.filterContainer}>
          <p className={styles.filterTitle}>Мясо</p>
          <div className={styles.optionsContainer}>
            {filterInfoMeet.map((title, index) => (
              <button
                key={index}
                className={`${styles.optionButton} ${
                  selectMeet.includes(title) ? styles.isActive : ""
                }`}
                onClick={() => handleFilterTitleMeet(title)}
              >
                <p className={styles.contentFilter}>{title}</p>
              </button>
            ))}
          </div>
        </div>
        <div className={styles.buttonConteiner}>
          <button onClick={handleApplyFilters} className={styles.btnApply}>
            Применить
          </button>
          <button className={styles.btnReset} onClick={handleFilterReset}>
            Сбросить
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPage;

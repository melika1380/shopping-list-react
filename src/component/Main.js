import React, { useEffect } from "react";
import styles from "./main.module.css";
import { getSavedItems, removeItem } from "./localStorage";

const Main = (props) => {
  useEffect(() => {
    const savedItems = getSavedItems();
    if (savedItems.length === 0) {
      props.setItems(["task1", "task2", "task3"]);
    } else {
      props.setItems(savedItems);
    }
  }, []);
  const handleDeleteItem = (text) => {
    removeItem(text);
    props.setItems(props.items.filter((item) => item !== text));
  };

  return (
    <>
      <ul className={styles.main}>
        {props.items.map((item) => (
          <li
            key={item}
            className={styles.shopLi}
            onClick={() => handleDeleteItem(item)}
          >
            <span>
              <span className={styles.Square}></span>
              <span className={styles.item}>{item}</span>
            </span>
            <span className={styles.tik}></span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Main;

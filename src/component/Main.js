import React, { useState, useEffect } from "react";
import styles from "./main.module.css";
import Footer from "./Footer";
import { saveItem, getSavedItems, removeItem } from "./localStorage";

const Main = () => {

  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {

    const savedItems = getSavedItems();
    if (savedItems.length === 0) {
      setItems(["task1", "task2", "task3"]);
    } else {
      setItems(savedItems);
    }
  }, []);

  const handleAddItem = () => {
    if (inputValue === "") {
      alert("Please fill the box");
    } else {
      //saveItem(key,value)
      saveItem(inputValue,inputValue);
      setInputValue("");
      setItems([...items, inputValue]);
    }
  };

  const handleDeleteItem = (text) => {
    removeItem(text);
    setItems(items.filter((item) => item !== text));
  };

  return (
    <>
      <ul className={styles.main}>
        {items.map((item) => (
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
      <Footer handleAddItem={handleAddItem} setInputValue={setInputValue} inputValue={inputValue}/>
    </>
  );
};

export default Main;

import React, { useState } from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import styles from "./App.module.css";
import Footer from "./component/Footer";
import { saveItem } from "./component/localStorage";

const App = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (inputValue === "") {
      alert("Please fill the box");
    } else {
      //saveItem(key,value)
      saveItem(inputValue, inputValue);
      setInputValue(" ");
      setItems([...items, inputValue]);
    }
  };

  return (
    <div className={styles.body}>
      <Header />
      <Main
        setInputValue={setInputValue}
        inputValue={inputValue}
        items={items}
        setItems={setItems}
      />
      <Footer
        setInputValue={setInputValue}
        inputValue={inputValue}
        items={items}
        setItems={setItems}
        handleAddItem={handleAddItem}
      />
    </div>
  );
};

export default App;

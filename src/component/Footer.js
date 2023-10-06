import React from "react";
import styles from "./Footer.module.css";

const Footer = ({handleAddItem,inputValue,setInputValue}) => {
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.footer}>
      <input
        className={styles.input}
        onChange={handleInputChange}
        type="text"
        value={inputValue}
        placeholder="Write a task"
        required
      />

      <button
        className={styles.button}
        onClick={() => {
          handleAddItem();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M15.0625 4.75H16.9375C17.1042 4.75 17.1875 4.83333 17.1875 5V27C17.1875 27.1667 17.1042 27.25 16.9375 27.25H15.0625C14.8958 27.25 14.8125 27.1667 14.8125 27V5C14.8125 4.83333 14.8958 4.75 15.0625 4.75Z"
            fill="#C0C0C0"
          />
          <path
            d="M5.5 14.8125H26.5C26.6667 14.8125 26.75 14.8958 26.75 15.0625V16.9375C26.75 17.1042 26.6667 17.1875 26.5 17.1875H5.5C5.33333 17.1875 5.25 17.1042 5.25 16.9375V15.0625C5.25 14.8958 5.33333 14.8125 5.5 14.8125Z"
            fill="#C0C0C0"
          />
        </svg>
      </button>
    </div>
  );
};

export default Footer;

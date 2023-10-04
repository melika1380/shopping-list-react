import React from 'react';
import Header from './component/Header';
import Main from './component/Main';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.body}>
      <Header />
      <Main />
    </div>
  );
};

export default App;
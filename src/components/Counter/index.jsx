import { useState } from "react";
import styles from './Counter.module.scss'

const Counter = () => {
  const [count, setSCount] = useState(0);
  const increment = () => {
    setSCount(count + 1);
  };
  const decrement = () => {
    setSCount(count + -1);
  };
  return (
    <div className={styles.center}>
      <h2 >Count: {count} </h2>
      <button onClick={increment}>add +1</button>
      <button onClick={decrement}>sub -1</button>
    </div>
  );
};

export default Counter;

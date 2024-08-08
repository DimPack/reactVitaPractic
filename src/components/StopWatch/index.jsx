import { useEffect, useState } from "react";
import { format, addSeconds } from "date-fns";
import styles from './StopWatch.module.scss'

const StopWatch = () => {
  const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, 0, 0));
  const [isRuning, setIsRuning] = useState(false);

  const handleIsRunning = () => {
    setIsRuning(!isRuning);
  };

  const handleReset = () => {
    setTime(new Date(0, 0, 0, 0, 0, 0, 0));
    setIsRuning(false);
  };
  
  useEffect(() => {
    
    return () => {
        
    };
  }, []);

  useEffect(() => {
    if (isRuning) {
      console.log("add setintrval");
      const idInterval = setTimeout(() => {
        setTime((time) => addSeconds(time, 1));
      }, 1000);
      return () => {
        clearTimeout(idInterval);
        console.log("clear intrval");
      };
    }
  }, [isRuning, time]);

  return (
    <div className={styles.center}>
      <h2 >{format(time, "HH : mm : ss")}</h2>
      <button onClick={handleIsRunning}>{isRuning ? "stop" : "start"}</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default StopWatch;

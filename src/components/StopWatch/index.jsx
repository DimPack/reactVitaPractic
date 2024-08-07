import { useEffect, useState } from "react";
import { format, addSeconds } from "date-fns";

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
    if (isRuning) {
      console.log("add setintrval");
      const idInterval = setInterval(() => {
        setTime((time) => addSeconds(time, 1));
      }, 1000);
      return () => {
        clearInterval(idInterval);
        console.log("clear intrval");
      };
    }
  }, [isRuning]);

  return (
    <div>
      <h2>{format(time, "HH : mm : ss")}</h2>
      <button onClick={handleIsRunning}>{isRuning ? "stop" : "start"}</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default StopWatch;

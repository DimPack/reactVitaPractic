import { useEffect, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRuning, setIsRuning] = useState(false);
  const handleIsRunning = () => {
    setIsRuning(!isRuning);
  };
  useEffect(() => {
    if (isRuning) {
        console.log("add setintrval");
        const idInterval = setInterval(() => {
          setTime((time) => time + 1);
        }, 1000);
        return () => {
          clearInterval(idInterval);
          console.log("clear intrval");
        };
    }
  }, [isRuning]);

  return (
    <div>
      <h2>StopWatch - {time}</h2>
      <button onClick={handleIsRunning}>{isRuning ? "stop" : "start"}</button>
    </div>
  );
};

export default StopWatch;

import { useState, useEffect } from "react";
import "./Clicker.css";

const Clicker = () => {
  const [clickCount, setClickCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleStep = ({target: { value }}) => {
    setStep(Number(value));
  };

  useEffect(() => {
    const handleClick = () => {
      // event.stopPropagation();
      setClickCount((clickCount) => clickCount + step);
    };
    console.log("add effect");
    document.body.addEventListener("click", handleClick);
    return () => {
      console.log("remove effect");
      document.body.removeEventListener("click", handleClick);
    };
  }, [step]);

  //   document.body.addEventListener('click',handleClick)
  console.log("render");
  return (
    <div>
      <h2>
        Clicker: {clickCount}
        <input type="text" value={step} onChange={handleStep} />
      </h2>
    </div>
  );
};

export default Clicker;
// onClick={handleClick}

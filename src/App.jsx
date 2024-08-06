import { useState } from "react";
import Clicker from "./components/Clicker";
// import Counter from "./components/Counter/";

function App() {
  const [visible, setVisible] = useState(true);
  const handleVisible = () => {
    setVisible(!visible);
  };
  return (
    <>
      <button onClick={handleVisible}>
        switch visible {visible ? "on" : "off"}
      </button>
      {visible && <Clicker />}
    </>
  );
}

export default App;

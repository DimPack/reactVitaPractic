import { BrowserRouter, Routes, Route } from "react-router-dom";
import StopWatch from "./components/StopWatch";
import Counter from "./components/Counter/index";
import Header from "./components/Header/index";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<StopWatch />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

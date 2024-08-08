import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext, ThemeContext } from "./context";

import HomePage from "./pages/HomePage";
import Counter from "./components/Counter/index";
import Header from "./components/Header/index";

function App() {
  const [user] = useState({
    id: 5,
    login: "max",
    avatar: "/images/defava.png",
  });
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <UserContext.Provider value={user}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/counter" element={<Counter />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}
//https://www.youtube.com/watch?v=2XAlYi0hBjw&list=PLxQIdU5bMkOiUg3p6X4BXVpIfWzMaLV7l&index=173
//PFM2024-1_REACT_useContext_useCallback_useMemo_080_1

export default App;

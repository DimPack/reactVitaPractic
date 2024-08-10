import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext, ThemeContext } from "./context";
import HomePage from "./pages/HomePage";
import BookPage from './pages/BookPage';
import EventPage from './pages/EventPage';
import Counter from "./components/Counter/index";
import Header from "./components/Header/index";
import Footer from './components/Footer/index';
import CONSTANTS from "./constants";



const { THEME } = CONSTANTS;

function App() {
  const [user] = useState({
    id: 5,
    login: "max",
    avatar: "/images/defava.png",
  });
  const [theme, setTheme] = useState(THEME.LIGHT);
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <UserContext.Provider value={user}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/books" element={<BookPage />} />
            <Route path="/events" element={<EventPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}
//https://www.youtube.com/watch?v=6TKOUmE8zac&list=PLxQIdU5bMkOiUg3p6X4BXVpIfWzMaLV7l&index=177
//PFM2024-1_REACT_customHooks_useReducer_081_2
export default App;

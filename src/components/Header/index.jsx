import { useContext } from "react";
import styles from "./Header.module.scss";
import { UserContext, ThemeContext } from "../../context";
import NavMenu from "../NavMenu";

const Header = () => {
  const { login, avatar } = useContext(UserContext);
  const [theme, setTheme] = useContext(ThemeContext);

  console.log(theme);
  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <header className={styles.header}>
      <NavMenu />
      <button onClick={handleTheme}>
        {theme === "light" ? "dark" : "light"}
      </button>
      <span className={styles.blockUser}>
        Hey, {login}
        <img className={styles.avatar} src={avatar} alt="avatar" />
      </span>
    </header>
  );
};

export default Header;

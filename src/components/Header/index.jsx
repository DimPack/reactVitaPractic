import { useContext, useState, useEffect, useCallback } from "react";
import cx from "classnames";

import { WbSunny, NightsStay, Menu } from "@mui/icons-material";
import styles from "./Header.module.scss";
import { UserContext, ThemeContext } from "../../context";
import NavMenu from "../NavMenu";
import CONSTANTS from "../../constants";

const { THEME } = CONSTANTS;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [text, setText] = useState("search");

  const { login, avatar } = useContext(UserContext);
  const [theme, setTheme] = useContext(ThemeContext);
  const isLightTheme = theme === THEME.LIGHT;

  const handleTheme = useCallback(() => {
    setTheme(isLightTheme ? THEME.DARK : THEME.LIGHT);
  }, [isLightTheme, setTheme]);

  const handleInput = useCallback(
    ({ target: { value } }) => {
      setText(value);
    },
    [setText]
  );

  useEffect(() => {
    console.log("create function handleInput");
  }, [handleInput]);

  const classNames = cx(styles.header, {
    [styles.light]: isLightTheme,
    [styles.dark]: !isLightTheme,
  });
  return (
    <header className={classNames}>
      <Menu
        className={styles.open}
        onClick={(event) => {
          event.stopPropagation();
          setIsMenuOpen(true);
        }}
      />
      <NavMenu stateMenu={[isMenuOpen, setIsMenuOpen]} />
      <button onClick={handleTheme}>
        {theme === THEME.LIGHT ? <NightsStay /> : <WbSunny />}
      </button>
      <span className={styles.blockUser}>
        Hey, {login}
        <img className={styles.avatar} src={avatar} alt="avatar" />
      </span>
      <input value={text} onChange={handleInput} />
    </header>
  );
};

export default Header;

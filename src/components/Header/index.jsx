import { useContext } from "react";
import cx from "classnames";

import {WbSunny, NightsStay} from '@mui/icons-material'
// import WbSunnyIcon from "@mui/icons-material/WbSunny";
// import NightsStayIcon from "@mui/icons-material/NightsStay";
import styles from "./Header.module.scss";
import { UserContext, ThemeContext } from "../../context";
import NavMenu from "../NavMenu";
import CONSTANTS from "../../constants";

const { THEME } = CONSTANTS;

const Header = () => {
  const { login, avatar } = useContext(UserContext);
  const [theme, setTheme] = useContext(ThemeContext);
  const isLightTheme = theme === THEME.LIGHT;

  const handleTheme = () => {
    setTheme(isLightTheme ? THEME.DARK : THEME.LIGHT);
  };

  const classNames = cx(styles.header, {
    [styles.light]: isLightTheme,
    [styles.dark]: !isLightTheme,
  });
  return (
    <header className={classNames}>
      <NavMenu />
      <button onClick={handleTheme}>
        {theme === THEME.LIGHT ? <NightsStay /> : <WbSunny />}
      </button>
      <span className={styles.blockUser}>
        Hey, {login}
        <img className={styles.avatar} src={avatar} alt="avatar" />
      </span>
    </header>
  );
};

export default Header;

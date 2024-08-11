import { useContext } from "react";
import cx from "classnames";
import styles from "./HomePage.module.scss";
import { ThemeContext } from "../context";
import Chat from '../components/Chat/index';
// import StopWatch from "../components/StopWatch/index";
import CONSTANTS from "../constants";


const { THEME } = CONSTANTS;

const HomePage = () => {
  const [theme] = useContext(ThemeContext);
  const isLightTheme = theme === THEME.LIGHT;
  const classNames = cx({
    [styles.light]: isLightTheme,
    [styles.dark]: !isLightTheme,
  });

  return (
    <section className={classNames}>
      {/* <StopWatch /> */}
      <Chat />
    </section>
  );
};

export default HomePage;

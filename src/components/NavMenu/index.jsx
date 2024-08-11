import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";
import cx from "classnames";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./NavMenu.module.scss";

const NavMenu = (props) => {
  const {
    stateMenu: [isMenuOpen, setIsMenuOpen],
  } = props;

  const classNames = cx(styles.nav, { [styles.openMenu]: isMenuOpen });
  const refNav = useRef(null);

  const handleClickWindow = ({ target }) => {
    if (target !== refNav.current) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickWindow);
    return () => {
      window.removeEventListener("click", handleClickWindow);
    };
  }, []);

  return (
    <nav className={classNames} ref={refNav}>
      <CloseIcon
        className={styles.close}
        onClick={() => setIsMenuOpen(false)}
      />
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/counter">Counter</NavLink>
        </li>
        <li>
          <NavLink to="/books">Books</NavLink>
        </li>
        <li>
          <NavLink to="/events">Events</NavLink>
        </li>
      </ul>
    </nav>
  );
};
NavMenu.propTypes = {
  stateMenu: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default NavMenu;

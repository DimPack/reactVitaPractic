import { NavLink } from "react-router-dom";
import cx from "classnames";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./NavMenu.module.scss";

const NavMenu = (props) => {
  const {
    stateMenu: [isMenuOpen, setIsMenuOpen],
  } = props;
  const classNames = cx(styles.nav, { [styles.openMenu]: isMenuOpen });
  return (
    <nav className={classNames}>
      <CloseIcon className={styles.close} onClick={()=>setIsMenuOpen(false)}/>
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

export default NavMenu;

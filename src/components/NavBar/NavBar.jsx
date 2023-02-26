import CartWidget from "../CartWidget/CartWidget";
import styles from "./NavBar.module.css";
import NavBarList from "./NavBarList";

const NavBar = () => {
  return (
    <div className={styles.containerNavbar}>
      <h1>AppName</h1>
      <NavBarList />
      <CartWidget />
    </div>
  );
};

export default NavBar;

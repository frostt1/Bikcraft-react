//router
import { NavLink } from "react-router-dom";
//brand
import { ReactComponent as Bikcraft } from "../../Assets/bikcraft.svg";
// css module
import styles from "../Header/Header.module.css";

const Header = () => {
    return (
        <header className={styles.header_bg}>
            <div className={styles.header}>
                {/* brand */}
                <NavLink to="/">
                    {" "}
                    <Bikcraft />{" "}
                </NavLink>

                <nav aria-label="menu principal">
                    <ul className={styles.header_menu}>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/bicicleta">Bicicletas</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contato">Contato</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

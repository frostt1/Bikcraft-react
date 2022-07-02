//router
import { NavLink } from 'react-router-dom'
//brand
import { ReactComponent as Bikcraft } from '../../Assets/bikcraft.svg'
// css module
import styles from '../Header/Header.module.css'


const Header = () => {
  return (
    <header className={styles.header_bg}>
        <div className={styles.header}>
            <nav aria-label='menu principal'>
                <ul>
                    <li>
                        <NavLink to="/">
                            <Bikcraft />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/bicicletas">
                            Bicicletas
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contato">
                            Contato
                        </NavLink>
                    </li>
                </ul>
            </nav> 
        </div>  



    </header>
  )
}

export default Header
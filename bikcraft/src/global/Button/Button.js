//css
import styles from "./Button.module.css"
// roter
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <Link className={styles.btn} to="/bicicletas">ESCOLHA A SUA</Link>
  )
}

export default Button
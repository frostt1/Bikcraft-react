// css
import styles from "./Main.module.css"
// router
import { Link } from "react-router-dom"
// img
import Foto from '../../Assets/img/fotos/introducao.jpg'


const Main = () => {
  return (
    <main className={styles.introducao_bg}>
        <div className={styles.introducao}>
          <div className={styles.introducao_conteudo}>
            <h1>Bicicletas feitas sob medida <span>.</span></h1>
            <p>Bicicletas elétricas de alta precisão e qualidade, feitas sob medida para você. Explore o mundo  na sua velocidade com a Bikcraft.</p>
            <Link to="/bicicletas">ESCOLHA A SUA</Link>
          </div>  
            <div >
            <img src={Foto} alt="Bicicleta elétrica preta" />
            </div>
        </div>
    </main>
  )
}

export default Main
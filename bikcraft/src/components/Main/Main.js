// css
import styles from "./Main.module.css";
// utilitarios
// router
import { Link } from "react-router-dom";
// img
import Foto from "../../Assets/img/fotos/introducao.jpg";
import Button from "../../global/Button/Button";

const Main = () => {
    return (
        <main className={styles.introducao_bg}>
            <div className={styles.introducao}>
                <div className={styles.introducao_conteudo}>
                    <h1 className="font-1-xxl color-0">
                        Bicicletas feitas sob medida<span className="color-p1">.</span>
                    </h1>
                    <p className="font-2-l color-5">
                        Bicicletas elétricas de alta precisão e qualidade, feitas sob medida para você. Explore o mundo na sua velocidade com a Bikcraft.
                    </p>
                    <Button />
                </div>
                <div>
                    <img src={Foto} alt="Bicicleta elétrica preta" />
                </div>
            </div>
        </main>
    );
};

export default Main;

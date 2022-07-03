// css
import styles from "./Bicicletas_List.module.css";

//custom hook
import { useFetch } from "../../hooks/useFecth";

// pages

// router
import { Link, Routes, Route } from "react-router-dom";

// imgs

const Bicicletas_List = () => {
    const { data: items } = useFetch();
    console.log(items);

    return (
        <article className={styles.lista_bicicletas}>
            <h2 className="font-1-xxl color-11 container">
                escolha a sua<span className="color-p2">.</span>
            </h2>
            <ul className={styles.lista_bicicletas_item}>
                {items &&
                    items.map((item) => (
                        <li key={item.id}>
                            <Link to={`/bicicletas/${item.id}`}>
                                <img src={item.img} alt="Bicicleta elétrica preta" />
                                <h3 className="font-1-xl">{item.name}</h3>
                                <span className="font-2-m color-8">R$ {item.price}</span>
                            </Link>
                        </li>
                    ))}
            </ul>
        </article>
    );
};

export default Bicicletas_List;

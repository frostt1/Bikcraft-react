import React from "react";

import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFecth";

const Bicicletas = () => {
    const { id } = useParams();

    const { data: items } = useFetch();

    return (
        <div>
            <h2>produto: {id}</h2>
        </div>
    );
};

export default Bicicletas;

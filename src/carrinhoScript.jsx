import plus from "./assets/mais.png"
import minus from "./assets/menos.png"
import trash from "./assets/lixo.png"
import { useState } from "react";

function AddCart({ nome, imagem, onRemove}) {
    const [count, setCount] = useState(1);

    const incrementCount = () => {
        if (count < 1) {
            setCount(1);
        } else {
            setCount(count + 1);
        }
    };

    const decrementCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };


    return (
            <div>
                <img src={imagem} alt={nome} />
                <p>{nome}</p>
                <button onClick={decrementCount}>
                    <img src={minus} alt="" />
                </button>
                <span>{count}</span>
                <button onClick={incrementCount}>
                    <img src={plus} alt="" />
                </button>
                <button onClick={() => onRemove(nome)}>
                    <img src={trash} alt="" />
                </button>
            </div>
    )
}

export default AddCart
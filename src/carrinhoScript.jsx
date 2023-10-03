import plus from "./assets/mais.png"
import minus from "./assets/menos.png"
import trash from "./assets/lixo.png"
import "./css/carrinho.css"
import { useState } from "react";

function AddCart({ nome, imagem, valor, onRemove }) {
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
        <div className="itemContainer">
            <img className="itemImg" src={imagem} alt={nome} />
            <p>{nome}</p>
            <div>
                <button className="iconCount" onClick={decrementCount}>
                    <img src={minus} alt="" />
                </button>
                <span className="numberCount">{count}</span>
                <button className="iconCount" onClick={incrementCount}>
                    <img src={plus} alt="" />
                </button>
            </div>
            <h3>{valor*count}</h3>
            <button className="iconCount" onClick={() => onRemove(nome)}>
                <img src={trash} alt="" />
            </button>
        </div>
    )
}

export default AddCart
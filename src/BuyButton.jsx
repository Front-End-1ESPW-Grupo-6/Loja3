import React from 'react';

function BuyButton({ nome, url, onClick }) {
    return(
        <button onClick={() => onClick(nome, url)} className="btn btn-outline-dark my-3">
         Adicionar ao Carrinho
        </button>
    );
}

export default BuyButton
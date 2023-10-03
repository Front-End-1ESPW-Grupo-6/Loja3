import React, { useState } from "react";
import AddCart from "./carrinhoScript";

function Carrinho() {
  const [carrinho, setCarrinho] = useState([]);

  const addNewItem = (nome, imagem) => {
    const newItem = {
      nome,
      imagem,
    };

    setCarrinho([...carrinho, newItem]);
  };

  const removeItemCarrinho = (nome) => {
    const novoCarrinho = carrinho.filter((item) => item.nome !== nome);
    setCarrinho(novoCarrinho);
  };

  return (
    <>
      <div className="carrinho-itens">
        {carrinho.map((item, index) => (
          <AddCart
            key={index}
            nome={item.nome}
            imagem={item.imagem}
            onRemove={removeItemCarrinho}
          />
        ))}
      </div>
    </>
  );
}

export default Carrinho;

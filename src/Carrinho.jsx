import "bootstrap/dist/css/bootstrap.min.css";
import "./css/carrinho.css"
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import AddCart from "./carrinhoScript";
import Galo from "./assets/galo-logo.png";

function Carrinho() {
  const [carrinho, setCarrinho] = useState([]);

  const addNewItem = (nome, imagem) => {
    const newItem = {
      nome: "Name Placeholder",
      imagem: Galo,
      valor: 59.99
    };

    setCarrinho([...carrinho, newItem]);
  };

  const removeItemCarrinho = (nome) => {
    const novoCarrinho = carrinho.filter((item) => item.nome !== nome);
    setCarrinho(novoCarrinho);
  };

  return (
    <>
      <div className="cartHeader">
        <h1>Carrinho</h1>
      </div>
      <div className="d-grid gap-2">
        <Button className="addBtn" variant="secondary" size="lg" onClick={addNewItem}>
          Adicionar item
        </Button>
      </div>
      <div className="carrinho-itens">
        {carrinho.map((item, index) => (
          <AddCart
            key={index}
            nome={item.nome}
            imagem={item.imagem}
            valor={item.valor}
            onRemove={removeItemCarrinho}
          />
        ))}
      </div>
    </>
  );
}

export default Carrinho;

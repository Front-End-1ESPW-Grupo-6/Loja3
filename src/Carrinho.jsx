import React, { useState } from 'react';
import AddCarrinho from './carrinhoScript';

function Carrinho() {
  const [carrinho, setCarrinho] = useState([]);

  const addItemCarrinho  = () => {
    
    const newItem = {
      nome: 'Nome do Item',
      imagem: 'URL da Imagem do Item',
    };

    setCarrinho([...carrinho, newItem]);
  };

  const removeItemCarrinho = (nome) => {
    const novoCarrinho = carrinho.filter((item) => item.nome !== nome);
    setCarrinho(novoCarrinho);
  };


  return (
    <>
      <div>
        <button onClick={addItemCarrinho}>Adicionar Carrinho</button>
      </div>

      <div className="carrinho-itens">
        {carrinho.map((item, index) => (
          <AddCarrinho key={index} nome={item.nome} imagem={item.imagem} onRemove={removeItemCarrinho}/>
        ))}
      </div>
    </>
  );
}

export default Carrinho;
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Produto1 from "./assets/product-1.jpg";
import Produto2 from "./assets/product-2.jpg";
import Produto3 from "./assets/product-3.jpg";
import Produto4 from "./assets/product-4.jpg";
import Produto5 from "./assets/product-5.jpg";
import Produto6 from "./assets/product-6.jpg";
import Produto7 from "./assets/product-7.jpg";
import Produto8 from "./assets/product-8.jpg";
import ProdutoDetail1 from "./assets/product-detail-1.jpg";
import ProdutoDetail2 from "./assets/product-detail-2.jpg";
import ProdutoDetail3 from "./assets/product-detail-3.jpg";
import ProdutoDetail4 from "./assets/product-detail-4.jpg";
import Carousel from "react-bootstrap/Carousel";
import img1Carousel from "./assets/carrosel1.png";
import img2Carousel from "./assets/carrosel2.png";
import BuyButton from "./BuyButton";
import "./css/casual.css";

function Casual() {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (nome, imagem) => {
    const newItem = {
      nome,
      imagem,
    };

    setCartItems([...cartItems, newItem]);
  };

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src={img1Carousel} alt="Image One" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={img2Carousel} alt="Image Two" />
        </Carousel.Item>
      </Carousel>

      <section className="mb-5 px-5 bg-grey">
        <h4 className="text-center">Destaque</h4>
        <div className="row d-flex">
          <div className="col-md-2 my-3">
            <div className="row">
              <div className="col-6">
                <img
                  src={ProdutoDetail1}
                  className="img-fluid my-2"
                  alt="Imagem do produto"
                />
              </div>
              <div className="col-6">
                <img
                  src={ProdutoDetail2}
                  className="img-fluid my-2"
                  alt="Imagem do produto"
                />
              </div>
              <div className="col-6">
                <img
                  src={ProdutoDetail3}
                  className="img-fluid my-2"
                  alt="Imagem do produto"
                />
              </div>
              <div className="col-6">
                <img
                  src={ProdutoDetail4}
                  className="img-fluid my-2"
                  alt="Imagem do produto"
                />
              </div>
            </div>
          </div>
          <div className="col-md-5 my-3 text-center">
            <img
              src={ProdutoDetail1}
              className="img-fluid my-2"
              alt="Imagem do produto"
            />
          </div>

          <div className="col-md-5 my-3 py-3">
            <div>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <h2 className="my-2">Red Digital Watch</h2>
            <h5 className="text-secondary">R$ 9999.99</h5>
            <p className="my-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              ratione, nostrum cupiditate repellendus distinctio obcaecati!
            </p>
            <BuyButton
              nome="Red digital"
              url={ProdutoDetail1}
              onClick={() => addItemToCart("Red digital", ProdutoDetail1)}
            />
          </div>
        </div>
      </section>
      <section className="my-5">
        <h4 className="text-center">Produtos</h4>
        <div className="row">
          <div className="col-md-6 col-lg-3 my-3 text-center">
            <img src={Produto1} alt="" className="img-fluid" />
            <a href="" className="btn btn-outline-dark my-3">
              Adicionar ao carrinho
            </a>
          </div>
          <div className="col-md-6 col-lg-3 my-3 text-center">
            <img src={Produto2} alt="" className="img-fluid" />
            <a href="" className="btn btn-outline-dark my-3">
              Adicionar ao carrinho
            </a>
          </div>
          <div className="col-md-6 col-lg-3 my-3 text-center">
            <img src={Produto3} alt="" className="img-fluid" />
            <a href="" className="btn btn-outline-dark my-3">
              Adicionar ao carrinho
            </a>
          </div>
          <div className="col-md-6 col-lg-3 my-3 text-center">
            <img src={Produto4} alt="" className="img-fluid" />
            <a href="" className="btn btn-outline-dark my-3">
              Adicionar ao carrinho
            </a>
          </div>
          <div className="col-md-6 col-lg-3 my-3 text-center">
            <img src={Produto5} alt="" className="img-fluid" />
            <a href="" className="btn btn-outline-dark my-3">
              Adicionar ao carrinho
            </a>
          </div>
          <div className="col-md-6 col-lg-3 my-3 text-center">
            <img src={Produto6} alt="" className="img-fluid" />
            <a href="" className="btn btn-outline-dark my-3">
              Adicionar ao carrinho
            </a>
          </div>
          <div className="col-md-6 col-lg-3 my-3 text-center">
            <img src={Produto7} alt="" className="img-fluid" />
            <a href="" className="btn btn-outline-dark my-3">
              Adicionar ao carrinho
            </a>
          </div>
          <div className="col-md-6 col-lg-3 my-3 text-center">
            <img src={Produto8} alt="" className="img-fluid" />
            <a href="" className="btn btn-outline-dark my-3">
              Adicionar ao carrinho
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
export default Casual;

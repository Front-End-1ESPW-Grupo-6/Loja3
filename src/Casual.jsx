import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Produto1 from "./assets/casual/casual-produto-1.jpg";
import Produto2 from "./assets/casual/casual-produto-2.jpg";
import Produto3 from "./assets/casual/casual-produto-3.jpeg";
import Produto4 from "./assets/casual/casual-produto-4.jpeg";
import Produto5 from "./assets/casual/casual-produto-5.jpeg";
import Produto6 from "./assets/casual/casual-produto-6.jpeg";
import Produto7 from "./assets/casual/casual-produto-7.jpeg";
import Produto8 from "./assets/casual/casual-produto-8.jpg";
import ProdutoDetail1 from "./assets/casual/casual-produto-9.jpeg";
import ProdutoDetail2 from "./assets/casual/casual-produto-10.jpeg";
import ProdutoDetail3 from "./assets/casual/casual-produto-11.jpeg";
import ProdutoDetail4 from "./assets/casual/casual-produto-12.jpeg";
import Carousel from "react-bootstrap/Carousel";
import img1Carousel from "./assets/casual/casuais-carrossel-1.jpg";
import img2Carousel from "./assets/casual/casuais-carrossel-2.png";
import "./css/casual.css";

function Casual() {

  return (
    <>
      <Carousel className="Carrossel_casual">
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
            <h2 className="my-2">Oculos Escuro Preto</h2>
            <h5 className="text-secondary">R$ 100.00</h5>
            <p className="my-3">
              Se você gosta de um óculos preto escuro, você vai adorar este óculos escuro preto. 
              Util para momentos em que é necessário um óculos escuro, mas ao mesmo tempo preto.
            </p>
            <button className="btn btn-outline-dark my-3">
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </section>
      <section className="my-5">
        <h4 className="text-center">Produtos</h4>
        <div className="row">
          <div className="col-md-6 col-lg-3 my-3 text-center productImg">
            <img src={Produto1} alt="" className="img-fluid" />
            <a href="" className="btn btn-outline-dark my-3">
              Adicionar ao carrinho
            </a>
          </div>
          <div className="col-md-6 col-lg-3 my-3 text-center productImg">
            <img src={Produto2} alt="" className="img-fluid" />
            <a href="" className="btn btn-outline-dark my-3">
              Adicionar ao carrinho
            </a>
          </div>
          <div className="col-md-6 col-lg-3 my-3 text-center productImg">
            <img src={Produto3} alt="" className="img-fluid" />
            <a href="" className="btn btn-outline-dark my-3">
              Adicionar ao carrinho
            </a>
          </div>
          <div className="col-md-6 col-lg-3 my-3 text-center productImg">
            <img src={Produto4} alt="" className="img-fluid" />
            <a href="" className="btn btn-outline-dark my-3">
              Adicionar ao carrinho
            </a>
          </div>
          <div className="col-md-6 col-lg-3 my-3 text-center productImg">
            <img src={Produto5} alt="" className="img-fluid" />
            <a href="" className="btn btn-outline-dark my-3">
              Adicionar ao carrinho
            </a>
          </div>
          <div className="col-md-6 col-lg-3 my-3 text-center productImg">
            <img src={Produto6} alt="" className="img-fluid" />
            <a href="" className="btn btn-outline-dark my-3">
              Adicionar ao carrinho
            </a>
          </div>
          <div className="col-md-6 col-lg-3 my-3 text-center productImg">
            <img src={Produto7} alt="" className="img-fluid" />
            <a href="" className="btn btn-outline-dark my-3">
              Adicionar ao carrinho
            </a>
          </div>
          <div className="col-md-6 col-lg-3 my-3 text-center productImg">
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

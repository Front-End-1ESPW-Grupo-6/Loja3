import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';
import img1Carousel from './assets/mas_carrou_1.jpg';
import img2Carousel from './assets/mas_carrou_2.jpg';
import img3Carousel from './assets/mas_carrou_3.jpg';
import Produto1 from './assets//mas_1.png';
import Produto2 from './assets/mas_2.png';
import Produto3 from './assets/mas_3.png';
import Produto4 from './assets/mas_4.png';
import Produto5 from './assets/mas_5.png';
import Produto6 from './assets/mas_6.png';
import Produto7 from './assets/mas_7.png';
import Produto8 from './assets/mas_8.png';
import ProdutoDetail1 from './assets/mas_3.png';
import ProdutoDetail2 from './assets/mas_3_2.png';
import ProdutoDetail3 from './assets/mas_3_1.png';
import ProdutoDetail4 from './assets/mas_3_3.jpg';
import "./css/masculino.css";

function Masculino() {
  return (
    <>
      <Carousel className="Carrossel_mas">
        <Carousel.Item>
          <img
            src={img1Carousel}
            alt="Image One"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={img2Carousel}
            alt="Image TWo"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={img3Carousel}
            alt="Image Three"
          />
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
            <h2 className="my-2">Camiseta GALO</h2>
            <h5 className="text-secondary">R$ 119.99</h5>
            <p className="my-3">
            Esta camiseta preta é uma escolha clássica e versátil para qualquer guarda-roupa. Feita com tecido macio e confortável, ela proporciona um ajuste perfeito e é ideal para uso diário. Com seu design minimalista, esta camiseta é perfeita para combinar com uma variedade de estilos e ocasiões. A cor preta é atemporal e complementa facilmente qualquer look. Seja para um visual casual ou como uma base para um conjunto mais elaborado, esta camiseta preta é uma peça essencial que nunca sai de moda.
            </p>
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
export default Masculino;

import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';
import img1Carousel from './assets/feminino/fem_carrou_1.jpg';
import img2Carousel from './assets/feminino/fem_carrou_2.jpg';
import img3Carousel from './assets/feminino/fem_carrou_3.jpg';
import Produto1 from './assets/feminino/fem_1.png';
import Produto2 from './assets/feminino/fem_2.png';
import Produto3 from './assets/feminino/fem_3.png';
import Produto4 from './assets/feminino/fem_4.png';
import Produto5 from './assets/feminino/fem_5.png';
import Produto6 from './assets/feminino/fem_6.png';
import Produto7 from './assets/feminino/fem_7.png';
import Produto8 from './assets/feminino/fem_8.png';
import ProdutoDetail1 from './assets/feminino/fem_9.png';
import ProdutoDetail2 from './assets/feminino/fem_10.png';
import ProdutoDetail3 from './assets/feminino/fem_11.png';
import ProdutoDetail4 from './assets/feminino/fem_12.png';
import "./css/feminino.css";

function Feminino() {
  return (
    <>
      <Carousel>
        <Carousel.Item className="Carrossel_fem">
          <img
            src={img1Carousel}
            alt="Image One"
          />
        </Carousel.Item>
        <Carousel.Item className="Carrossel_fem">
          <img
            src={img2Carousel}
            alt="Image TWo"
          />
        </Carousel.Item>
        <Carousel.Item className="Carrossel_fem">
          <img
            src={img3Carousel}
            alt="Image Three"
          />
        </Carousel.Item>
      </Carousel>
      
      
      <section className="mb-5 px-5 bg-grey section1">
        <h1 className="text-center">Destaque</h1>
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
            <h2 className="my-2">Calça Jeans Grafite</h2>
            <h5 className="text-secondary">R$ 350.00</h5>
            <p className="my-3">
              Se você gosta de uma calça grafite jeans, você vai adorar esta calça jeans grafite. 
              Util para momentos em que é necessário uma calça jeans, mas ao mesmo tempo grafite.
            </p>
            <button className="btn btn-outline-dark my-3">
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </section>
      <section className="my-5 section1">
        <h1 className="text-center">Produtos</h1>
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

export default Feminino;
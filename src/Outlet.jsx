import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';
import img1Carousel from './assets/outlet/out_carrou_1.png';
import img2Carousel from './assets/outlet/out_carrou_2.png';
import img3Carousel from './assets/outlet/out_carrou_3.png';
import Produto1 from './assets/outlet/out_1.png';
import Produto2 from './assets/outlet/out_2.png';
import Produto3 from './assets/outlet/out_3.png';
import Produto4 from './assets/outlet/out_4.png';
import Produto5 from './assets/outlet/out_5.png';
import Produto6 from './assets/outlet/out_6.png';
import Produto7 from './assets/outlet/out_7.png';
import Produto8 from './assets/outlet/out_8.png';
import ProdutoDetail1 from './assets/outlet/out_9.png';
import ProdutoDetail2 from './assets/outlet/out_10.png';
import ProdutoDetail3 from './assets/outlet/out_11.png';
import ProdutoDetail4 from './assets/outlet/out_12.png';
import "./css/outlet.css";

function Outlet() {
  return (
    <>
      <Carousel className="Carrossel_outlet">
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
            <h2 className="my-2">Shorts rosa infantil</h2>
            <h5 className="text-secondary">R$ 70.00</h5>
            <p className="my-3">
              Se você gosta de uma calça infantil rosa, você vai adorar esta calça rosa infantil. 
              Util para momentos em que é necessário uma calça rosa, mas ao mesmo tempo infantil.
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
export default Outlet;

import {} from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './css/nav.module.css';

function Nav() {
  return (
    /*div principal */
    <div className="container my-4 ">
      {/* nav  */}
      <nav className="navbar navbar-expand-lg mb-4">
        {/* container do menu nav */}
        <div className="container-fluid">
          {/* logo */}
          <a className="navbar-brand" href="#">
            <NavLink to="/" className={styles.hlink} >MyShop</NavLink>
            {/* links dos elementos e chamando estilzação css modules*/}
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <NavLink to="casual" className="nav-link">
                  <h6 className={styles.tlink}>Casual</h6>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="masculino" className="nav-link">
                  <h6 className={styles.tlink}>Masculino</h6>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="feminino" className="nav-link">
                  <h6 className={styles.tlink}>Feminino</h6>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="outlet" className="nav-link">
                  <h6 className={styles.tlink}>Outlet</h6>
                </NavLink>
              </li>
            </ul>
          </a>
          {/* botão  para criar a menu hamburguer */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        {/* menu nav do carrinho e login */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="carrinho" className="nav-link-carrinho">
                <h6 className={styles.tlink1}>Carrinho</h6>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="login" className="nav-link-login">
                <h6 className={styles.tlink1}>Login</h6>
              </NavLink>
            </li>
          </ul>
        </div>
        {/* final do nav */}
      </nav>
      {/* final da div principal */}
    </div>
  );
}
export default Nav;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/logo.png';
import perfil from '../assets/perfil.png';
import Btn from './Btn';

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img src={logo} alt="Logo" />
        <p>Inicio</p>
        <Router>
          <div className={styles.menuDrop}>
            <button className={styles.dropBtn}>Dropdown</button>
            <div className={styles.dropdownContent}>
              <ul>
                <Link to="/Todos">
                  <li>Todos</li>
                </Link>
                <Link to="/Favoritos">
                  <li>Favoritos</li>
                </Link>
                <Link to="/Vistos">
                  <li>Já vistos</li>
                </Link>
                <Link to="/Adicionados">
                  <li>Adicionados</li>
                </Link>
              </ul>
            </div>
          </div>
        </Router>
      </div>
      <div>
        <Btn />
        <input className={styles.inputPesquisar} type="text" />
        <img className={styles.perfil} src={perfil} alt="Perfil" />
      </div>
    </header>
  );
};

export default Header;

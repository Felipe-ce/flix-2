import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/logo.png';
import perfil from '../assets/perfil.png';
import Btn from './Btn';
import ShrekImg from '../assets/shrek.png';
import hojeQueroVoltar from '../assets/hojeQueroVoltar.png';
import homemAranha from '../assets/homemAranha.png';
import sonhoLiberdade from '../assets/sonhoLiberdade.png';
import horaElaVolta from '../assets/horaElaVolta.png';

// const Header = () => {

//   return (
//     <header className={styles.header}>
//       <div>
//         <img src={logo} alt="Logo" />
//         <p>Inicio</p>
//         <Router>
//           <div className={styles.menuDrop}>
//             <button className={styles.dropBtn}>Dropdown</button>
//             <div className={styles.dropdownContent}>
//               <ul>
//                 <Link to="/Todos">
//                   <li>Todos</li>
//                 </Link>
//                 <Link to="/Favoritos">
//                   <li>Favoritos</li>
//                 </Link>
//                 <Link to="/Vistos">
//                   <li>Já vistos</li>
//                 </Link>
//                 <Link to="/Adicionados">
//                   <li>Adicionados</li>
//                 </Link>
//               </ul>
//             </div>
//           </div>
//         </Router>
//       </div>
//       <div>
//         <Btn />
//         <input className={styles.inputPesquisar} type="text" />
//         <img className={styles.perfil} src={perfil} alt="Perfil" />
//       </div>
//     </header>
//   );
// };

// export default Header;

export default class Todos extends React.Component {

  // State para a barra de pesquisa
  state = {
    Filmes: [
      {
        id: 0,
        titulo: 'Shrek',
        descricao:
          'Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.',
        img: ShrekImg,
      },
      {
        id: 1,
        titulo: 'Hoje Eu Quero Voltar…',
        descricao:
          'Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga.',
        img: hojeQueroVoltar,
      },
      {
        id: 2,
        titulo: 'Spider-man',
        descricao:
          'Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.',
        img: homemAranha,
      },
      {
        id: 3,
        titulo: 'Um Sonho de Liberdade',
        descricao:
          'Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão.',
        img: sonhoLiberdade,
      },
      {
        id: 4,
        titulo: 'Que Horas Ela Volta?',
        descricao:
          'Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel.',
        img: horaElaVolta,
      },
    ],
    listaFilmes: [],
  };

  // Função para procurar filme
  Search = (event) => {
    const { Filmes } = this.state;
    // console.log(Filmes)

    const listaFilmes = Filmes.filter((filme) => {
      if (
        filme.titulo.toLowerCase().includes(event.target.value.toLowerCase())
      ) {
        return true;
      }
    });
    // console.log(event.target.value);
    this.setState({
      listaFilmes: listaFilmes,
    });
    console.log(listaFilmes);
  };

  render() {
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
                  <Link to="../components/Todos">
                    <li>Todos</li>
                  </Link>
                  <Link to="../components/Favoritos">
                    <li>Favoritos</li>
                  </Link>
                  <Link to="../components/Vistos">
                    <li>Já vistos</li>
                  </Link>
                  <Link to="../components/Adicionados">
                    <li>Adicionados</li>
                  </Link>
                </ul>
              </div>
            </div>
          </Router>
        </div>
        <div>
          <Btn />
          <input
            className={styles.inputPesquisar}
            type="text"
            placeholder="Pesquisar"
            onChange={this.Search}
          />

          {/* Resultado da pesuisa */}
          <div className={styles.resultadoPesquisa}>
            <div className={styles.contentPesquisa}>
              <div className={styles.contentPesquisaa}>
                {this.state.listaFilmes.map((item) => (
                  <div className={styles.itemFilme}>
                    <img src={item.img} alt={item.title} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <img className={styles.perfil} src={perfil} alt="Perfil" />
        </div>
      </header>
    );
  }
}

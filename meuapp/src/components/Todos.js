import React from 'react';
import Carousel from 'nuka-carousel';
import styles from './Todo.module.css';
import ShrekImg from '../assets/shrek.png';
import hojeQueroVoltar from '../assets/hojeQueroVoltar.png';
import homemAranha from '../assets/homemAranha.png';
import sonhoLiberdade from '../assets/sonhoLiberdade.png';
import horaElaVolta from '../assets/horaElaVolta.png';

export default class Todos extends React.Component {
  // State da pagina todo, que esta sendo redenrizado na tela inicial com o titulo destaque
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

  render() {
    return (
      <div className="container">
        <h2>Destaques</h2>
        <div className={styles.containerFilme}>
          <Carousel
            // Configurações carrosel
            slidesToShow={4}
            autoplay={true}
            wrapAround={true}
            renderBottomCenterControls={false}
            adaptiveHeight={true}
            cellSpacing={30}
          >
            {this.state.Filmes.map((item) => (
              <div className={styles.filme}>
                <img src={item.img} alt={item.titulo} />
                <h3>{item.titulo}</h3>
                <p>{item.descricao}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    );
  }
}

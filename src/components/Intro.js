import React from 'react';
import styles from './Intro.module.css';
import capitaoFantastico from '../assets/capitaoFantastico.png';

const Intro = () => {
  return (
    <section className={styles.intro}>
      <div>
        <img src={capitaoFantastico} alt="Capitao Fantastico" />
      </div>
      <div>
        <p>Visto recentemente</p>
        <h2>Capitão Fantástico</h2>
        <p>
          Nas florestas do estado de Washington, um pai cria seus seis filhos
          longe da civilização, em uma rígida rotina de aventuras. Ele é forçado
          a deixar o isolamento e leva sua família para encarar o mundo,
          desafiando sua ideia do que significa ser pai.
        </p>
      </div>
    </section>
  );
};

export default Intro;

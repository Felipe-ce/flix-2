import Header from './components/Header';
// Usei o padrao CSS Modular para estilização dos componentes.
import './App.css';
import Intro from './components/Intro';
import Todos from './components/Todos';

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Todos />
    </>
  );
}

export default App;

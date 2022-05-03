import Header from './components/Header';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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

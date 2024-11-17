import './App.css';
import React from 'react';
import Cabecalho from './Componentes/Cabecalho';
import Lancamentos from './Componentes/Lancamentos';
import Rodape from './Componentes/Rodape';
import SuperPromo from './Componentes/SuperPromo';
import Sobre from './Componentes/Sobre';
import Acesso from './Componentes/AcessosPrincipais';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="Inicio">
      <Cabecalho />

      <SuperPromo />

      <Sobre />

      <Lancamentos />

      <Acesso/>

       <Rodape />

        </div>
      </header>
    </div>
  );
}

export default App;

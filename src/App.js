import { useState } from 'react';
import './App.css';
import { BotonClear } from './componentes/componente-boton-clear/BotonClear';
import { Boton } from './componentes/componente-boton/Boton';
import { Pantalla } from './componentes/componente-pantalla/Pantalla';

import {evaluate} from 'mathjs';
import logo from '../src/imagenes/logo.PNG';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = valor => {
    setInput(input + valor);
  }

  const clear = () => {
    setInput('');
  }


  const calcularResulado = () => {
    input ? setInput(evaluate(input)) : alert('Por favor ingrese un valor');
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img src={logo} className='freecodecamp-logo' alt='' />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input}></Pantalla>
        <div className="fila">
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={calcularResulado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
         <BotonClear manejarClear={clear}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;

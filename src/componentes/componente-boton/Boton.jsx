import React from 'react'
import './Boton.css';




export const Boton = ({children, manejarClick}) => {
  const esOperador = valor =>{
      return isNaN(valor) && (valor != '.') && (valor != '=');
  }
  
  return (
  <div className={`boton-contenedor ${esOperador(children) ? 'operador' : null}`} 
      onClick={() => manejarClick(children)}>
      {children}
  </div>
  )
}

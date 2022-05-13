import React from 'react'
import './BotonClear.css';
export const BotonClear = ({children, manejarClear}) => {
  return (
    <div className='boton-clear' onClick={() => manejarClear()}>
        {children}
    </div>
  )
}

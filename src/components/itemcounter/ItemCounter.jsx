import React, { useState } from 'react'
import "./ItemCounter.css"


function ItemCounter({funcionAgregar}) {
    const [contador, setcontador] = useState(0)
    function aumentar() {
        setcontador(contador +1)
    }
    function disminuir() {
        if (contador !== 0) {
            setcontador(contador-1)
        }
        
    }
  return (
    <div className='container'>
        <div className="row border border-2 border-dark">
            <div className="col-3 p-0 text-center">
                <button className='agregar_art w-100' onClick={aumentar}><i className="bi bi-plus-lg"></i></button>
                
            </div>

            <div className="col-6 text-center">
                <span> {contador}</span>

            </div>
            <div className="col-3 p-0 text-center">
                <button className='eliminar_art w-100' onClick={disminuir}><i className="bi bi-dash-lg"></i></button>
                
            </div>
        </div>
        <div className="container-fluid mt-2 p-0 ">
            <button className='w-100 btn-agregar' onClick={()=>funcionAgregar(contador)} >Agregar al carrito</button>
        </div>

    </div>
  )
}

export default ItemCounter
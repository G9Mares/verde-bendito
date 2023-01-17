import React from 'react'
import "./CartItem.css"

function CartItem({item,ver_producto,borrar_producto}) {
  return (
    <div className="row border fila-producto ">
                    <div className="col-3"  onClick={()=>ver_producto(item.id)} >
                        <img src={item.img} className="w-50 mt-3 img-carrito" alt="" />
                    </div>
                    <div className="col-7"  >
                        <h2>{item.nombre}</h2>
                        <p>{item.descripcion}</p>
                    </div>
                    <div className="col-2 text-center">
                        <p className='mt-3'>
                            {item.cantidad}
                        </p>
                        <button className='btn-eliminar-art mb-2' onClick={()=>borrar_producto(item.id)}><i className="bi bi-trash3"></i></button>
                    </div>
                </div>
  )
}

export default CartItem
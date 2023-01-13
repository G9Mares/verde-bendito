import React from 'react'
import { Link } from 'react-router-dom'
import "./Item.css"

function Item({element}) {
  return (
    <div className="col-4 p-0">
      <div className="carta text-center">
        <img src={element.img} className="card-img-top imagen" alt="" />
        <div className="" >
            <h5 className="card-title">{element.nombre}</h5>
            <h6 className="card-title">${element.precio}</h6>
            <Link className="btn btn-primary" to={`/itemDetail/${element.id}`}>Ver detalles</Link>
        </div>
      </div>
    </div>
  )
}

export default Item
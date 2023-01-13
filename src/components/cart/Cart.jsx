import React , {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import "./Cart.css"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
function Cart() {
    const navigate = useNavigate()
    const {cart,CleanCart,datosCart} = useContext(CartContext)
    
    const cantidad_productos = datosCart().suma
    const total = datosCart().totales
    console.log()
    function ver_producto(id) {
       navigate("/itemDetail/"+id)
    }


    if (cart.length<1) {
        return (
            <div class=" text-center justify-content-center mt-5">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div className="container mt-2">
                    <h3>Parece que aun no haz agregado nada al carrito</h3>
                    <button className='btn-comprar mt-2'><Link to="/" className='link-comprar'>lleva algo para el camino</Link> </button>
                </div>
            </div>
        )
    }


  return (
    <div className="container mt-4">

        {
            cart.map(item=>(
                <div className="row border fila-producto " key={item.id} onClick={()=>ver_producto(item.id)} >
                    <div className="col-3">
                        <img src={item.img} className="w-50 mt-3" alt="" />
                    </div>
                    <div className="col-7">
                        <h2>{item.nombre}</h2>
                        <p>{item.descripcion}</p>
                    </div>
                    <div className="col-2 text-center">
                        <p className='mt-3'>
                            {item.cantidad}
                        </p>
                        <button className='btn-eliminar-art mb-2'><i class="bi bi-trash3"></i></button>
                    </div>
                </div>
            ))
        }
        <div className="container text-center">
            <button className='mt-3' onClick={CleanCart}>Vaciar Carrito</button>

                <button type="button" className="ms-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Comprar carrito
                </button>


                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Descripcion del pedido</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <table className="table">
                            
                        <tbody>
                            <tr>
                                <th scope="row ">Cantidad de productos:</th>
                                <td>{cantidad_productos}</td>
                            </tr>
                            <tr>
                                <th scope="row">Subtotal:</th>
                                <td><strong>$</strong> {(total / 1.16).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <th scope="row">Impuestos:</th>
                                <td> <strong>$</strong> {(total*0.16).toFixed(2)} </td>
                            </tr>
                            <tr>
                                <th scope="row">Total:</th>
                                <td><strong>$</strong> {total} </td>
                            </tr>              
                        </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-success">Pagar</button>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    </div>
  )
}

export default Cart
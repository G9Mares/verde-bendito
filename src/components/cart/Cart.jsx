import React , {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import "./Cart.css"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import CartItem from '../cartItem/CartItem'
import Form from '../form/Form'

function Cart() {
    const navigate = useNavigate()
    const {cart,CleanCart,datosCart,borrarProducto,setcart} = useContext(CartContext)


    const cantidad_productos = datosCart().suma
    const total = datosCart().totales
    
    
    function ver_producto(id) {
       navigate("/itemDetail/"+id)
    }


    if (cart.length<1) {
        return (
            <div className=" text-center justify-content-center mt-5">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
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
                <CartItem key={item.id} item ={item} ver_producto={ver_producto} borrar_producto={borrarProducto} />
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
                    <div className="modal-foote w-100 ">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item text-end me-3 pb-3">
                            <h2 className="accordion-header" id="flush-headingOne">

                            <button type="button" className="btn btn-secondary me-2" data-bs-dismiss="modal" id='closeModal'>Cerrar</button>

                            <button className="btn btn-success " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Pagar
                            </button>
                            
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body"><Form cart={cart} total={total} CleanCart ={CleanCart} setcart ={setcart} ></Form> </div>
                            </div>
                        </div>
                        </div>

                    </div>
                    </div>
                </div>
                </div>
        </div>
    </div>
  )
}

export default Cart
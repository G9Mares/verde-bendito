import React, { useEffect, useState , useContext } from 'react'

import {  useParams , useNavigate} from 'react-router-dom'
import "./ItemDetailContainer.css"
import ItemCounter from '../itemcounter/ItemCounter'
import { CartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'
import { database } from '../../firebaseConfig'
import { getDoc , doc, collection } from 'firebase/firestore'
import { Link } from 'react-router-dom'

function ItemDetailContainer() {


    const navigate= useNavigate()

    const {AddCart} = useContext(CartContext)
    const {id} = useParams()

    const [product,setProduct] = useState({})
    
    useEffect(()=>{

        const itemCollection = collection(database,"Productos")
        const ref = doc(itemCollection,id)
        getDoc(ref)
        .then(res=>{
          setProduct({
            id : res.id,
            ...res.data()
          })


        })
        
    },[id])

    function AgregarCarrito(cantidad) {
      if (cantidad === 0) {
          Swal.fire(
            'Necesitas agregar al menos 1',
            'Agrega la cantidad que deseas',
            'error'
          )
      }else{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Producto agregado con exito',
          showConfirmButton: false,
          timer: 1500
        })
        AddCart({...product,cantidad:cantidad})
          setTimeout(()=>{
            navigate('/')
          },1000)

      }

    }

    

    if (product.nombre) {
      return (
        <div className="col-8 m-auto">
            <img src={product.img} className="imagen mx-auto d-block" alt="" />
            <div className="card-body">
                <h5 className="card-title">{product.nombre}</h5>
                <h6 className="card-title">${product.precio}</h6>
                <p className="card-text">{product.descripcion}</p>
                <div className="ms-auto me-auto w-75">
                  <ItemCounter funcionAgregar = {AgregarCarrito} />
                </div>
    
            </div>
        </div>
      )
      
    }else{
      return(
        <div className="container text-center">
          <h2>Producto no encontrado</h2>
          <p>verifica el id o regresa al menu principal</p>
          <Link to={"/"}>Volver al incio</Link>
        </div>
      )
    }

  
}

export default ItemDetailContainer
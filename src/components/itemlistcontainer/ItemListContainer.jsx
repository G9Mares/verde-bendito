import {useState,useEffect} from 'react'
import { products } from '../../ProductsMock'
import Itemlist from '../itemlist/Itemlist'
import { useParams } from 'react-router-dom'

function ItemListContainer() {
  const {category} = useParams()
  const [items, setitems] = useState([])
  
  useEffect(()=>{
    const productosFiltrados = products.filter(productos => productos.category === category)
    const task = new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve( category ? productosFiltrados : products)
      },)
    })
    task
      .then((res)=>{
        setitems(res)
      })
      .catch((err)=>{
        console.log("Rechazado")
      })
    console.log("Se hizo la peticion")
  },[category])
  return (
    <div className="main">
      <Itemlist items={items}/>
    </div>
  )
}
export default ItemListContainer
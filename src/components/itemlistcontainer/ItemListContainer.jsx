import {useState,useEffect} from 'react'
//import { products } from '../../ProductsMock'
import Itemlist from '../itemlist/Itemlist'
import { useParams } from 'react-router-dom'
import {getDocs,collection, query, where} from "firebase/firestore"
import { database } from '../../firebaseConfig'

function ItemListContainer() {
  const {category} = useParams()
  const [items, setitems] = useState([])
  
  useEffect(()=>{

    const itemCollection = collection(database,"Productos")

    if (category) {

      const q = query(itemCollection,where("category","==",category))
      getDocs(q)
      .then((res)=>{
        const products = res.docs.map(producto =>{
          return {
            id : producto.id,
            ...producto.data()
          }
        })
        setitems(products)
      })
      .catch((err)=>{console.log("Rechazado")})
      
      
    }else{

      getDocs(itemCollection)
      .then((res)=>{
        const products = res.docs.map(producto =>{
          return {
            id : producto.id,
            ...producto.data()
          }
        })
        setitems(products)
      })
      .catch((err)=>{console.log("Rechazado")})
    }
    
    
  },[category])
  return (
     <div className="main">
       <Itemlist items={items}/>
     </div>
  )
}
export default ItemListContainer
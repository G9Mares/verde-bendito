import React, { createContext } from "react"
import { useState } from "react"
import Swal from "sweetalert2"

export const CartContext = createContext()


function CartContextProvider({children}) {
    const [cart,setcart] = useState([])

    function AddCart(articulo) {

        if (cart.some(elemento => elemento.id === articulo.id)) {

            let newArray = cart.map((producto)=>{
                if (producto.id === articulo.id) {  
                    let newProduct = {
                        ...producto,
                        cantidad : producto.cantidad + articulo.cantidad
                    
                    }
                    
                    return newProduct
                }else{
                    return producto
                }
                
            })
            setcart(newArray)
        }
        else{
            setcart([...cart,articulo])
        }

        
    }
    function CleanCart() {
        Swal.fire({
            title: 'Quieres eliminar el carrito?',
            showDenyButton: true,
            confirmButtonText: 'Cancelar',
            denyButtonText: `Borrar carrito`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isDenied) {
              Swal.fire('Productos eliminados', 'vuelve pronto', 'success')
              setcart([])
            }
          })
        
        
    }

    function borrarProducto(id) {
      Swal.fire({
        title: 'Quieres eliminar este producto?',
        showDenyButton: true,
        confirmButtonText: 'Cancelar',
        denyButtonText: `Borrar producto`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isDenied) {
          Swal.fire('Producto eliminado', "",'success')
          const newArray = cart.filter(producto => producto.id !== id)
      setcart(newArray)
        }
      })     
      
    }

    const datosCart = () => {
        let suma = 0;
        let totales =0
        let tre =0
        cart.forEach(objeto => {
            
          suma += objeto.cantidad
          tre = objeto.cantidad * objeto.precio
          totales = tre + totales
        });
        return {suma,totales};
      };

    const data = {cart,AddCart,CleanCart,datosCart,borrarProducto,setcart}
  return (
    <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider

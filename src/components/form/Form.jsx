import { useState } from "react"
import PhoneInput from 'react-phone-number-input/input'
import { database } from "../../firebaseConfig"
import { collection , addDoc,serverTimestamp} from "firebase/firestore"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

function Form(cart){
    const [aviso,setaviso] = useState("Confirma tu correo electronico")
    const [conf_correo,setconf_correo] = useState("")
    const [correo,setcorreo] = useState("")
    const [nombre,setnombre] = useState("")
    const [telefono,settelefono] = useState("")
    
    const navigate = useNavigate()

    function acion_compra(id_compra) {
        navigate("/")
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Orden Creada con exito',
            text: "Este esta es tu clave de segumiento: " + id_compra,
            showConfirmButton: true,
          })
        cart.setcart([])

    }

    function handleSubmit(e) {
        e.preventDefault()
        if (correo === conf_correo ) {
            const nuevo_usu = {
                nombre: nombre,
                correo: correo,
                telefono: telefono
            }
            const nueva_orden = {
                buyer: nuevo_usu,
                items: cart.cart,
                total:cart.total,
                date: serverTimestamp()
            }

            const orderCollection = collection(database,"Ordenes")
            addDoc(orderCollection,nueva_orden)
            .then(res=>acion_compra(res.id))
            document.getElementById('closeModal').click()
        }else{
            setaviso("Los correos no coinciden")
        }

        
            
    }

    
  return (
    <form className='text-center w-100' onSubmit={handleSubmit} >
        <div className="mb-3 text-start">
            <label htmlFor="nombre_user" className="form-label">Nombre completo</label>
            <input type="text" required className="form-control" id="nombre_user" aria-describedby="emailHelp" value={nombre} onChange={(e)=>setnombre(e.target.value)} />
            <div className="form-text">Escribe tu nombre</div>
        </div>
        <div className="mb-3 text-start">
            <label htmlFor="correo_user" className="form-label">Correo electronico</label>
            <input type="email" required className="form-control" id="correo_user" aria-describedby="emailHelp" value={correo} onChange={(e)=>setcorreo(e.target.value)} />
            <div className="form-text ">Escribe tu correo electronico </div>
        </div>
        <div className="mb-3 text-start">
            <label htmlFor="conf_correo" className="form-label">Confirma tu correo</label>
            <input type="email" required className="form-control" id="conf_correo" aria-describedby="emailHelp" value={conf_correo} onChange={(e)=>setconf_correo(e.target.value)} />
            <div className="form-text ">{aviso} </div>
        </div>
        <div className="mb-3 text-start">
            <label htmlFor="numero_tel" className="form-label">Numero de telefono</label>
            <PhoneInput className="form-control" required id="numero_tel" defaultCountry="MX" value={telefono} onChange={settelefono} />
            <div className="form-text">Escribe tu telefono</div>
        </div>
  <button type="submit"  className="btn btn-primary">Finalizar compra</button>
</form>
  )
}

export default Form
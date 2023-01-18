# Verde Bendito

Esta aplicacion es de una e-commerce de comida rapida mexicana, fabricado con React

## Iniciar el proyecto

Para usar el proyecto clona el repositorio y ejecuta el comando npm start

## Caracteristicas generales del proyecto

### Se enlistaran las librerias y aplicaciones externas usadas en este proyecto:    
-[Firebase]( https://firebase.google.com/):  
    Se utilizo para hacer el almacenamiento de productos y de ordenes  
  
-[Bootstrap v5]( https://getbootstrap.com/docs/5.0/getting-started/introduction/):  
    Se utilizo para hacer el layout, diseños y componenetes  

-[Sweet Alert](https://sweetalert2.github.io/):  
    Se utilixo para crear alertas agradables a la experiencia del usuario  
  
-[Material UI ](https://mui.com/ ):  
    Se utilizo para el diseño de algunos componentes del proyecto  
  
-[React-phone-number-input](https://gitlab.com/catamphetamine/react-phone-number-input):  
    Se utilizo para capturar con formato el numero de telefono en el formulario  
  
Es un e-comerce que te permite navegar entre diferentes articuos seccionados por categoria, crear un carro de compra,   editar el carro de compra y cerrar la compra con un formulario para crear la orden.  

## Funcionamineto general y enfoque del proyecto

Decidi utilizar bootstrap atraves de el CDN para el diseño de la web, la parte que mas me costo fue el formulario para la compra ya que este se encuentra en un modal, mismo que causaba problemas al momento de terminar el proceso, se soluciono con:
```javascript

document.getElementById('closeModal').click() 
```
Se dicidio usar en modal ya que le daba un mejor uso del espacio en la pantalla, el principal reto fue que no pude crear un componente "modal" externo y el codigo tanto para el Form como para el cart quedo muy extenso 

Tambien para hacer una mejor experiencia al usuario cada que agregaba un producto se le enviaba de vuelta a la pagina principal para que siguiera comprando con la herramienta de react-router-dom 

```javascript

    const navigate = useNavigate()
    navigate("/")
```
Esta funcion es reciente ya que, la mayoria de los tutoriales o documentacion mencionaban otros metodos que ya no se encuentran en dicha libreria

## Variables de entorno


```javascript

    const firebaseConfig = {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN ,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket:process.env.REACT_APP_STORAGE_BUCKET ,
        messagingSenderId:process.env.REACT_APP_MESSAGIN ,
        appId:process.env.REACT_APP_ID
};
```

Dicha variables deben ser configuradas en un .env que se encuentre en la carpeta raiz, los valores seran arrojados cuando configures el proyecto en la consola de firebase

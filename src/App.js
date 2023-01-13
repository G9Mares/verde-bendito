import ItemListContainer from "./components/itemlistcontainer/ItemListContainer";
import NavBar from "./components/navbar/NavBar";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContextProvider from "./context/CartContext";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <CartContextProvider >
        <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer/>} />
            <Route path="/Categoria/:category" element={<ItemListContainer/>} />
            <Route path="/Cart" element={<Cart/>} />
            <Route path="*" element={<h1>Error 404</h1>} />
            <Route/>
          </Routes>
      </CartContextProvider>
      </BrowserRouter>
     
    </div>
  );
}

export default App;

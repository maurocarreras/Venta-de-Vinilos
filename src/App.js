import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
//importamos los componenetes creados
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Navbar from "./layout/Navbar";
import Cart  from "./components/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              index
              element={
                <ItemListContainer greeting="Bienvenidos a venta de vinilos" />
              }
            />
            <Route
              path="/category/:categoryName"
              element={<ItemListContainer greeting="DISCOS EN OFERTA" />}
            />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
//importamos los componenetes creados
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import Navbar from "./layout/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            index
            element={
              <ItemListContainer greeting="Bienvenido a venta de vinilos" />
            }
          />
          <Route
            path="/category/:categoryName"
            element={
              <ItemListContainer greeting="Bienvenido a venta de vinilos" />
            }
          />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

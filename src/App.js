import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
//importamos los componenetes creados

import Internacionales from "./components/Internacionales";
import Nacionales from "./components/Nacionales";
import Destacados from "./components/Destacados";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Navbar />}> */}
          <Route
            index
            element={
              <ItemListContainer greeting="Bienvenido a venta de vinilos" />
            }
          />
          <Route path="internacionales" element={<Internacionales />} />
          <Route path="nacionales" element={<Nacionales />} />
          <Route path="destacados" element={<Destacados />} />
          <Route path="*" element={<Navigate replace to="/" />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

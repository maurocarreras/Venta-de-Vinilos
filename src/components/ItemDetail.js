import React, { useContext, useState } from "react";
import { IconButton, Button, Alert } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { CartContext } from "../context/CartContext";

export const ItemDetail = ({ item }) => {
  const [counter, setCounter] = useState(0);
  const [mostrarAlerta, setmostrarAlerta] = useState(false);

  const handleClickRestar = () => {
    if(counter === 0) {
      setCounter(counter);
    } else {
      setCounter(counter - 1);
    }
  };

  const handleClickSumar = () => {
    setCounter(counter + 1);
  };

  const { cartData, setCartData } = useContext(CartContext);

  const addCart = () => {
    setCartData([
      ...cartData,
      {
        title: item.title,
        price: item.price,
        img: item.img,
        cantidad: counter,
      },
    ]);
    setmostrarAlerta(true);
  };

  //condicion ? ejecuta si se cumple : si no se cumple
  mostrarAlerta === false ? console.log("falso") : console.log("verdadero");

  return (
    <>
      {mostrarAlerta === true ? (
        <Alert
          onClose={() => {
            setmostrarAlerta(!mostrarAlerta);
          }}
        >
          Disco: {item.title} agregado al Carrito
        </Alert>
      ) : (
        <></>
      )}
      <div className="cardsdetail">
        <h5 className="titledetail">{item.title}</h5>

        <img className="imgdetail" src={item.img} alt="disco" />

        <h5 className="titledetail">${item.price}</h5>

        <IconButton
          className="botondetail"
          onClick={handleClickRestar}
          aria-label="delete"
          size="small"
        >
          <RemoveCircleOutlineIcon fontSize="small" />
        </IconButton>
        <p>{counter}</p>
        <IconButton
          className="botondetail2"
          onClick={handleClickSumar}
          aria-label="delete"
          size="small"
        >
          <AddCircleOutlineIcon fontSize="small" />
        </IconButton>
        <Button
          className="agregar"
          onClick={addCart}
          variant="contained"
          disabled={counter === 0 ? true : false}
        >
          Agregar al Carrito
        </Button>
      </div>
    </>
  );
};

export default ItemDetail;

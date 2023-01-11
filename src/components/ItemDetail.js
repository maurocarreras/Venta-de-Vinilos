import React, { useState } from "react";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

export const ItemDetail = ({ item }) => {
  const [counter, setCounter] = useState(0);

 const handleClickRestar = () => {
    setCounter(counter - 1)
 }

 const handleClickSumar = () => {
    setCounter(counter + 1)
 }

  return (
    <>
      <img src={item.img} alt="disco" />
      <h5>{item.title}</h5>
      <h5>{item.price}</h5>
      <IconButton onClick={handleClickRestar} aria-label="delete" size="small">
        <RemoveCircleOutlineIcon fontSize="small" />
      </IconButton>
      <p>{counter}</p>
      <IconButton onClick={handleClickSumar} aria-label="delete" size="small">
        <AddCircleOutlineIcon fontSize="small" />
      </IconButton>
    </>
  );
};

export default ItemDetail;

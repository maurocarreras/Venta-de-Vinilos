import React, { useContext, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CartContext } from "../context/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, IconButton, Tooltip } from "@mui/material";
import { DialogComponent } from "./DialogComponent";

const Cart = () => {
  const { cartData } = useContext(CartContext);
  const [openDialog, setopenDialog] = useState(false);

  const handleClickOpen = () => {
    setopenDialog(true);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Disco</TableCell>
              <TableCell>Título</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Cantidad</TableCell>
              <TableCell>Accciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartData.map((row) => (
              <TableRow
                key={row.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img
                    className="imgcart"
                    src={row.img}
                    alt="imagen de disco"
                  />
                </TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>${row.price}</TableCell>
                <TableCell>{row.cantidad}</TableCell>
                <TableCell>
                  <Tooltip title="Eliminar">
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        onClick={handleClickOpen}
        className="botonfinalizar"
        variant="contained"
        disabled={cartData.length === 0 ? true : false}
      >
        Finalizar Compra
      </Button>
      <DialogComponent openDialog={openDialog} setopenDialog={setopenDialog} />
    </>
  );
};

export default Cart;

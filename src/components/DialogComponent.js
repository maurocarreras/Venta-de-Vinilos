import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export const DialogComponent = ({ openDialog, setopenDialog }) => {
  const [succesConfirm, setSuccesConfirm] = useState(false);
  const { setCartData } = useContext(CartContext);

  const handleClick = () => {
    setopenDialog(false);
    setSuccesConfirm(false);
  };

  const handleClickConfirm = () => {
    setSuccesConfirm(true);
    setCartData([]);
  };

  return (
    <Dialog
      open={openDialog}
      onClose={handleClick}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {succesConfirm ? (
        <>
        <div className="iconSucces" >
          <CheckCircleIcon sx={{ fontSize: 100 }} color="success" />
        </div>
          <DialogTitle id="alert-dialog-title">
            {"Muchas Gracias por tu compra."}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Correo enviado exitosamente con el detalle de tu compra.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClick}>Cerrar</Button>
          </DialogActions>
        </>
      ) : (
        <>
          <DialogTitle id="alert-dialog-title">
            {"¿Desea confirmar pedido?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Una vez confirmada la compra te enviaremos un mail con los
              detalles de tu pedido.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Correo Electrónico"
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClick}>Cancelar</Button>
            <Button onClick={handleClickConfirm} autoFocus>
              Confirmar
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};

import Badge from '@mui/material/Badge';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';


const Cartwidget = () => {
  const { cartData } = useContext(CartContext);
  
  return (
    <Badge badgeContent={cartData.length} color="secondary">
      <ShoppingCartIcon className="iconCart" />
    </Badge>
  );
};

export default Cartwidget;


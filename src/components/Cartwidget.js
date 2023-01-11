import Badge from '@mui/material/Badge';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Cartwidget = () => {
  return (
    <Badge badgeContent={1} color="secondary">
      <ShoppingCartIcon />
    </Badge>
  );
};

export default Cartwidget;

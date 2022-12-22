import Badge from '@mui/material/Badge';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Cartwidget = () => {
  return (
    <Badge badgeContent={4} color="secondary">
      <ShoppingCartIcon />
    </Badge>
  );
};

export default Cartwidget;

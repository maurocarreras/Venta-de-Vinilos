import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { NavLink } from "react-router-dom";

const Item = ({ item }) => {

  return (
    <div className="cards">
    <Card sx={{ maxWidth: 250 }} >
      <CardMedia
        component="img"
        alt="tapa de disco"
        height="190"
        image={item.img}
      />
      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${item.price}
        </Typography>
        <Chip label={`Stock: ${item.stock}`} color="primary" />
      </CardContent>
      <CardActions>
      <NavLink to={`/detail/${item.id}`} className="link">
          <Button size="small">Ver más</Button>
        </NavLink>
      </CardActions>
    </Card>
    </div>
  );
};

export default Item;

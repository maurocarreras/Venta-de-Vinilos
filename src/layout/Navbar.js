import * as React from "react";
import "./navbar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import Cartwidget from "../components/Cartwidget";

import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@mui/material";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Link to={"/"} className="link">
              <Button>
                <Typography
                  className="tipografia"
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  Ventas
                </Typography>
              </Button>
            </Link>
            <Link to={"/nacionales"} className="link">
              <Button>
                <Typography
                  className="tipografia"
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  Nacionales
                </Typography>
              </Button>
            </Link>
            <Link to={"/internacionales"} className="link">
              <Button>
                <Typography
                  className="tipografia"
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  Internacionales
                </Typography>
              </Button>
            </Link>
            <Link to={"/destacados"} className="link">
              <Button>
                <Typography
                  className="tipografia"
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  Destacados
                </Typography>
              </Button>
            </Link>
          </ButtonGroup>
          <div className="containerCart">
            <Cartwidget />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

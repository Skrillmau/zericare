import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import classes from "./Navbar.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import * as actionCreators from '../Store/Actions/';

function Navbar(props) {
  const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  if (props.isUserLoggedIn) {
    let LogedinMenu = (<MenuItem onClick={handleClose}>
      <Link to="/perfil" className={classes.linked2}>
        Perfil
      </Link>
      <Link to="/" className={classes.linked2}>
        Cerrar Sesión
      </Link>
    </MenuItem> )
  }
  else{
    (<MenuItem onClick={handleClose}> 
    <Link to="/login" className={classes.linked2}>
    Login
  </Link>
  </MenuItem>)
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Button color="inherit">
            <Link to="/" className={classes.linked}>
              <Typography style={{ fontFamily: "Futura", fontWeight: "Bold" }} variant="h6" className={classes.title}>
                Zericare
              </Typography>
            </Link>
          </Button>

          <Button color="inherit">
            <Link to="/nosotros" className={classes.linked}>
              Sobre Nosotros
            </Link>
          </Button>

          <Button color="inherit">
            <Link to="/Tienda" className={classes.linked}>
              Tienda
            </Link>
          </Button>

          <Button color="inherit">
            <Link to="/PerfilM" className={classes.linked}>
              Perfil medico
            </Link>
          </Button>

          <Button color="inherit">
            <Link to="/FormularioMedicamentos" className={classes.linked}>
              Listado puto
            </Link>
          </Button>

          <Button
            color="inherit"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className={classes.boton}
          >
            <AccountCircleIcon></AccountCircleIcon>
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {LogedinMenu}

          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    isUserLoggedIn: state.authStore.isUserLoggedIn
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onUserLogin: (authData, onSuccessCallback) => dispatch(actionCreators.logIn(authData, onSuccessCallback)),
    onClearError: () => dispatch(actionCreators.clearError())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

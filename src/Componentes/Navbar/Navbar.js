import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import classes from "./Navbar.module.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import * as actionCreators from "../../Store/Actions/";
import { connect } from "react-redux";

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
  const handleLogOut = () => {
    props.onlogOut();
    handleClose();
  };
  let profileText;
  let LogedinMenu;
  if (props.isUserLoggedIn) {
    profileText=props.tipo;
    LogedinMenu = (
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to={`/info/${props.uid}`} className={classes.linked2}>
            Perfil
          </Link>
        </MenuItem>
        <MenuItem onClick={handleLogOut}>
          <Link to="/" className={classes.linked2}>
            Cerrar Sesión
          </Link>
        </MenuItem>
      </Menu>
    );
  } else {
    profileText="Login";
    LogedinMenu = (
      
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogOut}>
          <Link to="/login" className={classes.linked2}>
            Login
          </Link>
        </MenuItem>
      </Menu>
    );
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Button color="inherit">
            <Link to="/" className={classes.linked}>
              <Typography
                style={{ fontFamily: "Futura", fontWeight: "Bold" }}
                variant="h6"
                className={classes.title}
              >
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

          <Button
            color="inherit"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className={classes.boton}
          >
            <AccountCircleIcon />
           {profileText} 
          </Button>
          {LogedinMenu}
        </Toolbar>
      </AppBar>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    isUserLoggedIn: state.authStore.isUserLoggedIn,
    uid: state.authStore.user.uid,
    tipo: state.authStore.user.tipo,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onClearError: () => dispatch(actionCreators.clearError()),
    onlogOut: () => dispatch(actionCreators.logOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

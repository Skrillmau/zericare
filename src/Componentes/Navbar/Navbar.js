import React, { PureComponent } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import classes from "./Navbar.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

function Navbar() {

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
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
        <Button color="inherit">
          <Link to='/home' className={classes.linked}><Typography variant="h6" className={classes.title}>
          Zericare
          </Typography></Link>
          </Button>

          <Button color="inherit">
          <Link to='/nosotros' className={classes.linked}>Sobre Nosotros</Link>
          </Button>
          
          
          <Button color="inherit"aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick} className={classes.boton}>
            <AccountCircleIcon></AccountCircleIcon>
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
            <Link to='/login' className={classes.linked2}>Login</Link>
                </MenuItem>
            <MenuItem onClick={handleClose}><Link to='/info' className={classes.linked2}>Perfil</Link></MenuItem>
            
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;

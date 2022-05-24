import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "../../styles/components/NavBar.scss";
import "../../styles/components/logo.scss";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { useNavigate } from "react-router-dom";
import { authContext } from '../../context/AuthContext';
import LogoutIcon from '@mui/icons-material/Logout';
import { fabClasses } from "@mui/material";

export const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const navigate = useNavigate()

  const context = useContext(authContext)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
    navigate('/registrarse')
  };

  
  const handleClick = () =>{
    navigate('/login')
  }

  const handleLogOut = () =>{
    localStorage.removeItem("token")
    context.setAuth({
      logged:false,
      name:"",
      id:""
    })
  }


  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);
 

  return (
    
    <Box sx={{ flexGrow: 1, mb: "4rem" }}>
      <AppBar className="navbar" position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            color="primary"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            
            <span className="logo"> Job search App</span>
          </Typography>
          <div>
          {!context.auth.logged&&<Button color="primary" onClick={handleClick}>Inicio sesión</Button>}
          {context.auth.logged&&<h5>{context.auth.name}</h5>}
          </div>
          <div>
          {!context.auth.logged&&
            <Button
              ref={anchorRef}
              variant="outlined"
              id="composition-button"
              aria-controls={open ? "composition-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            > Registrarse
            </Button>}
            {context.auth.logged&&<Button color="primary" fontSize="medium"  onClick={handleLogOut}><LogoutIcon color="primary" fontSize="medium">cerrar sesion</LogoutIcon></Button>}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import WorkIcon from '@mui/icons-material/Work';
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
import { authContext } from "../../context/AuthContext";
import LogoutIcon from "@mui/icons-material/Logout";
import { fabClasses } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import Link from "@mui/material/Link";

export const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const navigate = useNavigate();

  const context = useContext(authContext);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
    navigate('/registrarse')
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const handleClick = () => {
    navigate("/members/auth/login");
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    context.setAuth({
      logged: false,
      name: "",
      id: "",
    });
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <Box sx={{ flexGrow: 1, mb: "0rem" }}>
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
        
          <div>{context.auth.logged &&(
            <Link className="link-menu" href="/empleos" underline="none">
              <MenuItem onClick={handleClose}>
                <WorkIcon /> Empleos
              </MenuItem>
            </Link>)}
          </div>
          <div>
            {!context.auth.logged && (
              <Button color="primary" onClick={handleClick}>
                Inicio sesión
              </Button>
            )}
            {context.auth.logged && <h5>{context.auth.name}</h5>}
          </div>
          <div>
            {!context.auth.logged && (
              <Button
                ref={anchorRef}
                variant="outlined"
                id="composition-button"
                aria-controls={open ? "composition-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
              >
                Registrarse
              </Button>
            )}

            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom-start" ? "left top" : "left bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                      >
                        <Link
                          className="link-menu"
                          href="/companies/new"
                          underline="none"
                        >
                          <MenuItem onClick={handleClose}>
                            <ApartmentIcon /> Empleadores
                          </MenuItem>
                        </Link>
                        <Link
                          className="link-menu"
                          href="/webpros/login"
                          underline="none"
                        >
                          <MenuItem onClick={handleClose}>
                            <PersonIcon /> Postulantes
                          </MenuItem>
                        </Link>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
            {context.auth.logged && (
              <Button color="primary" fontSize="medium" onClick={handleLogOut}>
                <LogoutIcon color="primary" fontSize="medium">
                  cerrar sesion
                </LogoutIcon>
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

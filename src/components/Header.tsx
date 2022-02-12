import React, { MouseEventHandler } from "react";
import logo from "./../assets/logo.svg";
import {
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  IconButton,
  Menu,
  ListItemIcon,
  Button,
  useMediaQuery,
  useTheme,
  Container,
} from "@mui/material";
function Header(): JSX.Element {
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);

  const handleMenu = (e: any) => {
    setAnchor(e.currentTarget);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar>
      <Container>
        <Toolbar>
          <img src={logo} alt="School system logo" width="50px" />
          {!isMobile ? (
            <Button variant="contained">Home</Button>
          ) : (
            <>
              <Button onClick={handleMenu}>
                menu
                {/* <MenuIcon /> */}
              </Button>
              <Menu
                id="menu-appbar"
                /* to open the anchor at the top below the cursor */
                anchorEl={anchor}
                /* anchor origin so that it open it that location */
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
              >
                <MenuItem onClick={() => setAnchor(null)}>
                  <ListItemIcon>{/* <HomeIcon /> */}Home</ListItemIcon>
                  <Typography variant="h6"> Home</Typography>
                </MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;

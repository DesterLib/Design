import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import { CSSObject, Theme, styled, useTheme } from "@mui/material/styles";
import { debounce } from "lodash";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";

export const LogoImage = styled("img")(() => ({
  position: "absolute",
  top: "0",
  left: "0",
  bottom: "0",
  right: "0",
  boxsizing: "border-box",
  padding: "0",
  border: "none",
  margin: "auto",
  display: "block",
  width: "0",
  height: "0",
  minWidth: "100%",
  maxWidth: "100%",
  minHeight: "100%",
  maxHeight: "100%",
  objectFit: "contain",
}));

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  width: "100%",
  marginTop: "0px",
  left: "0",
  right: "0",
  marginLeft: "auto",
  marginRight: "auto",
  color: theme.palette.primary.main,
}));

export const LeftMenuToggle = styled(IconButton)(() => ({
  padding: "10px",
  fontSize: "24px",
  height: "45px",
  width: "45px",
  marginLeft: "0px",
  marginRight: "10px",
}));

export const LogoWrapper = styled(Box)(() => ({
  margin: "0px",
  fontSize: "0px",
  position: "relative",
  width: "200px",
  height: "60px",
  minWidth: "160px",
  minHeight: "60px",
}));

export const AvatarButtonWrapper = styled(Box)(() => ({
  padding: "0px",
}));

const NavBar = ({ config, colorModeContext, themeMode }: any) => {
  return (
    <Box>
      <StyledAppBar elevation={0} position="static">
        <Toolbar variant="dense">
          <LeftMenuToggle
            // onClick={toggleDrawer(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <i className="ri-menu-line"></i>
          </LeftMenuToggle>
          <LogoWrapper>
            <Link to="/">
              <LogoImage
                width="160"
                height="60"
                src={
                  themeMode === "dark" ? (config.logo_light || '') : (config.logo_dark || '')
                }
                alt={config.name || 'dester'}
              />
            </Link>
          </LogoWrapper>
          {/* <Box sx={{ width: "100%", margin: "0px 20px" }}>
            <SearchWrapper
              onFocus={handleOpenSearch}
              onBlur={handleCloseSearch}
            >
              <SearchIconWrapper>
                <i className="ri-search-2-line"></i>
              </SearchIconWrapper>
              <SearchInputBase
                fullWidth
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                value={searchQuery}
                onChange={handleChangeSearch}
              />
              {isSearchOpen ? (
                <SearchResults onMouseDown={(e) => e.preventDefault()}>
                  <SearchCardContainer
                    data={searchResult}
                    handleCloseSearch={handleCloseSearch}
                  />
                </SearchResults>
              ) : null}
            </SearchWrapper>
          </Box> */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "right",
            }}
          >
            {/* <DButton variant='contained' color='primary'>
                    Login
                </DButton> */}
            <AvatarButtonWrapper>
              <Avatar alt="Dester" />
            </AvatarButtonWrapper>
            {/* <Menu
              disableScrollLock={true}
              sx={menuStyles}
              id="menu-appbar"
              anchorEl={userMenu}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(userMenu)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem sx={{ color: "#ffffff" }}>
                <Avatar
                  sx={{
                    marginRight: "10px",
                    width: 60,
                    height: 60,
                  }}
                  alt="Dester"
                />
                <Box>
                  <Typography>Dester</Typography>
                  <Typography>desterlib@gmail.com</Typography>
                </Box>
              </MenuItem>
              <Divider />
              <Link to="/account" style={{ textDecoration: "none" }}>
                <MenuItem sx={menuItemStyles}>
                  <Avatar sx={{ marginRight: "10px" }}>
                    <i className="ri-user-fill"></i>
                  </Avatar>
                  <Typography textAlign="center">Account</Typography>
                </MenuItem>
              </Link>
              <MenuItem onClick={colorMode.toggleColorMode} sx={menuItemStyles}>
                {themeMode === "dark" && (
                  <>
                    <Avatar sx={{ marginRight: "10px" }}>
                      <i className="ri-sun-fill"></i>
                    </Avatar>
                    <Typography textAlign="center">Light Theme</Typography>
                  </>
                )}
                {themeMode === "light" && (
                  <>
                    <Avatar sx={{ marginRight: "10px" }}>
                      <i className="ri-moon-clear-fill"></i>
                    </Avatar>
                    <Typography textAlign="center">Dark Theme</Typography>
                  </>
                )}
              </MenuItem>
              <Link to="/settings" style={{ textDecoration: "none" }}>
                <MenuItem sx={menuItemStyles}>
                  <Avatar sx={{ marginRight: "10px" }}>
                    <i className="icon ri-settings-2-fill"></i>
                  </Avatar>
                  <Typography textAlign="center">Settings</Typography>
                </MenuItem>
              </Link>
              {(APP_IS_ELECTRON || APP_IS_SEPERATE) && (
                <MenuItem onClick={handleEditServerUrl} sx={menuItemStyles}>
                  <Avatar sx={{ marginRight: "10px" }}>
                    <i className="icon ri-server-fill"></i>
                  </Avatar>
                  <Typography textAlign="center">Server URL</Typography>
                </MenuItem>
              )}
              <Link to="/logout" style={{ textDecoration: "none" }}>
                <MenuItem sx={{ ...menuItemStyles, ...menuLastItemStyles }}>
                  <Avatar sx={{ marginRight: "10px" }}>
                    <i className="icon ri-logout-box-fill"></i>
                  </Avatar>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Link>
            </Menu> */}
          </Box>
        </Toolbar>
      </StyledAppBar>
      <Drawer anchor="left">
        <List sx={{ width: "250px" }}>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <span className="material-symbols-rounded">history</span>
              </ListItemIcon>
              <ListItemText primary="History" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <span className="material-symbols-rounded">category</span>{" "}
              </ListItemIcon>
              <ListItemText primary="Categories" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default NavBar;

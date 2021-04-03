import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import { Hidden, Toolbar, Button } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import logo from "../../assets/image/logo.png";
import Navigation from "./Navigation/Navigation";
import AccountMenu from "./AccountMenu/AccountMenu";
import Sidebar from "./Sidebar/Sidebar";

function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Toolbar className={classes.header}>
      <Button className={classes.logoBtn} component={Link} to="/">
        <img src={logo} rel="logo" width="80" height="80" />
      </Button>
      <Hidden smDown>
        <Navigation />
        <AccountMenu />
      </Hidden>
      <Hidden mdUp>
        <Sidebar />
      </Hidden>
    </Toolbar>
  );
}

export default Header;

{
  /* <Hidden smDown>
        <Navigation
          navItems={navItems}
          selectedIdx={selectedIdx}
          setSelectedIdx={setSelectedIdx}
        />
        <AccountMenu />
      </Hidden> */
}

import React, { useState } from "react";
import { Button, Drawer, Box } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import useStyles from "./styles";
import Navigation from "../Navigation/Navigation";
import AccountMenu from "../AccountMenu/AccountMenu";

function Sidebar(props) {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <Box className={classes.container}>
      <React.Fragment>
        <Button onClick={() => setOpenDrawer(true)}>
          <MenuIcon fontSize="large" />
        </Button>
        <Drawer
          anchor="left"
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
          classes={{ paper: classes.drawer }}
        >
          <Navigation />
          <AccountMenu />
        </Drawer>
      </React.Fragment>
    </Box>
  );
}

export default Sidebar;

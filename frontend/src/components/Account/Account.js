import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Box, Button } from "@material-ui/core";
import useStyles from "./styles";
import AccountNavbar from "./AccountNavbar/AccountNavbar";
import AccountDetail from "./AccountDetail/AccountDetail";
import AccountPets from "./AccountPets/AccountPets";
import HotelOrders from "./HotelOrders/HotelOrders";
import GroomOrders from "./GroomOrders/GroomOrders";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import DropdownMenu from "./DropdownMenu/DropdownMenu";

function Account(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const { path, url } = useRouteMatch();

  return (
    <Box className={classes.container}>
      {matches ? <DropdownMenu /> : null}
      {!matches ? <AccountNavbar /> : null}
      <Box className={classes.contentContainer}>
        <Switch>
          <Route path={`${path}`} exact component={AccountDetail} />
          <Route path={`${path}/pets`} exact component={AccountPets} />
          <Route path={`${path}/hotel-orders`} exact component={HotelOrders} />
          <Route path={`${path}/groom-orders`} exact component={GroomOrders} />
        </Switch>
      </Box>
    </Box>
  );
}

export default Account;

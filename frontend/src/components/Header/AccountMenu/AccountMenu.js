import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@material-ui/core";

import useStyles from "./styles";

function AccountMenu(props) {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Button
        component={Link}
        to="/account"
        style={{ fontSize: "18px", fontWeight: "bold" }}
      >
        Account
      </Button>
    </Box>
  );
}

export default AccountMenu;

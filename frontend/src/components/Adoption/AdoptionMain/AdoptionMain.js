import React from "react";
import { Box } from "@material-ui/core";
import useStyles from "./styles";
import Adoptables from "./Adoptables/Adoptables";

function AdoptionMain(props) {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.contentContainer}>
        <Adoptables />
      </Box>
    </Box>
  );
}

export default AdoptionMain;

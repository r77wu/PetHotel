import React from "react";
import { Box } from "@material-ui/core";
import useStyles from "./styles";
import GroomingReservation from "../GroomingReservation/GroomingReservation";
import ServicesIntro from "../ServicesIntro/ServicesIntro";

function GroomingMain(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.container}>
        <Box className={classes.reservationContainer}>
          <GroomingReservation />
        </Box>
      </Box>
      <Box>
        <ServicesIntro />
      </Box>
    </React.Fragment>
  );
}

export default GroomingMain;

import React from "react";
import { Box } from "@material-ui/core";

import useStyles from "./styles";
import PetHotelReservation from "../PetHotelReservation/PetHotelReservation";
import AccommodationsIntro from "../AccommodationsIntro/AccommodationsIntro";

function PetHotelMain(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.container}>
        <Box className={classes.reservationContainer}>
          <PetHotelReservation />
        </Box>
      </Box>
      <Box>
        <AccommodationsIntro />
      </Box>
    </React.Fragment>
  );
}

export default PetHotelMain;

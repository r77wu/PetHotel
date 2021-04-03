import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  Box,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  Button,
} from "@material-ui/core";

import useStyles from "./styles";

import { fetchPets } from "../../../store/actions/profile";
import { handleSelectRoomPet } from "../../../store/actions/reservation";
import { createHotelOrder } from "../../../store/actions/profile";
import PetRegisterForm from "./PetRegisterForm/PetRegisterForm";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function days_between(date1, date2) {
  // The number of milliseconds in one day
  const ONE_DAY = 1000 * 60 * 60 * 24;

  // Calculate the difference in milliseconds
  const differenceMs = Math.abs(date1 - date2);

  // Convert back to days and return
  return Math.round(differenceMs / ONE_DAY);
}

const HotelReservation = (props) => {
  const {
    onFetchPets,
    pets,
    checkInDate,
    checkOutDate,
    room,
    onSelectPet,
    onCreateOrder,
  } = props;

  useEffect(() => {
    onFetchPets();
  }, []);
  const classes = useStyles();
  const [pet, setPet] = useState("");
  const [openPetForm, setOpenPetForm] = useState(false);
  const handleChange = (event) => {
    setPet(event.target.value);
    onSelectPet(event.target.value);
  };
  const handkeCreateOrder = () => {
    onCreateOrder();
  };

  const checkIn = new Date(checkInDate);
  const checkOut = new Date(checkOutDate);

  const checkInMessage = `${days[checkIn.getDay()]}, ${
    months[checkIn.getMonth()]
  } ${checkIn.getDate()}, ${checkIn.getFullYear()}`;
  const checkOutMessage = `${days[checkOut.getDay()]}, ${
    months[checkOut.getMonth()]
  } ${checkOut.getDate()}, ${checkOut.getFullYear()}`;

  const nights = days_between(checkOut, checkIn);
  let price;
  room < 6 ? (price = nights * 30.99) : (price = nights * 50.99);

  return (
    <Box className={classes.container}>
      <Box className={classes.tableContainer}>
        <Grid
          container
          direction="column"
          alignItems="center"
          spacing={10}
          className={classes.gridBox}
        >
          <Grid item>
            <Typography variant="h4" color="textSecondary">
              Hotel Reservation Summary
            </Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={3}>
              <Grid item lg={6} xs={12}>
                <Typography variant="h6" color="textSecondary">
                  Check In Date:
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {checkInMessage}
                </Typography>
              </Grid>
              <Grid item lg={6} xs={12}>
                <Typography variant="h6" color="textSecondary">
                  Check Out Date:
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {checkOutMessage}
                </Typography>
              </Grid>
              <Grid item lg={6} xs={12}>
                <Typography variant="h6" color="textSecondary">
                  Room:
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {room < 6 ? "Standard Room" : "Private Suite"}
                </Typography>
              </Grid>
              <Grid item lg={6} xs={12}>
                <Typography variant="h6" color="textSecondary">
                  Total Price:
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {`$${price}`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item>
                <Typography variant="h5" color="textSecondary">
                  Who's visiting?
                </Typography>
              </Grid>
              <Grid item>
                <FormControl>
                  <InputLabel htmlFor="pet">Your Pets</InputLabel>
                  <Select
                    native
                    value={pet}
                    onChange={handleChange}
                    className={classes.inputfield}
                  >
                    <option aria-label="None" value="" />
                    {pets.map((pet) => (
                      <option key={pet.id} value={pet.id}>
                        {pet.name}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <Button color="secondary" onClick={() => setOpenPetForm(true)}>
                  Add New A Pet
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Button color="secondary" onClick={handkeCreateOrder}>
              Confirm
            </Button>
            <Button color="secondary">Cancel</Button>
          </Grid>
        </Grid>
        {openPetForm ? (
          <PetRegisterForm setOpenPetForm={setOpenPetForm} />
        ) : null}
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  pets: state.profile.pets,
  checkInDate: state.reservation.roomReservation.check_in_date,
  checkOutDate: state.reservation.roomReservation.check_out_date,
  room: state.reservation.roomReservation.room,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPets: () => {
      dispatch(fetchPets());
    },
    onSelectPet: (pet) => {
      dispatch(handleSelectRoomPet(pet));
    },
    onCreateOrder: () => {
      dispatch(createHotelOrder());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HotelReservation);

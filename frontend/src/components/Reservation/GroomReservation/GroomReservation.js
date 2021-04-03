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
import { handleSelectGroomPet } from "../../../store/actions/reservation";
import { createGroomOrder } from "../../../store/actions/profile";
import PetRegisterForm from "../HotelReservation/PetRegisterForm/PetRegisterForm";

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

const GroomReservation = (props) => {
  const {
    pets,
    date,
    time,
    service,
    onFetchPets,
    onSelectPet,
    onCreateOrder,
  } = props;
  const classes = useStyles();
  const [pet, setPet] = useState("");
  const [openPetForm, setOpenPetForm] = useState(false);
  useEffect(() => {
    onFetchPets();
  }, []);
  const handleChange = (event) => {
    setPet(event.target.value);
    onSelectPet(event.target.value);
  };

  const handkeCreateOrder = () => {
    onCreateOrder();
  };

  const checkIn = new Date(date);
  const checkInMessage = `${time}, ${days[checkIn.getDay()]}, ${
    months[checkIn.getMonth()]
  } ${checkIn.getDate()}, ${checkIn.getFullYear()}`;

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
              Groom Reservation Summary
            </Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={3}>
              <Grid item lg={6} xs={12}>
                <Typography variant="h6" color="textSecondary">
                  Check In Date & Time:
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {checkInMessage}
                </Typography>
              </Grid>

              <Grid item lg={6} xs={12}>
                <Typography variant="h6" color="textSecondary">
                  Groom Service:
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {service === 1 ? "Bath & Brush" : "Bath & Full Haircut"}
                </Typography>
              </Grid>
              <Grid item lg={6} xs={12}>
                <Typography variant="h6" color="textSecondary">
                  Total Price:
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {service === 1 ? "$40.99" : "$70.99"}
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
  date: state.reservation.groomReservation.date,
  time: state.reservation.groomReservation.time,
  service: state.reservation.groomReservation.groom,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPets: () => {
      dispatch(fetchPets());
    },
    onSelectPet: (pet) => {
      dispatch(handleSelectGroomPet(pet));
    },
    onCreateOrder: () => {
      dispatch(createGroomOrder());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroomReservation);

import React, { useState } from "react";
import { connect } from "react-redux";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import useStyles from "./styles";

import ServicesSelection from "./ServicesSelection/ServicesSelection";
import { checkAvailableGroom } from "../../../store/actions/reservation";
import AvailableTime from "../AvailableTime/AvailableTime";

function GroomingReservation(props) {
  const { onCheckAvailableGroom } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [openServices, setOpenServices] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [openCheckAvailable, setOpenCheckAvailable] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  let servicesMessage = "select service";
  if (selectedService === null) {
    servicesMessage = "select service";
  } else if (selectedService === 0) {
    servicesMessage = "Bath & Brush";
  } else if (selectedService === 1) {
    servicesMessage = "Bath & Haircut";
  }

  const handleCheckAvailable = () => {
    const dateSummary = {
      date: `${selectedDate.getFullYear()}-${
        selectedDate.getMonth() + 1
      }-${selectedDate.getDate()}`,
    };
    setOpenServices(false);
    onCheckAvailableGroom(dateSummary);
    setOpenCheckAvailable(true);
  };

  const desktop = (
    <Grid
      container
      direction="row"
      className={classes.container}
      alignItems="center"
      justify="space-between"
    >
      <Grid item>
        <Box className={classes.dateContainer}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={classes.dateInput}
              InputProps={{
                className: classes.multilineColor,
              }}
              id="checkin"
              label="Select date"
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              minDate={Date.now()}
              value={selectedDate}
              onChange={(date) => handleDateChange(date)}
            />
          </MuiPickersUtilsProvider>
        </Box>
      </Grid>

      <Grid item>
        <Box
          className={classes.accommodationsContainer}
          onClick={() => {
            setOpenServices((prev) => !prev);
          }}
        >
          <Typography variant="subtitle1">Services</Typography>
          <Typography variant="body2">{servicesMessage}</Typography>
        </Box>
      </Grid>
      <Grid item>
        <Box className={classes.btnContainer}>
          <Button
            color="secondary"
            disableRipple
            className={classes.bookBtn}
            disabled={selectedDate === null || selectedService === null}
            onClick={handleCheckAvailable}
          >
            Check Available
          </Button>
        </Box>
      </Grid>
    </Grid>
  );

  const moblie = (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      spacing={1}
      className={classes.moblieContainer}
    >
      <Grid item>
        <Box className={classes.dateContainer}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={classes.dateInput}
              InputProps={{
                className: classes.multilineColor,
              }}
              id="checkin"
              label="Select date"
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              minDate={Date.now()}
              value={selectedDate}
              onChange={(date) => handleDateChange(date)}
            />
          </MuiPickersUtilsProvider>
        </Box>
      </Grid>

      <Grid item>
        <Box
          className={classes.servicesContainer}
          onClick={() => {
            setOpenServices((prev) => !prev);
          }}
        >
          <Typography variant="subtitle1">Services</Typography>
          <Typography variant="body2">{servicesMessage}</Typography>
        </Box>
      </Grid>
      <Grid item>
        <Box className={classes.btnContainer}>
          <Button
            color="secondary"
            disableRipple
            className={classes.bookBtn}
            disabled={selectedDate === null || selectedService === null}
            onClick={handleCheckAvailable}
          >
            Check Available
          </Button>
        </Box>
      </Grid>
    </Grid>
  );

  return (
    <React.Fragment>
      {matches ? moblie : desktop}
      {openServices ? (
        <ServicesSelection
          selectedService={selectedService}
          setSelectedService={setSelectedService}
        />
      ) : null}
      {openCheckAvailable ? (
        <AvailableTime
          setOpenCheckAvailable={setOpenCheckAvailable}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          date={`${selectedDate.getFullYear()}-${
            selectedDate.getMonth() + 1
          }-${selectedDate.getDate()}`}
          selectedService={selectedService}
        />
      ) : null}
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckAvailableGroom: (checkForm) =>
      dispatch(checkAvailableGroom(checkForm)),
  };
};

export default connect(null, mapDispatchToProps)(GroomingReservation);

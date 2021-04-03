import React, { useState } from "react";
import { connect } from "react-redux";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import useStyles from "./styles";

import { checkAvailableRoom } from "../../../store/actions/reservation";
import CheckAvailable from "./CheckAvailable/CheckAvailable";

function PetHotelReservation(props) {
  const { onCheckAvailableRoom } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [openCheckRooms, setOpenCheckRooms] = useState(false);
  const [selectedDate, setSelectedDate] = useState({
    checkInDate: null,
    checkOutDate: null,
  });
  const [selectedAccom, setSelectedAccom] = useState(null);
  const handleDateChange = (date, id) => {
    if (id === "checkin") {
      setSelectedDate((prev) => ({
        ...prev,
        checkInDate: date,
      }));
    } else if (id === "checkout") {
      setSelectedDate((prev) => ({
        ...prev,
        checkOutDate: date,
      }));
    }
  };

  const handleCheckAvailble = () => {
    const dateSummary = {
      check_in_date: `${selectedDate.checkInDate.getFullYear()}-${
        selectedDate.checkInDate.getMonth() + 1
      }-${selectedDate.checkInDate.getDate()}`,
      check_out_date: `${selectedDate.checkOutDate.getFullYear()}-${
        selectedDate.checkOutDate.getMonth() + 1
      }-${selectedDate.checkOutDate.getDate()}`,
    };
    onCheckAvailableRoom(dateSummary);
    setOpenCheckRooms(true);
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
              label="Check-in date"
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              minDate={Date.now()}
              value={selectedDate.checkInDate}
              onChange={(date) => handleDateChange(date, "checkin")}
            />
          </MuiPickersUtilsProvider>
        </Box>
      </Grid>
      <Grid item>
        <Box className={classes.dateContainer}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={classes.dateInput}
              InputProps={{
                className: classes.multilineColor,
              }}
              id="checkout"
              label="Checkout date"
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              minDate={Date.now() + 60 * 60 * 24 * 1000}
              value={selectedDate.checkOutDate}
              onChange={(date) => handleDateChange(date, "checkout")}
            />
          </MuiPickersUtilsProvider>
        </Box>
      </Grid>
      <Grid item>
        <Box className={classes.btnContainer}>
          <Button
            color="secondary"
            disableRipple
            className={classes.bookBtn}
            disabled={
              selectedDate.checkInDate === null ||
              selectedDate.checkOutDate === null
            }
            onClick={handleCheckAvailble}
          >
            Check Available
          </Button>
        </Box>
      </Grid>
    </Grid>
  );

  const mobile = (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={3}
      className={classes.mobileContainer}
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
              label="Check-in date"
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              minDate={Date.now()}
              value={selectedDate.checkInDate}
              onChange={(date) => handleDateChange(date, "checkin")}
            />
          </MuiPickersUtilsProvider>
        </Box>
      </Grid>
      <Grid item>
        <Box className={classes.dateContainer}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={classes.dateInput}
              InputProps={{
                className: classes.multilineColor,
              }}
              id="checkout"
              label="Checkout date"
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              minDate={Date.now() + 60 * 60 * 24 * 1000}
              value={selectedDate.checkOutDate}
              onChange={(date) => handleDateChange(date, "checkout")}
            />
          </MuiPickersUtilsProvider>
        </Box>
      </Grid>

      <Grid item>
        <Box className={classes.btnContainer}>
          <Button
            color="secondary"
            disableRipple
            className={classes.bookBtn}
            disabled={
              selectedDate.checkInDate === null ||
              selectedDate.checkOutDate === null
            }
            onClick={handleCheckAvailble}
          >
            Check Available
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
  return (
    <React.Fragment>
      {matches ? mobile : desktop}

      {openCheckRooms ? (
        <CheckAvailable
          selectedAccom={selectedAccom}
          setSelectedAccom={setSelectedAccom}
          setOpenCheckRooms={setOpenCheckRooms}
          checkInDate={`${selectedDate.checkInDate.getFullYear()}-${
            selectedDate.checkInDate.getMonth() + 1
          }-${selectedDate.checkInDate.getDate()}`}
          checkOutDate={`${selectedDate.checkOutDate.getFullYear()}-${
            selectedDate.checkOutDate.getMonth() + 1
          }-${selectedDate.checkOutDate.getDate()}`}
        />
      ) : null}
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckAvailableRoom: (checkForm) =>
      dispatch(checkAvailableRoom(checkForm)),
  };
};

export default connect(null, mapDispatchToProps)(PetHotelReservation);

// const desktop = (
//   <Grid
//     container
//     direction="row"
//     className={classes.container}
//     alignItems="center"
//     justify="space-between"
//   >
//     <Grid item>
//       <Box className={classes.dateContainer}>
//         <MuiPickersUtilsProvider utils={DateFnsUtils}>
//           <KeyboardDatePicker
//             className={classes.dateInput}
//             InputProps={{
//               className: classes.multilineColor,
//             }}
//             id="checkin"
//             label="Check-in date"
//             variant="inline"
//             format="MM/dd/yyyy"
//             margin="normal"
//             minDate={Date.now()}
//             value={selectedDate.checkInDate}
//             onChange={(date) => handleDateChange(date, "checkin")}
//           />
//         </MuiPickersUtilsProvider>
//       </Box>
//     </Grid>
//     <Grid item>
//       <Box className={classes.dateContainer}>
//         <MuiPickersUtilsProvider utils={DateFnsUtils}>
//           <KeyboardDatePicker
//             className={classes.dateInput}
//             InputProps={{
//               className: classes.multilineColor,
//             }}
//             id="checkout"
//             label="Checkout date"
//             variant="inline"
//             format="MM/dd/yyyy"
//             margin="normal"
//             minDate={Date.now() + 60 * 60 * 24 * 1000}
//             value={selectedDate.checkOutDate}
//             onChange={(date) => handleDateChange(date, "checkout")}
//           />
//         </MuiPickersUtilsProvider>
//       </Box>
//     </Grid>
//     <Grid item>
//       <Box
//         className={classes.guestsContainer}
//         onClick={() => {
//           setOpenGuestForm((prev) => !prev);
//           setOpenAccommodations(false);
//           setOpenCheckRate(false);
//         }}
//       >
//         <Typography variant="subtitle1">Guests</Typography>
//         <Typography variant="body2">
//           {guests.length === 0 ? "Add guests" : `${guests.length} guests`}
//         </Typography>
//       </Box>
//     </Grid>
//     <Grid item>
//       <Box
//         className={classes.accommodationsContainer}
//         onClick={() => {
//           setOpenGuestForm(false);
//           setOpenAccommodations((prev) => !prev);
//           setOpenCheckRate(false);
//         }}
//       >
//         <Typography variant="subtitle1">Accommodations</Typography>
//         <Typography variant="body2">{accomMessage}</Typography>
//       </Box>
//     </Grid>
//     <Grid item>
//       <Box className={classes.btnContainer}>
//         <Button
//           color="secondary"
//           disableRipple
//           className={classes.bookBtn}
//           disabled={
//             selectedDate.checkInDate === null ||
//             selectedDate.checkOutDate === null ||
//             guests.length === 0 ||
//             selectedAccom === null
//           }
//           onClick={handleCheckRate}
//         >
//           Check rate
//         </Button>
//       </Box>
//     </Grid>
//   </Grid>
// );

// const mobile = (
//   <Grid
//     container
//     direction="column"
//     justify="center"
//     alignItems="center"
//     spacing={1}
//     className={classes.mobileContainer}
//   >
//     <Grid item>
//       <Box className={classes.dateContainer}>
//         <MuiPickersUtilsProvider utils={DateFnsUtils}>
//           <KeyboardDatePicker
//             className={classes.dateInput}
//             InputProps={{
//               className: classes.multilineColor,
//             }}
//             id="checkin"
//             label="Check-in date"
//             variant="inline"
//             format="MM/dd/yyyy"
//             margin="normal"
//             minDate={Date.now()}
//             value={selectedDate.checkInDate}
//             onChange={(date) => handleDateChange(date, "checkin")}
//           />
//         </MuiPickersUtilsProvider>
//       </Box>
//     </Grid>
//     <Grid item>
//       <Box className={classes.dateContainer}>
//         <MuiPickersUtilsProvider utils={DateFnsUtils}>
//           <KeyboardDatePicker
//             className={classes.dateInput}
//             InputProps={{
//               className: classes.multilineColor,
//             }}
//             id="checkout"
//             label="Checkout date"
//             variant="inline"
//             format="MM/dd/yyyy"
//             margin="normal"
//             minDate={Date.now() + 60 * 60 * 24 * 1000}
//             value={selectedDate.checkOutDate}
//             onChange={(date) => handleDateChange(date, "checkout")}
//           />
//         </MuiPickersUtilsProvider>
//       </Box>
//     </Grid>
//     <Grid item>
//       <Box
//         className={classes.guestsContainer}
//         onClick={() => {
//           setOpenGuestForm((prev) => !prev);
//           setOpenAccommodations(false);
//           setOpenCheckRate(false);
//         }}
//       >
//         <Typography variant="subtitle1">Guests</Typography>
//         <Typography variant="body2">
//           {guests.length === 0 ? "Add guests" : `${guests.length} guests`}
//         </Typography>
//       </Box>
//     </Grid>
//     <Grid item>
//       <Box
//         className={classes.accommodationsContainer}
//         onClick={() => {
//           setOpenGuestForm(false);
//           setOpenAccommodations((prev) => !prev);
//           setOpenCheckRate(false);
//         }}
//       >
//         <Typography variant="subtitle1">Accommodations</Typography>
//         <Typography variant="body2">{accomMessage}</Typography>
//       </Box>
//     </Grid>
//     <Grid item>
//       <Box className={classes.btnContainer}>
//         <Button
//           color="secondary"
//           disableRipple
//           className={classes.bookBtn}
//           disabled={
//             selectedDate.checkInDate === null ||
//             selectedDate.checkOutDate === null ||
//             guests.length === 0 ||
//             selectedAccom === null
//           }
//           onClick={handleCheckRate}
//         >
//           Check rate
//         </Button>
//       </Box>
//     </Grid>
//   </Grid>
// );

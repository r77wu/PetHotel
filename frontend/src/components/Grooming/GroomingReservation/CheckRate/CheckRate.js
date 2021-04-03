import React from "react";
import { Paper, Grid, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";
function days_between(date1, date2) {
  // The number of milliseconds in one day
  const ONE_DAY = 1000 * 60 * 60 * 24;

  // Calculate the difference in milliseconds
  const differenceMs = Math.abs(date1 - date2);

  // Convert back to days and return
  return Math.round(differenceMs / ONE_DAY);
}
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
const services = ["Bath & Brush", "Bath & Full Haircut"];
function CheckRate(props) {
  const { formSummary, open } = props;
  const classes = useStyles();
  let price;

  const checkIn = `${formSummary.date.getHours()}:0${formSummary.date.getMinutes()}, ${
    days[formSummary.date.getDay()]
  }, ${months[formSummary.date.getMonth()]} ${formSummary.date.getDate()}`;
  console.log(checkIn);
  formSummary.service === 0
    ? (price = formSummary.guestsNum * 40.99)
    : (price = formSummary.guestsNum * 70.99);

  return (
    <Paper className={classes.paper}>
      <Grid
        container
        direction="column"
        spacing={1}
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h5" color="textSecondary">
            Summary
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="subtitle1" color="textSecondary">{`Service: ${
            services[formSummary.service]
          }`}</Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="subtitle1"
            color="textSecondary"
          >{`Date: ${checkIn} `}</Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="subtitle1"
            color="textSecondary"
          >{`Total Guests: ${formSummary.guestsNum}`}</Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="subtitle1"
            color="textSecondary"
          >{`Total Price: $${price}`}</Typography>
        </Grid>
        <Grid item>
          <Button color="secondary">Book</Button>
          <Button color="secondary" onClick={() => open(false)}>
            Close
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default CheckRate;

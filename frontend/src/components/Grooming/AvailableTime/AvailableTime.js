import React from "react";
import { Link } from "react-router-dom";
import { Grid, Paper, Typography, Box, Button } from "@material-ui/core";
import { connect } from "react-redux";

import useStyles from "./styles";
import {
  handleSelectGroomDate,
  handleSelectGroomTime,
  handleSelectGroomService,
} from "../../../store/actions/reservation";

const AvailableTime = (props) => {
  const {
    availablePeriods,
    setOpenCheckAvailable,
    selectedTime,
    setSelectedTime,
    onSelectDate,
    onSelectTime,
    onSelectService,
    date,
    selectedService,
  } = props;
  const classes = useStyles();
  availablePeriods.sort();
  const handleCreateSummary = () => {
    onSelectDate(date);
    onSelectTime(selectedTime);
    onSelectService(selectedService);
  };

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6" color="textSecondary" className={classes.header}>
        Current Available Time
      </Typography>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <Grid container justify="center" spacing={3}>
            {availablePeriods.map((timePeriod) => (
              <Grid item key={timePeriod}>
                <Box
                  className={classes.timeContainer}
                  onClick={() => {
                    setSelectedTime(timePeriod);
                  }}
                  style={{
                    backgroundColor:
                      selectedTime === timePeriod ? "lightblue" : "white",
                  }}
                >
                  <Typography variant="body1" color="textSecondary">
                    {timePeriod}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify="space-around">
            <Grid item>
              <Button
                color="secondary"
                component={Link}
                to="/reservation/groom-reservation"
                onClick={handleCreateSummary}
              >
                Continue
              </Button>
            </Grid>
            <Grid item>
              <Button
                color="secondary"
                onClick={() => setOpenCheckAvailable(false)}
              >
                Close
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  availablePeriods: state.reservation.availableGrooms,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectDate: (date) => {
      dispatch(handleSelectGroomDate(date));
    },
    onSelectTime: (time) => {
      dispatch(handleSelectGroomTime(time));
    },
    onSelectService: (service) => {
      dispatch(handleSelectGroomService(service));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AvailableTime);

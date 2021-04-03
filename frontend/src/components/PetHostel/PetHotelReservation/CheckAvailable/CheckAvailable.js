import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Paper,
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Button,
} from "@material-ui/core";
import PetsIcon from "@material-ui/icons/Pets";
import useStyles from "./styles";

import accommodations from "../../AccommdationsOptions";
import {
  handleSelectCheckInDate,
  handleSelectCheckOutDate,
  handleSelectRoom,
} from "../../../../store/actions/reservation";

const CheckAvailable = (props) => {
  const {
    standardRoom,
    luxuryRoom,
    selectedAccom,
    setSelectedAccom,
    setOpenCheckRooms,
    onSelectCheckInDate,
    onSelectCheckOutDate,
    onSelectRoom,
    checkInDate,
    checkOutDate,
  } = props;

  const classes = useStyles();

  const handleSelectAccom = (id) => {
    if (id === selectedAccom) {
      setSelectedAccom(null);
    } else {
      setSelectedAccom(id);
    }
  };

  const handleCreateSummary = () => {
    onSelectCheckInDate(checkInDate);
    onSelectCheckOutDate(checkOutDate);
    onSelectRoom(selectedAccom);
  };

  const standardRoomCard = (
    <Grid item>
      <Card
        className={classes.card}
        onClick={() => handleSelectAccom(0)}
        style={{
          backgroundColor: selectedAccom === 0 ? "lightblue" : "white",
        }}
      >
        <CardHeader
          title={accommodations[0].title}
          avatar={
            <Avatar>
              <PetsIcon />
            </Avatar>
          }
          classes={{ title: classes.title }}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {accommodations[0].description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );

  const luxuryRoomCard = (
    <Grid item>
      <Card
        className={classes.card}
        onClick={() => handleSelectAccom(1)}
        style={{
          backgroundColor: selectedAccom === 1 ? "lightblue" : "white",
        }}
      >
        <CardHeader
          title={accommodations[1].title}
          avatar={
            <Avatar>
              <PetsIcon />
            </Avatar>
          }
          classes={{ title: classes.title }}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {accommodations[1].description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );

  const noAvailableRoom = (
    <Grid item>
      <Typography variant="h6" color="textSecondary">
        There is no available room on the selected date.
      </Typography>
    </Grid>
  );

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6" color="textSecondary" className={classes.header}>
        Current Available Accommodations
      </Typography>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <Grid
            container
            justify="space-around"
            alignItems="center"
            spacing={2}
          >
            {standardRoom.length !== 0 ? standardRoomCard : null}
            {luxuryRoom.length !== 0 ? luxuryRoomCard : null}
            {standardRoom.length === 0 && luxuryRoom.length === 0
              ? noAvailableRoom
              : null}
          </Grid>
        </Grid>

        <Grid item>
          <Grid container justify="space-around">
            <Grid item>
              <Button
                component={Link}
                to="/reservation/hotel-reservation"
                color="secondary"
                disabled={
                  (standardRoom.length === 0 && luxuryRoom.length === 0) ||
                  selectedAccom === null
                }
                onClick={handleCreateSummary}
              >
                Continue
              </Button>
            </Grid>
            <Grid item>
              <Button
                color="secondary"
                onClick={() => setOpenCheckRooms(false)}
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

const mapStateToProps = (state) => {
  return {
    standardRoom: state.reservation.availableRooms.StandardRoom,
    luxuryRoom: state.reservation.availableRooms.LuxuryRoom,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectCheckInDate: (date) => {
      dispatch(handleSelectCheckInDate(date));
    },
    onSelectCheckOutDate: (date) => {
      dispatch(handleSelectCheckOutDate(date));
    },
    onSelectRoom: (room) => {
      dispatch(handleSelectRoom(room));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckAvailable);

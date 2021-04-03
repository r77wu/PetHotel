import React, { useState } from "react";
import {
  Paper,
  TextField,
  MenuItem,
  Grid,
  FormControl,
  InputLabel,
  Select,
  Button,
  Box,
} from "@material-ui/core";

import useStyles from "./styles";

function GuestForm(props) {
  const classes = useStyles();
  const { guests, setGuests } = props;
  const handleChange = (event, id) => {
    const updatedGuests = guests.map((guest) => {
      if (guest.id === id) {
        return {
          ...guest,
          [event.target.name]: event.target.value,
        };
      } else {
        return guest;
      }
    });
    setGuests(updatedGuests);
  };

  const handleAddGuest = () => {
    setGuests((prev) => [
      ...prev,
      { id: prev.length, guestName: "", age: "", breed: "" },
    ]);
  };

  const handleRemoveGuest = (id) => {
    const updatedGuests = guests.filter((guest) => {
      if (guest.id !== id) {
        return guest;
      }
    });

    setGuests(updatedGuests);
  };
  const handleSave = () => {};
  return (
    <Paper className={classes.paper}>
      <Box>
        <Button
          color="secondary"
          onClick={handleAddGuest}
          className={classes.addGuestBtn}
          disabled={guests.length >= 5}
        >
          Add a Guest
        </Button>
      </Box>
      <form className={classes.form}>
        <Grid container direction="column" alignItems="center" spacing={2}>
          {guests.map((guest) => (
            <Grid item key={guest.id}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                spacing={3}
              >
                <Grid item>
                  <TextField
                    label="Guest name"
                    variant="filled"
                    type="text"
                    name="guestName"
                    value={guest.guestName}
                    classes={{ root: classes.inputfield }}
                    onChange={(event) => handleChange(event, guest.id)}
                  />
                </Grid>
                <Grid item>
                  <FormControl variant="filled" className={classes.selectMenu}>
                    <InputLabel id="demo-simple-select-outlined-label">
                      Age
                    </InputLabel>
                    <Select
                      name="age"
                      value={guest.age}
                      onChange={(event) => handleChange(event, guest.id)}
                      label="Age"
                      classes={{ root: classes.selectDisplay }}
                    >
                      <MenuItem value={"Adult"} className={classes.selectItem}>
                        Adult
                      </MenuItem>
                      <MenuItem value={"Puppy"} className={classes.selectItem}>
                        Puppy
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <TextField
                    label="Breed"
                    variant="filled"
                    type="text"
                    name="breed"
                    value={guest.breed}
                    classes={{ root: classes.inputfield }}
                    onChange={(event) => handleChange(event, guest.id)}
                  />
                </Grid>
                <Grid item>
                  <Button
                    color="secondary"
                    onClick={() => handleRemoveGuest(guest.id)}
                  >
                    Remove
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          ))}
          <Grid item>
            <Button color="secondary" onClick={handleSave}>
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default GuestForm;

{
  /* <Grid container direction="column" spacing={3}>
        <Grid item>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h6" color="textSecondary">
                Guests
              </Typography>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item>
                  <Button>-</Button>
                </Grid>
                <Grid item>
                  <Typography variant="body1" color="textSecondary">
                    0
                  </Typography>
                </Grid>
                <Grid item>
                  <Button>+</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h6" color="textSecondary">
                Age
              </Typography>
            </Grid>
            <Grid item>
              <FormControl variant="outlined">
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value={"Adult"}>Adult</MenuItem>
                  <MenuItem value={"Puppy"}>Puppy</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h6" color="textSecondary">
                Breed
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" color="textSecondary">
                Breed
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid> */
}

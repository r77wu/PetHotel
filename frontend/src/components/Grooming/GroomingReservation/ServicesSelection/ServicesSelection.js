import React, { useState } from "react";
import {
  Paper,
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Avatar,
} from "@material-ui/core";
import PetsIcon from "@material-ui/icons/Pets";
import useStyles from "./styles";

import services from "../../Services";

function AccommodationsIntro(props) {
  const classes = useStyles();
  const { selectedService, setSelectedService } = props;

  const handleSelectService = (id) => {
    if (id === selectedService) {
      setSelectedService(null);
    } else {
      setSelectedService(id);
    }
  };
  return (
    <Paper className={classes.paper}>
      <Typography variant="h6" color="textSecondary" className={classes.header}>
        Grooming services
      </Typography>
      <Grid
        container
        justify="space-around"
        className={classes.cardsContainer}
        spacing={1}
      >
        {services.map((service) => (
          <Grid item key={service.id}>
            <Card
              className={classes.card}
              onClick={() => handleSelectService(service.id)}
              style={{
                backgroundColor:
                  selectedService === service.id ? "lightblue" : "white",
              }}
            >
              <CardHeader
                title={service.title}
                avatar={
                  <Avatar>
                    <PetsIcon />
                  </Avatar>
                }
                classes={{ title: classes.title }}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export default AccommodationsIntro;

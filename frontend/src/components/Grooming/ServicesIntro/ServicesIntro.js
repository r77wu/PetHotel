import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Avatar,
  Typography,
  Divider,
} from "@material-ui/core";
import PetsIcon from "@material-ui/icons/Pets";
import useStyles from "./styles";

import services from "../Services";

function ServicesIntro(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h4" color="textSecondary" className={classes.header}>
        Our Accommdations
      </Typography>
      <Grid container justify="center" alignItems="center" spacing={10}>
        {services.map((service) => (
          <Grid item key={service.id}>
            <Card className={classes.card}>
              <CardHeader
                title={service.title}
                avatar={
                  <Avatar>
                    <PetsIcon />
                  </Avatar>
                }
                classes={{ title: classes.title }}
              />
              <CardMedia
                image={service.photo}
                title={service.title}
                style={{ height: "300px" }}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  {service.description}
                </Typography>
                <Divider style={{ margin: "10px 0" }} />
                <Typography
                  variant="h6"
                  color="textSecondary"
                >{`Price: $${service.price}`}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}

export default ServicesIntro;

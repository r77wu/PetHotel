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

import accommodations from "../AccommdationsOptions";

function AccommodationIntro(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h4" color="textSecondary" className={classes.header}>
        Our Accommdations
      </Typography>
      <Grid container justify="center" alignItems="center" spacing={10}>
        {accommodations.map((accommodation) => (
          <Grid item key={accommodation.id}>
            <Card className={classes.card}>
              <CardHeader
                title={accommodation.title}
                avatar={
                  <Avatar>
                    <PetsIcon />
                  </Avatar>
                }
                classes={{ title: classes.title }}
              />
              <CardMedia
                image={accommodation.photo}
                title={accommodation.title}
                style={{ height: "300px" }}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  {accommodation.description}
                </Typography>
                <Divider style={{ margin: "10px 0" }} />
                <Typography
                  variant="h6"
                  color="textSecondary"
                >{`Price: $${accommodation.price}/night`}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}

export default AccommodationIntro;

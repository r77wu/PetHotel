import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  Box,
} from "@material-ui/core";
import useStyles from "./styles";

import randomName from "../../../../assets/helper/randomName";

function Adoptables(props) {
  const classes = useStyles();
  const [adoptables, setAdoptables] = useState([]);
  useEffect(async () => {
    const pics = await axios.get("https://dog.ceo/api/breeds/image/random/6");
    let dogs = [];
    for (let i = 0; i < pics.data.message.length; i++) {
      dogs.push({
        id: i,
        name: randomName(),
        pic: pics.data.message[i],
      });
    }
    setAdoptables(dogs);
  }, []);

  let content = null;
  if (adoptables.length > 0) {
    content = (
      <Grid
        container
        alignItems="center"
        justify="space-around"
        alignContent="center"
        spacing={2}
      >
        {adoptables.map((dog) => (
          <Grid item key={dog.id} lg={4} className={classes.cardContainer}>
            <Card className={classes.card}>
              <CardHeader title={dog.name} classes={{ title: classes.title }} />
              <CardMedia image={dog.pic} className={classes.pic} />
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
  return (
    <Grid container justify="center" alignItems="center" spacing={2}>
      <Grid item>
        <Typography variant="h3">Available Adoptables</Typography>
      </Grid>
      <Grid item>{content}</Grid>
    </Grid>
  );
}

export default Adoptables;

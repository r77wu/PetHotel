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

import accommodations from "../../AccommdationsOptions";

function AccommodationsIntro(props) {
  const classes = useStyles();
  const { selectedAccom, setSelectedAccom } = props;

  const handleSelectAccom = (id) => {
    if (id === selectedAccom) {
      setSelectedAccom(null);
    } else {
      setSelectedAccom(id);
    }
  };

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6" color="textSecondary" className={classes.header}>
        Current Available Accommodations
      </Typography>
      <Grid container justify="space-around" className={classes.cardsContainer}>
        {}
      </Grid>
    </Paper>
  );
}

export default AccommodationsIntro;

// {accommodations.map((accommodation) => (
//   <Grid item key={accommodation.id}>
//     <Card
//       className={classes.card}
//       onClick={() => handleSelectAccom(accommodation.id)}
//       style={{
//         backgroundColor:
//           selectedAccom === accommodation.id ? "lightblue" : "white",
//       }}
//     >
//       <CardHeader
//         title={accommodation.title}
//         avatar={
//           <Avatar>
//             <PetsIcon />
//           </Avatar>
//         }
//         classes={{ title: classes.title }}
//       />
//       <CardContent>
//         <Typography variant="body2" color="textSecondary">
//           {accommodation.description}
//         </Typography>
//       </CardContent>
//     </Card>
//   </Grid>
// ))}

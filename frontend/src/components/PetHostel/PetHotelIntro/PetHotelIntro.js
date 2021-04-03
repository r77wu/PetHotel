import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import { Button, Box, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function PetHostelIntro(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box className={classes.container}>
      {props.children}
      <Box className={classes.sloganContainer}>
        <Typography variant="h2" color="textPrimary" className={classes.slogan}>
          It’s good to be home
        </Typography>
        <Typography
          variant="body1"
          color={matches ? "textSecondary" : "textPrimary"}
          className={classes.slogan}
        >
          We offer a safe, clean, temperature-controlled environment, playtime,
          exercise, healthy meals and more. Guests will feel at home with us.
        </Typography>
        <Button variant="outlined" component={Link} to="/petshotel">
          Learn More
        </Button>
      </Box>
      <Box className={classes.cited}>
        <Typography variant="body2" color="primary">
          <span>
            Photo by{" "}
            <a
              href="https://unsplash.com/@qrupt?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
              className={classes.link}
            >
              Victor Grabarczyk
            </a>{" "}
            on{" "}
            <a
              href="https://unsplash.com/s/photos/dog?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
              className={classes.link}
            >
              Unsplash
            </a>
          </span>
        </Typography>
      </Box>
    </Box>
  );
}

export default PetHostelIntro;

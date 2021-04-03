import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";

function AdoptionIntro(props) {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.sloganContainer}>
        <Typography
          variant="h2"
          color="textSecondary"
          className={classes.slogan}
        >
          Let’s Play Again, Adopt them
        </Typography>

        <Button
          variant="outlined"
          className={classes.btn}
          component={Link}
          to="/adoption"
        >
          Learn More
        </Button>
      </Box>
      <Box className={classes.cited}>
        <Typography variant="body2" color="textSecondary">
          <span>
            Photo by{" "}
            <a
              href="https://unsplash.com/@fbngsk?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
              className={classes.link}
            >
              Fabian Gieske
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

export default AdoptionIntro;
